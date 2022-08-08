import { Module } from '@nestjs/common';
import {CoinMarketJobService} from "./coinmarket.job";
import {ScheduleModule} from "@nestjs/schedule";

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [CoinMarketJobService]
})
export class BackgroundModule {}
