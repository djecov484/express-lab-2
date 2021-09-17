const express = require('express');
const app = express();
const port = 3001;


app.get('/greeting/', (req, res) => {
  res.send('Hello, stranger');
});

app.get('/greeting/:name', (req, res) => {
  res.send('Hello, ' + req.params.name + ' !' + ' It is so greate to see you.');
  });




app.get('/tip/:total/:tipPercentage', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  let total = parseInt(req.params.total);
  let tipPercentage = parseInt(req.params.tipPercentage) / 100;
  let test = total * tipPercentage;
  console.log(test);
  res.send(`${test}`);
})




const magic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
// const randomnumber = Math.floor(Math.random() * magic.length)
// const randomanswer = magic[randomnumber];
// console.log(randomnumber);

// app.get('/magic/:question', (req, res) => {
//   res.send(req.params.question);
// })


app.get('/magic/:question', (req, res) => {
  const randomnumber = Math.floor(Math.random() * magic.length)
  
  res.send(`<h1>your question was ${req.params.question}: ${magic[randomnumber]}</h1>`)
})

app.listen(port, (req)=> {
  console.log(`Greeting express application created. ${port}`);
});