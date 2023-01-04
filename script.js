let buttonMenu = document.querySelector('.mob__nav__menu');
let dropMenu = document.querySelector('.nav__menu__mobile');
let closeMenu = document.querySelector('.close-button');
buttonMenu.onclick = () => {
 dropMenu.style.display = 'flex';
}
 closeMenu.onclick = () => {
 dropMenu.style.display = 'none';
 }