import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [SampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
