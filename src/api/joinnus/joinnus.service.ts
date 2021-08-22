import { Injectable } from '@nestjs/common';
import { EventsResponse } from './entitys/events.dto';
import { searchEvent } from './utils/functions';
import { JoinnusSearch } from './JoinnusSearch';
import { QueryFilter } from './interfaces/queryFilter';
import { Categories } from './entitys/joinnus.dto';

@Injectable()
export class JoinnusService {
  constructor(private readonly search: JoinnusSearch) { }
  async findAll(queryFilter: QueryFilter) {
    const { page, start, limit, minPrice, maxPrice } = queryFilter;

    let filter = this.search.setPage(page).setStart(start).setLimit(limit)
      .setMaxPrice(maxPrice).setMinPrice(minPrice);

    return await searchEvent(filter);
  }

  async findQuery(queryFilter: QueryFilter, query: string): Promise<EventsResponse> {
    const { page, start, limit, minPrice, maxPrice, } = queryFilter;

    let filter = this.search.setPage(page).setStart(start).setLimit(limit)
      .setMaxPrice(maxPrice).setMinPrice(minPrice).setSearch(query);

    return await searchEvent(filter);
  }

  async findByCategory(queryFilter: QueryFilter, category: Categories): Promise<EventsResponse> {
    const { page, start, limit, minPrice, maxPrice, } = queryFilter;

    let filter = this.search.setPage(page).setStart(start).setLimit(limit)
      .setMaxPrice(maxPrice).setMinPrice(minPrice).setCategorie(category);

    return await searchEvent(filter);
  }

}
