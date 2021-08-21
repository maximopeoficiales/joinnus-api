import { Categories, JoinnusSearch } from "../interfaces/Joinnus";
import { JoinnusResponse } from "../interfaces/JoinnusResponse";
import config from "../../../config";
import fetch, { Headers, RequestInit } from 'node-fetch';
import { Event, EventData, EventsResponse } from "../entitys/Events";

export const searchEvent = async (search: string): Promise<EventsResponse> => {

    let joinnusSearch: JoinnusSearch = {
        text: search,
        maps: false,
        filters: {
            price: {
                min: "",
                max: ""
            },
            categories: [],
            dates: {
                key: "all",
                dateStart: "2021-08-17T08:12:24",
                dateEnd: "2021-08-17T23:59:00"
            },
            location: {
                z: 12,
                center: {
                    lat: -12.074317294768308,
                    lng: -77.04348643769534
                }
            }
        },
        page: 1,
        country: "PE"
    };
    joinnusSearch.text = search;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(joinnusSearch);
    let requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    let data: JoinnusResponse = await (await fetch(config.URL_API, requestOptions)).json();
    return transformEvent(data);
}

export const transformEvent = (dataResponse: JoinnusResponse): EventsResponse => {
    let eventResponse = new EventsResponse();
    const { data } = dataResponse;
    const { currentPage, firstPage, lastPage, perPage, nextPage, prevPage, total, hits } = data;
    console.log(dataResponse.data.currentPage);
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
