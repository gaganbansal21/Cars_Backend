// routes.js
import express from 'express';
import Fuse from 'fuse.js';


const router = express.Router();

// Import your model or any necessary dependencies
import CarModel from '../models/carmodels.js';


// Define routes
router.get('/', async (req, res) => {
  try {
    const { price, color, mileage } = req.query;
    
    const filter = {};
    console.log(price,"price in backend")
    console.log(color,"price in backend")
    console.log(mileage,"price in backend")
    filter.CarPrice = { $lte:+price };
    if (color !== 'Any') filter.CarColor = color;
    if (mileage !== 'Any') filter.CarMileage = mileage;

    // console.log("Filter:", filter);
    const filteredData = await CarModel.find(filter);
    // console.log("Filtered Data:", filteredData);
    res.json(filteredData);

    // return res.json(await CarModel.find({}));
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
        { CarMileage: { $in: regexPatterns } },
      ],
    };

    const result = await CarModel.find(conditions);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



export default router;
