import 'reflect-metadata';
import express  from "express";
import path from "path";

import'./database/connect'
import routes from "./router";

const app = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );


app.use(express.json);

app.use(routes);



app.listen(3000, ()=>console.log('🚀 Server started at http://localhost:3000'));
