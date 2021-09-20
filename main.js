

const ball = document.querySelector(`#full-ball`);
const message = document.querySelector(`#message`);
const form = document.querySelector(`form`);
const inquiry = document.querySelector(`#inquiry-bar`);
const triangle = document.querySelector(`#message-display`);

const baseUrl = `http://localhost:4005`

const submitQ = (e) => {

    if (inquiry && inquiry.value) {
    e.preventDefault()
    axios.get(`${baseUrl}/fortune`)
    .then((res) => {
        ball.classList.toggle(`ball`)
        message.classList.toggle(`fade-out`)
        triangle.classList.toggle(`fade-out`)
        setTimeout(() => {
            message.classList.toggle(`fade-out`)
            triangle.classList.toggle(`fade-out`)
            message.classList.toggle(`fade-in`)
            triangle.classList.toggle(`fade-in`)
            message.textContent = res.data
        }, 1000)
        setTimeout(() => {
            ball.classList.toggle(`ball`)
            message.classList.toggle(`fade-in`)
            triangle.classList.toggle(`fade-in`)
        }, 5000)
    })
    inquiry.value= ``
    } else {
        alert(`Please type a question!`)
    }
};


const submitHandler = () => {

    const submit = form.submit(submitQ)
    return submit
};


ball.addEventListener(`click`, submitQ);


