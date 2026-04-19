import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.SESSION_SECRET || "nmultimidia-crm-2024";
const ADMIN_EMAIL = "gabrieltatai@nmultimidia.com";
const ADMIN_PASSWORD = "N@thansteel2022";

export function checkCredentials(email: string, password: string): boolean {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export function signToken(email: string): string {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): { email: string } {
  return jwt.verify(token, JWT_SECRET) as { email: string };
}
