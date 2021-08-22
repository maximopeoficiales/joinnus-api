import { Injectable } from '@nestjs/common';
import { EventsResponse } from './entitys/events.dto';
import { searchEvent } from './utils/functions';
import { JoinnusSearch } from './JoinnusSearch';

@Injectable()
export class JoinnusService {
  constructor(private readonly search: JoinnusSearch) { }
  async findAll(start?: number, limit?: number, page?: number) {
    return await searchEvent(this.search.setPage(page).setStart(start).setLimit(limit));
  }

  async findQuery(query: string): Promise<EventsResponse> {
    return await searchEvent(this.search.setSearch(query));
  }

}
