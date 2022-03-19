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