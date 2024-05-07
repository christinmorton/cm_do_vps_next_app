import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema({ 
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    stripe_customer_id: {
        type: String
    },
    is_stripe_customer: { type: Boolean, default: false },
}, {timestamps: true});

const Client = models.Clients || model('Clients', ClientSchema);

export default Client;