
const express=require("express")
const Calculate = require('./calc');

const app=express();
const port=8000;

const question = process.argv.slice(2).join(' ');

if (!question) {
  console.log('Use Like this way:node server.js "What is <num1> <operation> <num2>?"');
} else {
  const result = Calculate(question);
  console.log(result);
}


app.listen(port,()=>{
  console.log(`Server is Started in ${port}`)
})