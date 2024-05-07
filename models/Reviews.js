import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    content: {
        type: String,
        required: true
    },
 }, {timestamps: true});

const Review = models.Reviews || model('Reviews', ReviewSchema);

export default Review;