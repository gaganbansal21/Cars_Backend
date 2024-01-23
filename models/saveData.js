
const dummyCarData = [
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'Sedan123',
      CarMake: 'Toyota',
      CarYear: '2022',
      CarColor: 'Blue',
      CarPrice: '25000',
      CarMileage: '15000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'SUV456',
      CarMake: 'Ford',
      CarYear: '2021',
      CarColor: 'Red',
      CarPrice: '30000',
      CarMileage: '20000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'Hatchback789',
      CarMake: 'Honda',
      CarYear: '2023',
      CarColor: 'Green',
      CarPrice: '20000',
      CarMileage: '18000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'Coupe012',
      CarMake: 'Chevrolet',
      CarYear: '2020',
      CarColor: 'Silver',
      CarPrice: '28000',
      CarMileage: '22000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'Convertible345',
      CarMake: 'BMW',
      CarYear: '2022',
      CarColor: 'Black',
      CarPrice: '35000',
      CarMileage: '17000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'Truck678',
      CarMake: 'Dodge',
      CarYear: '2019',
      CarColor: 'White',
      CarPrice: '32000',
      CarMileage: '25000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'Minivan901',
      CarMake: 'Chrysler',
      CarYear: '2020',
      CarColor: 'Gray',
      CarPrice: '23000',
      CarMileage: '20000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'Electric234',
      CarMake: 'Tesla',
      CarYear: '2023',
      CarColor: 'Yellow',
      CarPrice: '50000',
      CarMileage: '12000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'SportsCar567',
      CarMake: 'Ferrari',
      CarYear: '2021',
      CarColor: 'Orange',
      CarPrice: '150000',
      CarMileage: '8000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'CompactCar890',
      CarMake: 'Nissan',
      CarYear: '2022',
      CarColor: 'Purple',
      CarPrice: '18000',
      CarMileage: '19000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'Hybrid123',
      CarMake: 'Lexus',
      CarYear: '2023',
      CarColor: 'Brown',
      CarPrice: '30000',
      CarMileage: '16000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'Luxury456',
      CarMake: 'Mercedes-Benz',
      CarYear: '2020',
      CarColor: 'Gold',
      CarPrice: '45000',
      CarMileage: '21000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'OffRoad789',
      CarMake: 'Jeep',
      CarYear: '2021',
      CarColor: 'Cyan',
      CarPrice: '28000',
      CarMileage: '23000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'ClassicCar012',
      CarMake: 'Ford',
      CarYear: '1965',
      CarColor: 'Maroon',
      CarPrice: '60000',
      CarMileage: '5000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'RacingCar345',
      CarMake: 'Porsche',
      CarYear: '2022',
      CarColor: 'Silver',
      CarPrice: '120000',
      CarMileage: '10000 miles'
    },
    {
      CarImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      CarModel: 'RacingCar345',
      CarMake: 'Porsche',
      CarYear: '2022',
      CarColor: 'Silver',
      CarPrice: '120000',
      CarMileage: '10000 miles'
    },
  ];

 export default dummyCarData;
