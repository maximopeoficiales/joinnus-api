import { Injectable } from '@nestjs/common';
import { EventsResponse } from './entitys/events.dto';
import { searchEvent } from './utils/functions';
import { JoinnusSearch } from './JoinnusSearch';
import { QueryFilter } from './interfaces/queryFilter';

@Injectable()
export class JoinnusService {
  constructor(private readonly search: JoinnusSearch) { }
  async findAll(queryFilter: QueryFilter) {
    const { page, start, limit, minPrice, maxPrice } = queryFilter;

    let filter = this.search.setPage(page).setStart(start).setLimit(limit)
      .setMaxPrice(maxPrice).setMinPrice(minPrice);

    return await searchEvent(filter);
  }

  async findQuery(query: string): Promise<EventsResponse> {
    return await searchEvent(this.search.setSearch(query));
  }

}
