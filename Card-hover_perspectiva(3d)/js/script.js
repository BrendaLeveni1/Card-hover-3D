const card = document.querySelector('.card');

card.addEventListener('mousemove', e => {
  /*Obtiene la posicion x en la tarjeta*/
  const x = e.clientX - card.offsetLeft;
  /*Obtiene la posicion y en la tarjeta*/
  const y = e.clientY - card.offsetTop;
  
  const centerX = card.offsetWidth / 2;
  const centerY = card.offsetHeight / 2;
  
  const deltaX = (centerX - x) * 0.05;
  const deltaY = (centerY - y) * 0.05;
  
  /*Aplica la transformacion*/
  card.style.transform = `perspective(1000px) rotateX(${deltaY}deg) rotateY(${deltaX}deg)`;
});
/*restablece la transformacion*/
card.addEventListener('mouseleave', e => {
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});
