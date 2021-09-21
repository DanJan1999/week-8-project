// const { app } = require("express");


const ball = document.querySelector(`#full-ball`);
const message = document.querySelector(`#message`);
const form = document.querySelector(`form`);
const inquiry = document.querySelector(`#inquiry-bar`);
const triangle = document.querySelector(`#message-display`);

let repeatedQuestions = []

const ballToggle = () => ball.classList.toggle(`ball`)
const fadeOut = () => {
    message.classList.toggle(`fade-out`)
    triangle.classList.toggle(`fade-out`)
}
const fadeIn = () => {
    message.classList.toggle(`fade-in`)
    triangle.classList.toggle(`fade-in`)
}

const submitQ = (e) => {
    e.preventDefault()
    let inquirys = inquiry.value
    const runGet = () => {
        e.preventDefault()
        axios.get(`/fortune`)
        .then((res) => {
            ball.classList.toggle(`ball`)
            message.classList.toggle(`fade-out`)
            triangle.classList.toggle(`fade-out`)
            let repQ = { type:`${res.data.type}`, key:`${inquirys}`, value:`${res.data.value}` }
            if (repQ.type === `positive` || repQ.type === `negative`) {
            repeatedQuestions.push(repQ)
            }
            setTimeout(() => {
                fadeOut()
                fadeIn()
                message.textContent = res.data.value
            }, 700)
            setTimeout(() => {
                ballToggle()
                fadeIn()
            }, 5000)
        })
    }
    console.log(inquirys)
    console.log(repeatedQuestions)
    if (inquiry && inquirys) {
    if (repeatedQuestions.length === 0){
        runGet()
    } else if (repeatedQuestions.length >= 1){
    for (let i = 0; i < repeatedQuestions.length; i++) {
            if (repeatedQuestions[i].key === `${inquirys}`) {
                ballToggle()
                fadeOut()
                setTimeout(() => {
                    fadeOut()
                    fadeIn()
                    message.textContent = repeatedQuestions[i].value
                        }, 700)
                        setTimeout(() => {
                            ballToggle()
                            fadeIn()
                        }, 5000)
                    }else {
                        runGet()
                    }
                } 
            }
        inquiry.value = ``
    } else {
        alert(`Please type a question`)
    }
};

const submitHandler = () => {
    const submit = form.submit(submitQ)
    return submit
};

ball.addEventListener(`click`, submitQ);