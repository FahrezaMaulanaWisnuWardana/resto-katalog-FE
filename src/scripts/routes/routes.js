import listRestaurant from '../views/pages/list-restaurant';
import detail from '../views/pages/detail-restaurant';
import favorites from '../views/pages/favorites';

const routes = {
  '/': listRestaurant,
  '/detail/:id': detail,
  '/favorite': favorites,
};

export default routes;
