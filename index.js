import express from "express";
import bot from "./bot.js";
import { config } from "dotenv";
config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5001;
app.listen(port, () => {
    bot.start();
    console.log(`Project is running on port: ${port}`);
});
