const cheerio = require('cheerio');

function scrapper(data) {
    const cheerioScrapper = cheerio.load(data);

    const products = [];

    cheerioScrapper('.s-result-item').each((index, element) => {
        const name = cheerioScrapper(element).find('h2 span').text().trim();
        const price = cheerioScrapper(element).find('.a-offscreen').text().trim();
        const rating = cheerioScrapper(element).find('.a-icon-star-small .a-icon-alt').text().trim();
        const imageUrl = cheerioScrapper(element).find('img').attr('src');
        const numberOfReviews = cheerioScrapper(element).find('.a-size-small .a-link-normal').text().trim();
  
        products.push({ name, price, rating, imageUrl, numberOfReviews });
      });

      return products;
}

module.exports = scrapper;