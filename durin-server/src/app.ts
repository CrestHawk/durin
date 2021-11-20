import { Express } from "express";

const express = require('express');
const app = express();
 
app.get('/', function (request: any, res: any) {
  res.send('Hello World');
});
 
app.listen(3000);