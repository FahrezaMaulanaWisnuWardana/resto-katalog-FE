import CONFIG from '../../globals/config';

const restaurantList = (data) => {
  return `
    <div class="card" tabindex="0">
            <div class="card-header">
                <div class="card-crumb">Kota, ${data.city}</div>
                <a href=${`/#/detail/${data.id}`}>
                    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_M_URL + data.pictureId}" alt="${data.name}">
                </a>
            </div>
            <div class="card-body">
                <span class="card-rating">Rating: ${data.rating}</span>
                <span class="card-title"><a href=${`/#/detail/${data.id}`}>${data.name}</a></span>
                ${data.description}
            <div>
    </div>
`;
};
const likedRestaurantList = (data) => {
  return `
    <div class="card" tabindex="0">
            <div class="card-header">
                <div class="card-crumb">Kota, ${data.city}</div>
                <a href=${`/#/detail/${data.id}`}>
                    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_M_URL + data.pictureId}" alt="${data.name}">
                </a>
            </div>
            <div class="card-body">
                <span class="card-rating">Rating: ${data.rating}</span>
                <span class="card-title"><a href=${`/#/detail/${data.id}`}>${data.name}</a></span>
                ${data.description}
            <div>
    </div>
`;
};
const detailRestaurant = (data) => {
  return `
    <div class="card w-50 m-auto">
        <div class="card-header">
            <div class="card-crumb">Kota, ${data.city}</div>
            <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_M_URL + data.pictureId}" class="w-full" alt="${data.name}">
        </div>
        <div class="card-body">
            ${data.categories.map((categories) => { return ` <div class="categories">${categories.name}</div> `; })}
            <span class="card-rating">Rating: ${data.rating}</span>
            <small>${data.address}</small>
            <span class="card-title">${data.name}</span>
            ${data.description}
            <h2>Menu : </h2>
            <div class="menu">
                <h4>Makanan </h4>
                ${data.menus.foods.map((foods) => { return `<div class="categories">${foods.name}</div>`; }).join('')}
                <h4>Minuman </h4>
                ${data.menus.drinks.map((drinks) => { return `<div class="categories">${drinks.name}</div>`; }).join('')}
            </div>
            <h2>Customer Reviews : </h2>
            <div class="reviews">
                <ul>
                    ${data.customerReviews.map((review) => {
    return `<li>
                            <ul>
                                <li><b>${review.name}</b></li>
                                <li><small>${review.date}</small></li>
                                <li>${review.review}</li>
                            </ul>
                            <hr>
                        </li>`;
  }).join('')}
                <ul>
            </div>
        <div>
    </div>
`;
};
const createLikeButton = () => {
  return `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
};

const createLikedButton = () => {
  return `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
};
export {
  restaurantList,
  detailRestaurant,
  likedRestaurantList,
  createLikeButton,
  createLikedButton,
};
