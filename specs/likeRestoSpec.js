/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import * as TestFactories from './helpers/testFactories';
import favoriteResto from '../src/scripts/data/restaurant-fav';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addLikeButtonContainer();
  });
  // eslint-disable-next-line no-undef
  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await favoriteResto.getResto(1);
    // eslint-disable-next-line no-undef
    expect(resto).toEqual({ id: 1 });

    favoriteResto.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    favoriteResto.updateResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await favoriteResto.getAllResto();
    expect(allResto).toEqual([{ id: 1 }]);
    await favoriteResto.deleteResto(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto()).toEqual([]);
  });
});
