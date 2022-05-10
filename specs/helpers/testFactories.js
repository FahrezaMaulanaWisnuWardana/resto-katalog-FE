import FavButtonIdb from '../../src/scripts/utils/fav-button';
import favoriteResto from '../../src/scripts/data/restaurant-fav';

const createLikeButtonPresenterWithResto = async (resto) => {
  await FavButtonIdb.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteMovies: favoriteResto,
    resto,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
