import mongoose, { Schema } from "mongoose";

const carModels = new Schema({
  CarImage: String,
  CarModel: String,
  CarMake: String,
  CarYear: String,
  CarColor: String,
  CarPrice: Number,
  CarMileage: Number,
});

const carModelSchema = mongoose.model("carModelSchema", carModels);

export default carModelSchema;
