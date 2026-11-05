import express from "express";

const router = express.Router();

// INDEX
router.get("/", (req, res) => {
  res.send("Lista dei libri");
});

//show (READ)
router.get("/:id", (req, res) => {
  const bookId = req.params.id;
  res.send(`Dettagli del libro con id: ${bookId}`);
});

//store (CREATE)
router.post("/", (req, res) => {
  res.send("Creazione nuovo libro");
});

//update (UPDATE)
router.put("/:id", (req, res) => {
  const bookId = req.params.id;
  res.send(`Modifica integrale del libro con id: ${bookId}`);
});

//modify (UPDATE)
router.patch("/:id", (req, res) => {
  const bookId = req.params.id;
  res.send(`Modifica parziale del libro con id: ${bookId}`);
});

//destroy (DELETE)
router.delete("/:id", (req, res) => {
  const bookId = req.params.id;
  res.send(`Eliminazione del libro con id: ${bookId}`);
});

export default router;
