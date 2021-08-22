import { Categories } from "../entitys/joinnus.dto";
import { JoinnusResponse } from "../interfaces/joinnusResponse.entity";
import config from "../../../config";
import fetch, { Headers, RequestInit } from 'node-fetch';
import { Event, EventData, EventsResponse } from "../entitys/events.dto";
import { JoinnusSearch } from "../JoinnusSearch";

export const searchEvent = async (searchFilter: JoinnusSearch): Promise<EventsResponse> => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(searchFilter);
    let requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    let data: JoinnusResponse = await (await fetch(config.URL_API, requestOptions)).json();
    let transformData = transformEvent(data);

    let { events } = transformData.data;

    if (searchFilter.start) {
        events = events.slice(searchFilter.start, events.length);
    }

    if (searchFilter.limit) {
        events = events.slice(0, searchFilter.limit);
    }
    events = filterMinMaxPrice(events, searchFilter.minPrice, searchFilter.maxPrice);

    transformData.data.events = events;
    return transformData;
}
export const filterMinMaxPrice = (events: Event[], minPrice: number, maxPrice: number): Event[] => {
    console.log(minPrice, maxPrice);

    if (maxPrice && minPrice) {
        events = events.filter(e => parseFloat(e.pricing.amount.toString()) >= minPrice)
            .filter(e => parseFloat(e.pricing.amount.toString()) <= maxPrice);
        return events;
    }

    if (maxPrice) {
        events = events.filter(e => parseFloat(e.pricing.amount.toString()) <= maxPrice);
        return events;
    }
    if (minPrice) {
        events = events.filter(e => parseFloat(e.pricing.amount.toString()) >= minPrice);
        return events;
    }
    return events;
}


export const transformEvent = (dataResponse: JoinnusResponse): EventsResponse => {
    let eventResponse = new EventsResponse();
    const { data } = dataResponse;
    const { currentPage, firstPage, lastPage, perPage, nextPage, prevPage, total, hits } = data;
    eventResponse.status = dataResponse.status;
    eventResponse.data = new EventData();
    eventResponse.data.currentPage = currentPage;
    eventResponse.data.firstPage = firstPage;
    eventResponse.data.lastPage = lastPage;
    eventResponse.data.perPage = perPage;
    eventResponse.data.nextPage = nextPage;
    eventResponse.data.prevPage = prevPage;
    eventResponse.data.total = total;

    eventResponse.data.events = hits.map(e => {
        let event = new Event();
        const { _source } = e;
        event.id = parseInt(_source.id);
        event.title = _source.title;
        event.description = _source.description;
        event.image = _source.images.activityImage.full.url || "";
        event.geolocation = _source.geolocation;
        event.organizerFullName = _source.organizerFullName;
        event.companyName = _source.companyName;
        event.category = _source.category;
        event.categorySlug = _source.categorySlug;
        event.date = _source.date;
        event.pricing = _source.pricing;
        event.soldOut = _source.soldOut;
        event.state = _source.state;

        event.url = `${config.URL_EVENTS}/${_source.categorySlug}/${_source.url}-${_source.id}`;
        return event;
    })
    return eventResponse;
}
