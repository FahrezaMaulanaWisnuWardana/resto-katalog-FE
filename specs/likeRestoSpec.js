import * as TestFactories from './helpers/testFactories';
import favoriteResto from '../src/scripts/data/restaurant-fav';

// eslint-disable-next-line no-undef
describe('Liking A Resto', () => {
  // eslint-disable-next-line no-undef
  // it('should show the like button when the resto has not been liked before', async () => {
  //   await TestFactories.createLikeButtonPresenterWithResto({ id: 'rqdv5juczeskfw1e867' });
  //   // eslint-disable-next-line no-undef
  //   expect(document.querySelector('[aria-label="like this resto"]'))
  //     .toBeTruthy();
  // });

  // eslint-disable-next-line no-undef
  it('should be able to like the resto', async () => {
    console.log(await favoriteResto.getRestaurant());
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await favoriteResto.getResto(1);
    // eslint-disable-next-line no-undef
    expect(resto).toEqual({ id: 1 });

    favoriteResto.deleteResto(1);
  });
});
