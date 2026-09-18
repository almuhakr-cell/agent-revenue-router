import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    system: "agent-revenue-router",
    version: "1.0.0"
  });
});

app.get("/health", (req, res) => {
  res.json({
    healthy: true
  });
});

app.listen(PORT, () => {
  console.log(`Agent Revenue Router running on port ${PORT}`);
});
