import hero from '../public/images/heros/hero-image_2.jpg';

class jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron">
            <img src="${hero}" alt="hero-image_2">
        </div>`;
  }
}
customElements.define('app-jumbotron', jumbotron);
