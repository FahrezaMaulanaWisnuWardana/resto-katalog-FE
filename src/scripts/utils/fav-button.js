import { createLikeButton, createLikedButton } from '../views/templates/template-restaurant';

const FavButtonIdb = {
  async init({ favButtonContainer, favoriteResto, resto }) {
    this.favButtonContainer = favButtonContainer;
    this.favoriteResto = favoriteResto;
    this.resto = resto;
    await this.renderButton();
  },
  async renderButton() {
    const { id } = this.resto;
    if (await this.isRestoExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },
  async isRestoExist(id) {
    const resto = await this.favoriteResto.getResto(id);
    return !!resto;
  },
  renderLike() {
    this.favButtonContainer.innerHTML = createLikeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.favoriteResto.updateResto(this.resto);
      this.renderButton();
    });
  },

  renderLiked() {
    this.favButtonContainer.innerHTML = createLikedButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.favoriteResto.deleteResto(this.resto.id);
      this.renderButton();
    });
  },
};
export default FavButtonIdb;
