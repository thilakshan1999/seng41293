import { Module } from '@nestjs/common';
import { DailyStockModule } from '../daily-stock/daily-stock.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DailyStockModule,
    MongooseModule.forRoot('mongodb://super_admin:REDHOOD1105@localhost:27017/?authSource=admin&readPreference=primary&ssl=false&directConnection=true')
  ],
})
export class AppModule {}
