import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import app from "./app.js";
import { connectDB } from "./db/connectDB.js";
import { syncModels } from "./models/index.js";

const PORT = process.env.PORT || 3000;

connectDB()
  .then(async () => {
    console.log("Connected to the DB successfully.");
    await syncModels();
    app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
