function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

setTimeout(() => {
    const form = document.getElementById('contact-form');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // sendSecureEmail(email.value, 'Contact Via Portfolio', message.value)

    });
}, 200);



