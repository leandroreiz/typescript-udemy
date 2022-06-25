const button = document.querySelector('.btn');

const add = (n1: number, n2: number) => {
  if (n1 + n2 > 0) return n1 + n2;
  return;
};

const clickHandler = (message: string) => {
  alert(message);
};

button?.addEventListener('click', clickHandler.bind(null, 'Clicked!'));
