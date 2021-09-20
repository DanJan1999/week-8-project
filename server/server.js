const express = require(`express`);
const cors = require(`cors`);
const path = require(`path`);

const app = express();

app.use(express.json());
app.use(cors());


app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../index.html`))
});

app.get(`/fortune`, (req, res) => {
    const fortunes = [
        `It is certain.`,
        `Without a doubt.`,
        `You may rely on it.`,
        `Yes definitely.`,
        `It is decidedly so.`,
        `As I see it, yes.`,
        `Most likely.`,
        `Yes.`,
        `Outlook good.`,
        `Signs point to yes.`,
        `Reply hazy try again`,
        `Better not tell you now.`,
        `Ask again later.`,
        `Cannot predict now.`,
        `Concentrate and ask again.`,
        `Don’t count on it.`,
        `Outlook not so good.`,
        `My sources say no.`,
        `Very doubtful.`,
        `My reply is no.`
    ]

    let randomIndex = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[randomIndex]
    console.log(randomFortune)
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