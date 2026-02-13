const express = require('express');
const multer = require("multer");
const pdfParse = require("pdf-parse");
const fs = require("fs");
const mongoose = require("mongoose");
const router = express.Router(); // Corrected Router initialization
const natural = require("natural");
const _ = require("lodash");
const nlp = require("compromise");
const path = require("path");
// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/quizGenerator", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected: quizGenerator"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// Define Schema & Model
const QuizSchema = new mongoose.Schema({
    title: String,
    questions: Array
});
const Quiz = mongoose.model("Quiz", QuizSchema);

// Multer Storage Setup with custom storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify where to save uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Assign a unique filename
    }
});

const upload = multer({ storage: storage });

// Function to generate different types of questions
function generateQuestions(text) {
    const sentences = text.split(".").filter(s => s.trim().length > 10); // Extract meaningful sentences
    const tokenizer = new natural.WordTokenizer();

    let questions = [];
    let usedSentences = new Set();

    for (let i = 0; i < 10; i++) {
        let sentence = sentences[Math.floor(Math.random() * sentences.length)];
        if (!sentence || usedSentences.has(sentence)) continue;

        usedSentences.add(sentence);
        let words = tokenizer.tokenize(sentence);

        let questionType = _.sample(["wh", "fill", "trueFalse", "mcq"]);

        if (questionType === "wh") {
            let whWord = _.sample(["What", "Who", "When", "Where", "Why", "How"]);
            let question = `${whWord} ${sentence}?`;
            let answer = sentence;
            questions.push({ type: "WH", question, options: [], answer });
        }

        else if (questionType === "fill") {
            let wordToRemove = words[Math.floor(Math.random() * words.length)];
            let question = sentence.replace(wordToRemove, "______");
            let options = _.shuffle([
                wordToRemove,
                words[Math.floor(Math.random() * words.length)],
                words[Math.floor(Math.random() * words.length)],
                words[Math.floor(Math.random() * words.length)]
            ]);
            questions.push({ type: "Fill in the Blank", question, options, answer: wordToRemove });
        }

        else if (questionType === "trueFalse") {
            let question = sentence;
            let isTrue = Math.random() > 0.5;
            let answer = isTrue ? "True" : "False";
            questions.push({ type: "True/False", question, options: ["True", "False"], answer });
        }

        else if (questionType === "mcq") {
            let keyword = words[Math.floor(Math.random() * words.length)];
            let question = `What is '${keyword}' related to in this context?`;
            let options = _.shuffle([
                sentence,
                "A random incorrect answer",
                "Another wrong choice",
                "Completely unrelated option"
            ]);
            questions.push({ type: "MCQ", question, options, answer: sentence });
        }
    }

    return questions;
}

// Upload & Process PDF Route
router.post("/upload", upload.single("pdf"), async (req, res) => {
    try {
        const dataBuffer = fs.readFileSync(req.file.path);
        const data = await pdfParse(dataBuffer);
        const extractedText = data.text;

        // Generate diverse questions
        const questions = generateQuestions(extractedText);

        // Save quiz in DB
        const quiz = new Quiz({ title: req.file.originalname, questions });
        await quiz.save();

        // Optional: Delete the file after processing
        fs.unlinkSync(req.file.path);

        res.json({ quizId: quiz._id, questions });
    } catch (error) {
        console.error("Error processing PDF:", error);
        res.status(500).json({ error: "Failed to process PDF" });
    }
});

// Fetch Quizzes from DB
router.get("/quizzes", async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        console.error("Error fetching quizzes:", error);
        res.status(500).json({ error: "Failed to fetch quizzes" });
    }
});

module.exports = router;
