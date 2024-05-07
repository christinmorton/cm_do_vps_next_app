import { Schema, model, models } from "mongoose";

const ClientUploadBucketSchema = new Schema({
    client_id: { type: Schema.Types.ObjectId, ref: 'Client'},
    file_name: { type: String, required: true},
    file_path: { type: String, required: true},
 }, {timestamps: true});

const ClientUploadBucket = models.ClientUploadBuckets || model('ClientUploadBuckets', ClientUploadBucketSchema);

export default ClientUploadBucket;