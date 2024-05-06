import { Schema, model, models } from "mongoose";

const ClientUploadBucketSchema = new Schema({ });

const ClientUploadBucket = models.ClientUploadBuckets || model('ClientUploadBuckets', ClientUploadBucketSchema);