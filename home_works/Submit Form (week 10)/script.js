const validation = () => {
    let username = document.getElementById('username').value;
    let errorUsername = document.getElementById('errorUsername');

    var reg = /^[0-9a-zA-Z]{4,}$/;
    if (!username.match(reg)) {
        errorUsername.style.display = 'block';
    } else {
        errorUsername.style.display = 'none';
    }

    let email = document.getElementById('email').value;
    let errorEmail = document.getElementById('errorEmail');
    var reg = /\S+@\S+\.\S+/;
    if (!email.match(reg)) {
        errorEmail.style.display = 'block';
    } else {
        errorEmail.style.display = 'none';
    }

    let firstname = document.getElementById('firstname').value;
    let errorFirstname = document.getElementById('errorFirstname');
    var reg = /^[a-zA-Z ]{2,30}$/;
    if (!firstname.match(reg)) {
        errorFirstname.style.display = 'block';
    } else {
        errorFirstname.style.display = 'none';
    }

    let lastname = document.getElementById('lastname').value;
    let errorLastname = document.getElementById('errorLastname');
    var reg = /^[a-zA-Z ]{2,30}$/;
    if (!lastname.match(reg)) {
        errorLastname.style.display = 'block';
    } else {
        errorLastname.style.display = 'none';
    }

    let phone = document.getElementById('phone').value;
    let errorPhone = document.getElementById('errorPhone');
    var reg = /^\d{10}$/;
    if (!phone.match(reg)) {
        errorPhone.style.display = 'block';
    } else {
        errorPhone.style.display = 'none';
    }

}


const button = document.getElementById('button');
button.addEventListener('click', validation);