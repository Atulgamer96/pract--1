const express = require("express");
require("dotenv").config();
const multer = require("multer");
const pdfParse = require("pdf-parse");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");
const natural = require("natural");
const _ = require("lodash");
const nlp = require("compromise");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected: quizGenerator"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// Define Schema & Model
const QuizSchema = new mongoose.Schema({
    title: String,
    questions: Array
});
const Quiz = mongoose.model("Quiz", QuizSchema);

// Multer Storage Setup
const upload = multer({ dest: "uploads/" });

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
app.post("/upload", upload.single("pdf"), async (req, res) => {
    try {
        const dataBuffer = fs.readFileSync(req.file.path);
        const data = await pdfParse(dataBuffer);
        const extractedText = data.text;

        // Generate diverse questions
        const questions = generateQuestions(extractedText);

        // Save quiz in DB
        const quiz = new Quiz({ title: req.file.originalname, questions });
        await quiz.save();

        res.json({ quizId: quiz._id, questions });
    } catch (error) {
        console.error("Error processing PDF:", error);
        res.status(500).json({ error: "Failed to process PDF" });
    }
});

// Fetch Quizzes from DB
app.get("/quizzes", async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        console.error("Error fetching quizzes:", error);
        res.status(500).json({ error: "Failed to fetch quizzes" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));