import { Controller, Get, Param } from '@nestjs/common';
import { ISportInfrastructure } from 'src/interfaces';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get('all')
  getAllLocations(): ISportInfrastructure[] {
    return this.locationsService.getAllLocations();
  }

  @Get(':id')
  getLocationByID(@Param('id') id: string): ISportInfrastructure {
    return this.locationsService.getLocationById(Number(id));
  }
}
