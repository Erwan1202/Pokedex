import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Servir les sprites (dossier public)
app.use("/sprites", express.static(path.join(__dirname, "public", "sprites")));

// Charger les données au démarrage
const dbPath = path.join(__dirname, "data", "pokemons.json");
let POKEMONS = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

// Healthcheck
app.get("/health", (req, res) => res.json({ ok: true }));

/**
 * GET /api/pokemon
 * Query params:
 *  - q: recherche (name, abilities)
 *  - type: filtre exact sur un type
 *  - limit, offset: pagination simple (optionnel)
 */
app.get("/api/pokemon", (req, res) => {
  const { q, type, limit, offset } = req.query;

  let data = [...POKEMONS];

  if (q) {
    const s = q.toString().toLowerCase();
    data = data.filter(
      p =>
        p.name.toLowerCase().includes(s) ||
        (p.abilities || []).some(a => a.toLowerCase().includes(s))
    );
  }

  if (type) {
    const t = type.toString().toLowerCase();
    data = data.filter(p => (p.types || []).some(tt => tt.toLowerCase() === t));
  }

  // tri  par id 
  data.sort((a, b) => a.id - b.id);

// Pagination
  const L = Math.max(0, parseInt(limit ?? "0", 10));
  const O = Math.max(0, parseInt(offset ?? "0", 10));
  if (L > 0) data = data.slice(O, O + L);

  res.json(data);
});

/**
 * GET /api/pokemon/:id
 */
app.get("/api/pokemon/:id", (req, res) => {
  const id = Number(req.params.id);
  const p = POKEMONS.find(x => x.id === id);
  if (!p) return res.status(404).json({ error: "Not found" });
  res.json(p);
});

// 404 API
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
