import { ParseIntPipe } from '@nestjs/common';
import { ParseFloatPipe, Query } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParseNumberPipe } from 'src/pipes/parseNumber.pipe';
import { EventsResponse } from './entitys/events.dto';
import { JoinnusService } from './joinnus.service';

@ApiTags("Joinnus")
@Controller({ version: "1" })
export class JoinnusController {
  constructor(private readonly joinnusService: JoinnusService) { }

  @ApiResponse({
    description: "Return All Events Joinnus", isArray: true, type: EventsResponse
  })
  @ApiQuery({ name: "_page", required: false, type: Number })
  @ApiQuery({ name: "_limit", required: false, type: Number })
  @ApiQuery({ name: "_start", required: false, type: Number })
  @ApiQuery({ name: "_minPrice", required: false, type: Number })
  @ApiQuery({ name: "_maxPrice", required: false, type: Number })
  @Get()
  async findAll(
    @Query("_page", ParseNumberPipe) page?: number,
    @Query("_limit", ParseNumberPipe) limit?: number,
    @Query("_start", ParseNumberPipe) start?: number,
    @Query("_minPrice", ParseNumberPipe) minPrice?: number,
    @Query("_maxPrice", ParseNumberPipe) maxPrice?: number
  ): Promise<EventsResponse> {

    // console.log(minPrice, maxPrice);

    return this.joinnusService.findAll({ start, limit, page, minPrice, maxPrice });
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
