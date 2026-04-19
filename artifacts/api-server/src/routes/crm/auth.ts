import { Router } from "express";
import { checkCredentials, signToken } from "../../lib/auth";

const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };

  if (!email || !password) {
    res.status(400).json({ error: "Email and password required" });
    return;
  }

  if (!checkCredentials(email, password)) {
    res.status(401).json({ error: "Credenciais inválidas" });
    return;
  }

  const token = signToken(email);
  res.json({ token, email });
});

export default router;
