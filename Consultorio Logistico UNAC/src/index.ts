import "reflect-metadata"

import express from "express";
import database from "./config/database";
import routes from "./routes/index";

const PORT = process.env.PORT || 3030;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}));

database.initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error)

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`App execute in port: ${PORT}`)
});