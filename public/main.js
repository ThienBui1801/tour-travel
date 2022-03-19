'use strict';

// Open menu
const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('invisible')
})

// get explore
const btnExplore = document.querySelector('#btn-explore');

btnExplore.onclick = () => {
  const location = document.getElementById('location').value;
  const active = document.getElementById('active').value;
  const grade = document.getElementById('grade').value;
  const date = document.getElementById('date').value;
  const render = document.querySelector('#render-explore');

  render.innerHTML = `
  <p>Location: ${location}</p>
  <p>Activity: ${active}</p>
  <p>Grade: ${grade}</p>
  <p>Date: ${date}</p>
  <p>Welcome!</p>
  `
}

// Login - Register
const btnLogin = document.querySelector('#btn-login');
const btnRegister = document.querySelector('#btn-register');
const modalLogin = document.querySelector('#login');
const login = document.querySelector('#login-container');
const modalRegister = document.querySelector('#register');
const register = document.querySelector('#register-container');
const closeLogin = document.querySelector('#btn-close-in');
const closeRegister = document.querySelector('#btn-close-reg');

function hideModalLogin() {
  modalLogin.classList.add('invisible')
}

btnLogin.addEventListener('click', () => {
  modalLogin.classList.toggle('invisible')
})

closeLogin.addEventListener('click', hideModalLogin);
modalLogin.addEventListener('click', hideModalLogin);
login.addEventListener('click', (e) => {
  e.stopPropagation()
})

function hideModalRegister() {
  modalRegister.classList.add('invisible')
}

btnRegister.addEventListener('click', () => {
  modalRegister.classList.toggle('invisible')
})

closeRegister.addEventListener('click', hideModalRegister);
modalRegister.addEventListener('click', hideModalRegister);
register.addEventListener('click', (e) => {
  e.stopPropagation()
})

// Information collapsible
const btnInfo = document.querySelector('#btn-info')
const infoDesc = document.querySelector('.information-desc');

btnInfo.addEventListener('click', () => {
  infoDesc.classList.toggle('invisible')
})
