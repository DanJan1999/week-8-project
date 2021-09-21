const express = require(`express`);
const cors = require(`cors`);
const path = require(`path`);

const app = express();

app.use(express.json());
app.use(cors());

const repeatedQs = []

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../index.html`))
});

app.get(`/fortune`, (req, res) => {
    const fortunes = [
        {type:'positive', value:`It is certain.`},
        {type:'positive', value:`Without a doubt.`},
        {type:'positive', value:`You may rely on it.`},
        {type:'positive', value:`Yes definitely.`},
        {type:'positive', value:`It is decidedly so.`},
        {type:'positive', value:`As I see it, yes.`},
        {type:'positive', value:`Most likely.`},
        {type:'positive', value:`Yes.`},
        {type:'positive', value:`Outlook good.`},
        {type:'positive', value:`Signs point to yes.`},
        {type:'neutral', value:`Reply hazy try again`},
        {type:'neutral', value:`Better not tell you now.`},
        {type:'neutral', value:`Ask again later.`},
        {type:'neutral', value:`Cannot predict now.`},
        {type:'neutral', value:`Concentrate and ask again.`},
        {type:'negative', value:`Don’t count on it.`},
        {type:'negative', value:`Outlook not so good.`},
        {type:'negative', value:`My sources say no.`},
        {type:'negative', value:`Very doubtful.`},
        {type:'negative', value:`My reply is no.`}
    ]
    let randomIndex = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[randomIndex]
    res.status(200).send(randomFortune)
});

 

app.get(`/js`, (req, res) => {
    res.sendFile(path.join(__dirname, `../main.js`))
}) ;

app.get(`/css`, (req, res) => {
    res.sendFile(path.join(__dirname, `../styles.css`))
});

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Up and running on port ${port}`)
});