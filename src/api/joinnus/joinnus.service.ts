import { Injectable } from '@nestjs/common';
import { EventsResponse } from './entitys/events.dto';
import { searchEvents } from './utils/searchEvents';
import { JoinnusSearch } from './JoinnusSearch';
import { QueryFilter } from './interfaces/queryFilter.entity';
import { Categories } from './entitys/joinnus.dto';
import { getEventBySlugId } from './utils/webscrapping';
import { JoinnusResponsePage } from './interfaces/joinnusResponsePage.entity';
import { EventPage } from './entitys/eventPage.dto';

@Injectable()
export class JoinnusService {
  constructor(private readonly search: JoinnusSearch) { }
  async findAll(queryFilter: QueryFilter) {
    const { page, start, limit, minPrice, maxPrice } = queryFilter;

    let filter = this.search.setPage(page).setStart(start).setLimit(limit)
      .setMaxPrice(maxPrice).setMinPrice(minPrice);

    return await searchEvents(filter);
  }

  async findQuery(queryFilter: QueryFilter, query: string): Promise<EventsResponse> {
    const { page, start, limit, minPrice, maxPrice, } = queryFilter;

    let filter = this.search.setPage(page).setStart(start).setLimit(limit)
      .setMaxPrice(maxPrice).setMinPrice(minPrice).setSearch(query);

    return await searchEvents(filter);
  }

  async findByCategory(queryFilter: QueryFilter, category: Categories): Promise<EventsResponse> {
    const { page, start, limit, minPrice, maxPrice, } = queryFilter;

    let filter = this.search.setPage(page).setStart(start).setLimit(limit)
      .setMaxPrice(maxPrice).setMinPrice(minPrice).setCategorie(category);

    return await searchEvents(filter);
  }


  async findBySlugId(slugId: string): Promise<EventPage> {
    return await getEventBySlugId(slugId);
  }
}
