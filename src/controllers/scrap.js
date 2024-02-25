const axios = require('axios');
const scrapper = require('../services/scrapper');

async function scrap(req, res) {
  try {
    const { keyword } = req.query;
    const url = `https://www.amazon.com/s?k=${keyword}`;

    const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        },
      });

    const data = response.data;
    const products = scrapper(data);

    res.send(products);

  } catch (error) {
    console.error(error);
     res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}

module.exports = scrap;
