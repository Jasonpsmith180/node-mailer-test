// get the form by its id
const form = document.getElementById("contact-form");

// add event listener for submit button
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    let mail = new FormData(form);

    sendMail(mail);
})

// create post method to send data
const sendMail = (mail) => {
    fetch("https://mighty-headland-08029.herokuapp.com/send", {
        method: "post",
        body: mail
    })
    .then((response) => {
        return response.json();
    });
};