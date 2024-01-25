const sampleData =[
  {
      "CarModel": "Honda City",
      "CarYear": "2015",
     "CarPrice": 20000,
      "CarColor": "Red",
      "CarMileage": 18.5,
      "CarImage": "https://stimg.cardekho.com/images/car-images/large/Honda/Honda-City/Carnelian-red-pearl.jpg?impolicy=resize&imwidth=420"
  },
  {
      "CarModel": "Honda City",
      "CarYear": "2017",
      "CarPrice": 20000,
      "CarColor": "Blue",
      "CarMileage": 21.5,
      "CarImage": "https://i.pinimg.com/736x/c9/b0/9e/c9b09e504ee6c83af0843703316cf252.jpg"
  },
  {
      "CarModel": "Toyota Camry",
      "CarYear": "2020",
      "CarPrice": 35000,
      "CarColor": "Black",
      "CarMileage": 22.0,
      "CarImage": "https://imgd-ct.aeplcdn.com/1056x660/n/hn7kpua_1557405.jpg?q=80"
  },
  {
      "CarModel": "BMW X5",
      "CarYear": "2018",
      "CarPrice": 60000,
      "CarColor": "Silver",
      "CarMileage": 16.5,
      "CarImage": "https://stimg.cardekho.com/images/car-images/large/BMW/Colors/BMW-X5/bmw-x5-titanium-silver.jpg?impolicy=resize&imwidth=420"
  },
  {
      "CarModel": "Ford Mustang",
      "CarYear": "2017",
      "CarPrice": 45000,
      "CarColor": "Blue",
      "CarMileage": 15.0,
      "CarImage": "https://images-stag.jazelc.com/uploads/garycrossleyford-m2en/My-project-20.png"
  },
  {
      "CarModel": "Chevrolet Cruze",
      "CarYear": "2019",
      "CarPrice": 28000,
      "CarColor": "White",
      "CarMileage": 20.5,
      "CarImage": "https://di-uploads-pod16.dealerinspire.com/beaverchevy/uploads/2019/05/2019-Chevrolet-Cruze-in-white.png"
  },
  {
      "CarModel": "Nissan Altima",
      "CarYear": "2016",
      "CarPrice": 22000,
      "CarColor": "Gray",
      "CarMileage": 21.0,
      "CarImage": "https://edgecast-img.yahoo.net/mysterio/api/9E25EF3E194751A5C22F78CEFD250EE6ED921ED943D308EDA43C879FFDE51DF1/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC60NIC041C021001.jpg"
  },
  {
      "CarModel": "Audi A4",
      "CarYear": "2021",
      "CarPrice": 50000,
      "CarColor": "Black",
      "CarMileage": 25.0,
      "CarImage": "https://dealer-content.s3.amazonaws.com/images/models/audi/2021/a4/colors/mythos-black-metallic.png"
  },
  {
      "CarModel": "Mercedes-Benz C-Class",
      "CarYear": "2019",
      "CarPrice": 55000,
      "CarColor": "Silver",
      "CarMileage": 18.0,
      "CarImage": "https://imgd.aeplcdn.com/370x208/n/g1cll3a_1579023.jpg?q=80"
  },
  {
      "CarModel": "Hyundai Sonata",
      "CarYear": "2018",
      "CarPrice": 30000,
      "CarColor": "Blue",
      "CarMileage": 19.5,
      "CarImage": "https://cars.usnews.com/static/images/Auto/izmo/Colors/hyundai_18sonatalimitedsd7fa_electricblue.jpg"
  },
  {
      "CarModel": "Volkswagen Passat",
      "CarYear": "2017",
      "CarPrice": 32000,
      "CarColor": "Red",
      "CarMileage": 17.5,
      "CarImage": "https://www.ezoomed.in/wp-content/uploads/2021/07/ev-1-4.jpg"
  },
  {
      "CarModel": "Ford Fusion",
      "CarYear": "2016",
      "CarPrice": 25000,
      "CarColor": "Silver",
      "CarMileage": 20.0,
      "CarImage": "https://www.motortrend.com/uploads/sites/5/2020/06/2020-ford-fusion-hybrid.png?fit=around%7C875:492.1875"
  },
  {
      "CarModel": "Toyota Corolla",
      "CarYear": "2019",
      "CarPrice": 28000,
      "CarColor": "White",
      "CarMileage": 22.5,
      "CarImage": "https://stimg.cardekho.com/images/car-images/large/Toyota/Toyota-Corolla-Altis/white-pearl-crystal-shine.jpg?impolicy=resize&imwidth=420"
  },
  {
      "CarModel": "Chevrolet Malibu",
      "CarYear": "2018",
      "CarPrice": 27000,
      "CarColor": "Blue",
      "CarMileage": 21.0,
      "CarImage": "https://di-uploads-pod2.dealerinspire.com/carlblackchevynashville/uploads/2018/05/chevrolet_malibu2018_blue.png"
  },
  {
      "CarModel": "Honda Accord",
      "CarYear": "2020",
      "CarPrice": 32000,
      "CarColor": "Black",
      "CarMileage": 23.5,
      "CarImage": "https://di-uploads-pod11.dealerinspire.com/hondaofkirkland/uploads/2020/02/2020-Accord-Crystal-Black-Pearl.png"
  },
  {
      "CarModel": "Volkswagen Jetta",
      "CarYear": "2016",
      "CarPrice": 24000,
      "CarColor": "Black",
      "CarMileage": 18.5,
      "CarImage": "https://www.cars.com/i/large/in/v2/stock_photos/1047ae70-e1c4-4eb8-9ce3-51194cfa1f81/4004382b-e646-4682-a99d-ed7525734b57.png"
  },
  {
      "CarModel": "Mazda 6",
      "CarYear": "2018",
      "CarPrice": 26000,
      "CarColor": "Silver",
      "CarMileage": 19.0,
      "CarImage": "https://www.motortrend.com/uploads/sites/10/2019/12/2020-mazda-mazda6-sport-sedan-angular-front.png"
  },
  {
      "CarModel": "Kia Optima",
      "CarYear": "2019",
      "CarPrice": 30000,
      "CarColor": "Blue",
      "CarMileage": 22.0,
      "CarImage": "https://www.tomkadleckia.com/static/dealer-12262/Top_Sellers_Template/Optima/colors/exterior/kia_optima_2020-gallery_exterior-horizon-blue.png"
  },
  {
      "CarModel": "Subaru Legacy",
      "CarYear": "2017",
      "CarPrice": 27000,
      "CarColor": "White",
      "CarMileage": 20.5,
      "CarImage": "https://file.kelleybluebookimages.com/kbb/base/evox/CP/13553/2020-Subaru-Legacy-front_13553_032_2400x1800_K1X.png"
  },
  {
      "CarModel": "Chrysler 300",
      "CarYear": "2020",
      "CarPrice": 35000,
      "CarColor": "Red",
      "CarMileage": 25.5,
      "CarImage": "https://www.carscoops.com/wp-content/uploads/2020/06/2020-chrysler-300-touring-l-0.jpg"
  },
  {
      "CarModel": "Buick Regal",
      "CarYear": "2018",
      "CarPrice": 31000,
      "CarColor": "Black",
      "CarMileage": 23.0,
      "CarImage": "https://edgecast-img.yahoo.net/mysterio/api/B99E7811BC7E2578B682788B2FD09509E1DBFA69C26D668D9B939907382F488E/autoblog/resizefill_w788_h525;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC80BUC191C021001.jpg"
  },
  {
      "CarModel": "Acura TLX",
      "CarYear": "2016",
      "CarPrice": 26000,
      "CarColor": "Gray",
      "CarMileage": 21.5,
      "CarImage": "https://www.motortrend.com/uploads/sites/10/2019/05/2020-acura-tlx-sedan-angular-front.png?fit=around%7C551:374"
  },
  {
      "CarModel": "Lexus ES",
      "CarYear": "2019",
      "CarPrice": 38000,
      "CarColor": "Silver",
      "CarMileage": 24.5,
      "CarImage": "https://www.pngfind.com/pngs/m/339-3397506_cc-2019lec160001-01-1280-0085-2017-lexus-es.png"
  },
  {
      "CarModel": "Infiniti Q50",
      "CarYear": "2017",
      "CarPrice": 33000,
      "CarColor": "Blue",
      "CarMileage": 22.0,
      "CarImage": "https://di-uploads-pod16.dealerinspire.com/infinitiofnaperville1/uploads/2018/08/20Infinity-Q50-Jellybean-Sport-IridiumBlue.png"
  },
  {
      "CarModel": "Genesis G80",
      "CarYear": "2021",
      "CarPrice": 42000,
      "CarColor": "Black",
      "CarMileage": 26.0,
      "CarImage": "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/3ea8cc383d18148c53796754a4a8fc67.png"
  },
  {
      "CarModel": "Jaguar XF",
      "CarYear": "2018",
      "CarPrice": 45000,
      "CarColor": "Red",
      "CarMileage": 25.0,
      "CarImage": "https://stimg.cardekho.com/images/car-images/large/Jaguar/Jaguar-XF/Jaguar-XF-R-Supercharged-5.0-Litre-V8-Petrol/Italian-Racing-Red-Metallic.jpg?impolicy=resize&imwidth=420"
  },
  {
      "CarModel": "Tesla Model 3",
      "CarYear": "2020",
      "CarPrice": 50000,
      "CarColor": "White",
      "CarMileage": 30.0,
      "CarImage": "https://imgd.aeplcdn.com/370x208/n/kqn9cva_1595897.jpg?q=80"
  },
  {
      "CarModel": "Porsche Panamera",
      "CarYear": "2019",
      "CarPrice": 80000,
      "CarColor": "Silver",
      "CarMileage": 28.5,
      "CarImage": "https://stimg.cardekho.com/images/car-images/large/Porsche/Porsche-Panamera/5541/Dolomite-Silver-Metallic_bbc0c3.jpg?impolicy=resize&imwidth=420"
  },
  {
      "CarModel": "Ferrari 488 GTB",
      "CarYear": "2017",
      "CarPrice": 300000,
      "CarColor": "Yellow",
      "CarMileage": 15.0,
      "CarImage": "https://i.pinimg.com/736x/2f/cf/1e/2fcf1ed7c58b878ffeffafb77ee0bd28.jpg"
  }
];

 export default sampleData;
