import { Query } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventsResponse } from './entitys/events.dto';
import { JoinnusService } from './joinnus.service';

@ApiTags("Joinnus")
@Controller({ version: "1" })
export class JoinnusController {
  constructor(private readonly joinnusService: JoinnusService) { }

  @ApiResponse({
    description: "Return All Events Joinnus", isArray: true, type: EventsResponse
  })
  @Get()
  async findAll(
    @Query("_page") page?: number,
    @Query("_limit") limit?: number,
    @Query("_start") start?: number): Promise<EventsResponse> {
    return this.joinnusService.findAll(start, limit, page);
  }

  @Get('search/:query')
  async findOne(@Param('query') query: string): Promise<EventsResponse> {
    return await this.joinnusService.findQuery(query);
  }

  @Get('category/:category')
  async findByCategory(@Param('category') category: string): Promise<EventsResponse> {
    return await this.joinnusService.findQuery(category);
  }
}
