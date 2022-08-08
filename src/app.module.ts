import { Module } from '@nestjs/common';
import {BackgroundModule} from "./backgrounds/background.module";

@Module({
  imports: [BackgroundModule],
})
export class AppModule {}
