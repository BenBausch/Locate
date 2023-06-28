import { Module } from '@nestjs/common';
import { SportInfrastructureService } from './sport-infrastructure.service';
import { SportInfrastructureController } from './sport-infrastructure.controller';

@Module({
  imports: [],
  controllers: [SportInfrastructureController],
  providers: [SportInfrastructureService],
})
export class SportInfrastructureModule {}
