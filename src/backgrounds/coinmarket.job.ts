import { Injectable, Logger } from '@nestjs/common';
import {Cron, CronExpression} from '@nestjs/schedule';

@Injectable()
export class CoinMarketJobService {
  private readonly logger = new Logger(CoinMarketJobService.name);

  @Cron(CronExpression.EVERY_10_SECONDS, {
    name: "coin_market_job"
  })
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }
}
