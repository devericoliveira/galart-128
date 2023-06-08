function Menu() {
  const containerMenu = document.querySelector('#menu');
  
  function open() {
    containerMenu.classList.add('active');
    document.body.classList.add('backdrop');
  }
  
  function close() {
    containerMenu.classList.remove('active');
    document.body.classList.remove('backdrop');
  }

  return {
    open,
    close
  }
}

const menu = Menu();

document.querySelector('.open-menu').addEventListener('click', menu.open);
document.querySelector('.close-menu').addEventListener('click', menu.close);