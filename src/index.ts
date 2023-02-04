const rootElement = document.getElementById('root');

const greetingElemnt = document.createElement('h1');
greetingElemnt.innerText = 'Welcome to Motion 👋';

rootElement && rootElement.appendChild(greetingElemnt);