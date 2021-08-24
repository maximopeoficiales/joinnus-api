import { ParseIntPipe } from '@nestjs/common';
import { ParseFloatPipe, Query } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParseNumberPipe } from 'src/pipes/parseNumber.pipe';
import { EventPagePojo } from './dto/EventPagePojo.dto';
import { EventPage } from './entitys/eventPage.dto';
import { EventsResponse } from './entitys/events.dto';
import { Categories } from './entitys/joinnus.dto';
import { JoinnusResponsePage } from './interfaces/joinnusResponsePage.entity';
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

  @ApiQuery({ name: "_page", required: false, type: Number })
  @ApiQuery({ name: "_limit", required: false, type: Number })
  @ApiQuery({ name: "_start", required: false, type: Number })
  @ApiQuery({ name: "_minPrice", required: false, type: Number })
  @ApiQuery({ name: "_maxPrice", required: false, type: Number })
  @ApiParam({ name: "query", required: true, type: String })
  @Get('search/:query')
  async search(
    @Param('query') query: string,
    @Query("_page", ParseNumberPipe) page?: number,
    @Query("_limit", ParseNumberPipe) limit?: number,
    @Query("_start", ParseNumberPipe) start?: number,
    @Query("_minPrice", ParseNumberPipe) minPrice?: number,
    @Query("_maxPrice", ParseNumberPipe) maxPrice?: number
  ): Promise<EventsResponse> {
    return await this.joinnusService.findQuery({ start, limit, page, minPrice, maxPrice }, query);
  }

  @ApiQuery({ name: "_page", required: false, type: Number })
  @ApiQuery({ name: "_limit", required: false, type: Number })
  @ApiQuery({ name: "_start", required: false, type: Number })
  @ApiQuery({ name: "_minPrice", required: false, type: Number })
  @ApiQuery({ name: "_maxPrice", required: false, type: Number })
  @ApiParam({ name: "category", required: true, enum: Categories })
  @Get('category/:category')
  async findByCategory(
    @Param('category') category: Categories,
    @Query("_page", ParseNumberPipe) page?: number,
    @Query("_limit", ParseNumberPipe) limit?: number,
    @Query("_start", ParseNumberPipe) start?: number,
    @Query("_minPrice", ParseNumberPipe) minPrice?: number,
    @Query("_maxPrice", ParseNumberPipe) maxPrice?: number): Promise<EventsResponse> {
    return await this.joinnusService.findByCategory({ start, limit, page, minPrice, maxPrice }, category);
  }

  // este el proceso mas tardio porque se conecta con 3 servicios
  @ApiResponse({
    description: "Return event by SlugId", type: EventPagePojo
  })
  @ApiParam({ name: "slugId", required: true, type: String, description: "Slug of event" })
  @Get(':slugId')
  async findBySlugId(@Param('slugId') slugId: string): Promise<EventPage> {
    return await this.joinnusService.findBySlugId(slugId);
  }
}
