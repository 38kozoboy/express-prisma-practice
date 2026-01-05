import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true });
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { email, name } = req.body;
  try {
    const user = await prisma.user.create({ data: { email, name } });
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, async () => {
  await prisma.$connect();
  console.log(`Server listening on http://localhost:${port}`);
});
