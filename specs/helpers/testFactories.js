import FavButton from '../../src/scripts/utils/fav-button';
import FavButtonIdb from '../../src/scripts/data/restaurant-fav';

const createLikeButtonPresenterWithResto = async (resto) => {
  await FavButton.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteMovies: FavButtonIdb,
    resto,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
