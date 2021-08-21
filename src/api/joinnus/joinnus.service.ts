import { Injectable } from '@nestjs/common';
import { EventsResponse } from './entitys/Events';
import { searchEvent } from './helpers/functions';
import { JoinnusResponse } from './interfaces/JoinnusResponse';

@Injectable()
export class JoinnusService {

  findAll() {
    return `This action returns all joinnus`;
  }

  async findQuery(query: string): Promise<EventsResponse> {
    return await searchEvent(query);
  }

}
