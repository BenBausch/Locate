import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ISportInfrastructure } from 'src/interfaces';
import { SportInfrastructureService } from './sport-infrastructure.service';

@Controller('locations')
export class SportInfrastructureController {
  constructor(
    private readonly sportInfrastructureService: SportInfrastructureService,
  ) {}

  @Get('all')
  getAllLocations(): ISportInfrastructure[] {
    return this.sportInfrastructureService.getAllLocations();
  }

  @Get(':id')
  getLocationByID(@Param('id') id: string): ISportInfrastructure {
    return this.sportInfrastructureService.getLocationById(Number(id));
  }

  @Post('new')
  addNewLocation(@Body() sportInfrastructure: ISportInfrastructure): any {
    const id =
      this.sportInfrastructureService.addNewLocation(sportInfrastructure);
    return { generatedId: id };
  }
}
