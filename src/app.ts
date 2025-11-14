import dotenv from "dotenv";
import "dotenv/config";
import e from "express";

dotenv.config();

const app = e();
app.use(e.json());

export default app;
