import { Date, Geolocation, Pricing } from "../interfaces/joinnusResponse.entity";

export class EventsResponse {
    status: boolean;
    data: EventData;
}

export class EventData {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    firstPage: number;
    nextPage: number;
    prevPage: number;
    events: Event[];
}
export class Event {
    id: number;
    title: string;
    url: string;
    description: string;
    image: string;
    geolocation: Geolocation;
    organizerFullName: string;
    companyName: string;
    category: string;
    categorySlug: string;
    date: Date;
    pricing: Pricing;
    soldOut: boolean;
    state: boolean;
    activityType: string;
}