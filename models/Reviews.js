import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema({ });

const Review = models.Reviews || model('Reviews', ReviewSchema);