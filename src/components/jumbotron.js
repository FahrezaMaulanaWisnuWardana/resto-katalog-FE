import hero from '../public/images/heros/hero-image-large.jpg';
import heroSmall from '../public/images/heros/hero-image-small.jpg';

class jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron">
          <picture>
            <source media="(max-width: 600px)" srcset="${heroSmall}">
              <img src="${hero}" alt="hero-image_2">
          </picture>
        </div>`;
  }
}
customElements.define('app-jumbotron', jumbotron);
