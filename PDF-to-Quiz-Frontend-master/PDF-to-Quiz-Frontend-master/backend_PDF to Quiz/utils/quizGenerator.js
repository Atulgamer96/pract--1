const nlp = require("compromise");

const extractKeywords = (text) => {
    const doc = nlp(text);
    
    const keywords = [
        ...doc.nouns().out("array"),
        ...doc.people().out("array"),
        ...doc.places().out("array"),
        ...doc.dates().out("array")
    ];

    return [...new Set(keywords)].slice(0, 10); 
};

const generateMCQs = (text) => {
    const keywords = extractKeywords(text);
    const sentences = text.split(". ");
    let usedSentences = new Set();

    const whQuestions = [
        "What is", "Why is", "How does", "Where is", "When was", "Who discovered"
    ];

    return keywords.map((keyword) => {
        const sentence = sentences.find(sent => sent.includes(keyword) && !usedSentences.has(sent)) || "No context available.";
        usedSentences.add(sentence);

        let correctAnswer = sentence.split(keyword)[1]?.trim().split(" ").slice(0, 5).join(" ") || "Not available";

        // Generate incorrect options intelligently
        let incorrectOptions = keywords.filter(k => k !== keyword).slice(0, 3);

        while (incorrectOptions.length < 3) {
            incorrectOptions.push(`Random choice`);
        }

        let options = [...incorrectOptions, correctAnswer].sort(() => Math.random() - 0.5);

        return {
            question: `${whQuestions[Math.floor(Math.random() * whQuestions.length)]} "${keyword}"?`,
            options: options,
            answer: correctAnswer
        };
    });
};

module.exports = { generateMCQs };