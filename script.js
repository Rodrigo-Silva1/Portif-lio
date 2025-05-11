// Seleciona o botão do menu e o menu de navegação
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

// Adiciona um evento de clique ao botão do menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // Alterna a classe "active" no botão
    navMenu.classList.toggle('active');   // Alterna a classe "active" no menu
});