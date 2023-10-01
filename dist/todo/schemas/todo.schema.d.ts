import * as mongoose from 'mongoose';
export declare const TodoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    taskName?: string;
    completedTask?: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    taskName?: string;
    completedTask?: boolean;
}>> & mongoose.FlatRecord<{
    taskName?: string;
    completedTask?: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
