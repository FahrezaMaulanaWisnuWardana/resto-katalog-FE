import Logo from '../assets/logo.png';

class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="navbar">
            <button id="hamburger">☰</button>
            <div class="d-flex space-between margin-navbar p-1" id="desktop">
                <div class="logo">
                    <img src="${Logo}" alt="Restaurant logo vector created by freepik - www.freepik.com">
                </div>
                <div class="list-nav d-flex align-center">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#/favorite">Favorite</a></li>
                        <li><a href="https://www.linkedin.com/in/fahreza-maulana-wisnu-wardana-931a85149/" target="_blank">About Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <nav id="drawer">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#/favorite">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/fahreza-maulana-wisnu-wardana-931a85149/" target="_blank">About Us</a></li>
            </ul>
        </nav>
        `;
  }
}
customElements.define('app-bar', appBar);
