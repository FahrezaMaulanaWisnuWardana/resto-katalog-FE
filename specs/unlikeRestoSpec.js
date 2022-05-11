/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
import * as TestFactories from './helpers/testFactories';
import favoriteResto from '../src/scripts/data/restaurant-fav';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteResto.updateResto({ id: 1 });
  });
  afterEach(async () => {
    await favoriteResto.deleteResto(1);
  });

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto()).toEqual([]);
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    await favoriteResto.deleteResto(1);
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await favoriteResto.getAllResto()).toEqual([]);
  });
});
