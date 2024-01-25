// routes.js
import express from 'express';
import Fuse from 'fuse.js';
const router = express.Router();
// Import your model or any necessary dependencies
import CarModel from '../models/carmodels.js';


router.get('/', async (req, res) => {
  try {
    const { price, color, mileage } = req.query;
    const filter = {};

    console.log(price, "price in backend");
    console.log(color, "colors in backend");
    console.log(mileage, "mileage in backend");

    // filter.CarPrice = { $lte: +price };


    if (price && price.length === 2) {
      // Convert mileage values to numbers
      const minPrice = +price[0];
      const maxPrice = +price[1];
      
      // Handle the case where min and max mileage values are provided
      filter.CarPrice = { $gte: minPrice, $lte: maxPrice };
    } else if (price && price.length === 1 && price[0] !== 'Any') {
      // Convert mileage value to number
      const singlePrice = +mileage[0];

      // Handle the case where only one mileage value is provided
      filter.CarPrice = singleMileage;
    }

    if (color.length > 1 && color.includes('Any')) {
      if (Array.isArray(color)) {
        // Handle the case where multiple colors are selected
        filter.CarColor = { $in: color };
      } else {
        // Handle the case where a single color is selected
        if (color[0] !== 'Any') filter.CarColor = color;
      }
    }
    else{
      if (color[0] !== 'Any') filter.CarColor = color;
    }

    if (mileage && mileage.length === 2) {
      // Convert mileage values to numbers
      const minMileage = +mileage[0];
      const maxMileage = +mileage[1];
      
      // Handle the case where min and max mileage values are provided
      filter.CarMileage = { $gte: minMileage, $lte: maxMileage };
    } else if (mileage && mileage.length === 1 && mileage[0] !== 'Any') {
      // Convert mileage value to number
      const singleMileage = +mileage[0];

      // Handle the case where only one mileage value is provided
      filter.CarMileage = singleMileage;
    }

    console.log("filter", filter);

    const filteredData = await CarModel.find(filter);
    res.json(filteredData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




// function escapeRegExp(text) {
//   return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// }



router.get('/search', async (req, res) => {
  try {
    const { search } = req.query;
    if(search === '') {
      const cars = await CarModel.find({});
      return res.json(cars);
    }

    const keywords = search.split(' ');
    // Build a regex pattern for each keyword
    const regexPatterns = keywords.map(keyword => new RegExp(keyword, 'i'));
    // Combine regex patterns for each field
    const conditions = {
      $or: [
        { CarModel: { $in: regexPatterns } },
        { CarMake: { $in: regexPatterns } },
        { CarColor: { $in: regexPatterns } },
        { CarYear: { $in: regexPatterns } },
        // { CarMileage: { $in: regexPatterns } },
      ],
    };
    const result = await CarModel.find(conditions);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



export default router;
