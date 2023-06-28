import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SportInfrastructureModule } from './locations/sport-infrastructure.module';

@Module({
  imports: [SportInfrastructureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
