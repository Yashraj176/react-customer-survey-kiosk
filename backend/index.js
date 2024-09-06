const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies

// MongoDB connection
mongoose
  .connect("mongodb+srv://yashraj1761999:yashrajreact-survey17@react-survey.gbojv.mongodb.net/?retryWrites=true&w=majority&appName=react-survey", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error: ", err));

// Survey Schema
const surveySchema = new mongoose.Schema({
  sessionId: String,
  answers: [
    {
      questionId: Number,
      answer: mongoose.Schema.Types.Mixed, // Can store either rating or text
    },
  ],
  status: { type: String, default: "PENDING" }, // PENDING or COMPLETED
});

// Survey Model
const Survey = mongoose.model("Survey", surveySchema);

// Routes

// POST route to submit survey
app.post("/submit-survey", async (req, res) => {
  const { sessionId, answers } = req.body;

  try {
    const survey = new Survey({
      sessionId,
      answers,
      status: "COMPLETED",
    });

    await survey.save();

    res.status(201).json({ message: "Survey submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving survey", error });
  }
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
