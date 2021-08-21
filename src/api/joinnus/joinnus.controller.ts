import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventsResponse } from './entitys/Events';
import { JoinnusService } from './joinnus.service';

@ApiTags("Joinnus")
@Controller({ version: "1" })
export class JoinnusController {
  constructor(private readonly joinnusService: JoinnusService) { }

  @Get()
  findAll() {
    return this.joinnusService.findAll();
  }

  @Get('search/:query')
  async findOne(@Param('query') query: string): Promise<EventsResponse> {
    return await this.joinnusService.findQuery(query);
  }

}
