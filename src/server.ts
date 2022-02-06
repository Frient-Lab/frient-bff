import "reflect-metadata";
import express from "express";
import cors from 'cors';
import "./database";
import { routes } from "./routes";

const app = express();


app.use(cors());

// const cors = require('cors');

// app.use((req, res, next) => {
// 	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//     res.header("Access-Control-Allow-Origin", "*");
// 	//Quais são os métodos que a conexão pode realizar na API
//     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//     app.use(cors());
//     next();
// });

app.use(express.json());

app.use(routes);

app.listen(4000, () => console.log("Server is running"));