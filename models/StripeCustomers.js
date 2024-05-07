import { Schema, model, models } from "mongoose";

const StripeCustomerSchema = new Schema({ 
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    stripe_customer_id: { type: String },
    total_uploads: {
        type: Number,
        default: 0
    },
    plan_active: {
        type: Boolean,
        default: false
    },
    plan_expires: {
        type: Date
    },
    subscription_id: {
        type: String
    },
}, {timestamps: true});

const StripeCustomer = models.StripeCustomers || model('StripeCustomers', StripeCustomerSchema);

export default StripeCustomer;
