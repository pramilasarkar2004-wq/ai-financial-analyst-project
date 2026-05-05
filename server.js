const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.post("/analyze", (req, res) => {
  const userText = req.body.text;
  const lower = userText.toLowerCase();

  let result = "";

  if (lower.includes("profit") || lower.includes("growth") || lower.includes("bull") || lower.includes("record") || lower.includes("surge")) {
    result = "📈 Sentiment: BULLISH\n\nPositive financial signals detected. Investors may view this favorably.";
  } else if (lower.includes("loss") || lower.includes("decline") || lower.includes("bear") || lower.includes("crash") || lower.includes("fell")) {
    result = "📉 Sentiment: BEARISH\n\nNegative financial signals detected. Caution is advised.";
  } else {
    result = "🔍 Sentiment: NEUTRAL\n\nNo strong bullish or bearish signals detected.";
  }

  res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on port " + PORT));
