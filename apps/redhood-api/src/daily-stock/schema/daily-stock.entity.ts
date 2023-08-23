import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IDailtyStock } from "@seng41293/model";
import { HydratedDocument } from "mongoose";

@Schema()
export class DailyStock implements IDailtyStock{
    @Prop()
    date: Date;

    @Prop()
    amount: number;
}

export type DailyStockDocument = HydratedDocument<DailyStock>;
export const DailyStockSchema = SchemaFactory.createForClass(DailyStock);