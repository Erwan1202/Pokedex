import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
