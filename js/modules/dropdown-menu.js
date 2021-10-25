import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  //Adicionar mais de um evento, para ser compatível no mobile
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    })
  })
  
  /*Callback
  Previne o padrão de ir para o link
  Adiciona a classe ativo ao menu e ativa a função outsideClick*/
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ative')
    });
  }
}
