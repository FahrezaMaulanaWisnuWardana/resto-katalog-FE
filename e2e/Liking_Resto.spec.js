/* eslint-disable no-undef */
// eslint-disable-next-line no-undef

const assert = require('assert');

Feature('Liking Resto');

Scenario('Liking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);
  I.seeElement('.card .card-body .card-title a');
  // eslint-disable-next-line no-undef
  const firstResto = locate('.card-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.card .card-body .card-title a');
  const likedRestoTitle = await I.grabTextFrom('.card .card-body .card-title a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
Scenario('Unliking one resto', async ({ I }) => {
// First Like the resto
  I.amOnPage('/');
  I.wait(3);
  I.seeElement('.card .card-body .card-title a');
  const firstResto = locate('.card-title a').first();
  I.click(firstResto);
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Then Unliking the resto

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#restaurant');
  const firstLikedResto = locate('.card-title a').first();
  I.click(firstLikedResto);
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Check if the favorite page is empty
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.see('Data Kosong', '#restaurantNull');
});
