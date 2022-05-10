import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
// Content
import App from './views/app';
// sw
import swRegister from './utils/sw-register';
// Components
import '../components/appBar';
import '../components/jumbotron';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
