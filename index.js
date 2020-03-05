const express=require('express');
const app=express();
app.listen(3000,()=>console.log("Pokrenuli smo 3000 port"));
app.use(express.static('src'));