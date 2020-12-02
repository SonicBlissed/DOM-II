// Your code goes here
let hImg = document.querySelector('.intro h2');
hImg.addEventListener('dbclick', function (e) {
    // event.preventDefault();
    hImg.classList.toggle('large');
});

let buttons = document.querySelector('.btn');
buttons.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'purple';
})

let contentBox = document.querySelector('.destination');
contentBox.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'orange';
})

let footerBox = document.querySelector('.footer');

function logSelection(event) {
    let footerBox = document.querySelector('.footer p');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    footerBox.textContent = `You selected: ${selection}`;
  }
  
//   const input = document.querySelector('input');
  footerBox.addEventListener('select', logSelection);

  let pickDestination = document.querySelector('.content-destination h2');

  pickDestination.addEventListener('click', event => {
    event.target.style.color = 'orange';
  });

  let textContent1 = document.querySelector('.text-content h2');

  textContent1.addEventListener('auxclick', event => {
    event.target.style.color = 'orange';
  });

  let textContent2 = document.querySelector('.text-content p');

  textContent2.addEventListener('mouseout', event => {
    event.target.style.color = 'orange';
  });

  let textContent3 = document.querySelector('.text-content p:nth-of-type(2)');

  textContent3.addEventListener('mousedown', event => {
    event.target.style.color = 'orange';
  });

  let nav1 = document.querySelector('nav a');

  nav1.addEventListener('mousemove', event => {
    event.target.style.color = 'orange';
  });

  let nav2 = document.querySelector('nav a:nth-of-type(2)');

  nav2.addEventListener('mouseup', event => {
    event.target.style.color = 'orange';
  });

  let nav3 = document.querySelector('nav a:nth-of-type(3)');

  nav3.addEventListener('contextmenu', event => {
    event.target.style.color = 'orange';
  });
