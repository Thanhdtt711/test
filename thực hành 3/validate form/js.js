const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}

function checkEmail(input) {
    const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (check.test(input.value.trim())) {
        showSucces(input)
    } else {
        showError(input, 'Email không hợp lệ');
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, ` Chưa nhập trường này`)
        } else {
            showSucces(input);
        }
    });
}

function checkLength(input, nim, max) {
    if (input.value.length < nim) {
        showError(input, `Mật khẩu phải ${nim} ký tự`)
    } else if (input.value.length > max) {
        showError(input, `Mật khẩu dài quá ${max} ký tự`)
    } else {
        showSucces(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Mật khẩu không trùng khớp');
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    console.log(checkLength(password, 3, 10))
    checkEmail(email);
    checkPasswordMatch(password, password2);
});