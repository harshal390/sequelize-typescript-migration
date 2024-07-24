import express, { Request, Response } from "express";
import dotenv from "dotenv";
import db from "./models";
import { createProjects, createUserProjects, createUsers } from "./controllers";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const port = process.env.PORT ?? 3000;

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

createUsers();
createProjects();
createUserProjects();

db.sequelize.sync().then(() => {
  app
    .listen(port, () => {
      console.log(`Your application running at http://localhost:${port}`);
    })
    .on("error", (error) => {
      // gracefully handle error
      throw new Error(error.message);
    });
});
