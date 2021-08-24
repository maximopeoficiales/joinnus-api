import fetch from 'node-fetch';
import * as scrapeIt from "scrape-it"
import { JoinnusSearch } from "../JoinnusSearch";
import { searchEvents } from "./searchEvents";
import config from "../../../config"
import { JoinnusResponsePage } from "../interfaces/joinnusResponsePage.entity";
import { JoinnusTypesTickets } from "../interfaces/joinnusTypesTickets.entity";
import { EventPage } from '../entitys/eventPage.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

export const getEventBySlugId = async (slugIdParam: string): Promise<EventPage> => {
    let searchEventData = await searchEvents(new JoinnusSearch().setSearch(slugIdParam));
    if (searchEventData.data.events.length > 0) {
        let eventJoinnus = searchEventData.data.events[0];
        // si no es igual encontro otro evento
        if (eventJoinnus.slugId !== slugIdParam) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: `the slugID '${slugIdParam}' not exists`,
            }, HttpStatus.BAD_REQUEST);
        }


        let { categorySlug, slugId, id, geolocation: { country } } = eventJoinnus;
        // Promise interface
        // https://www.joinnus.com/events/party/lima-90-s-party-43616
        let resp = await scrapeIt<any>(`${config.URL_EVENTS}/${categorySlug}/${slugId}`, {
            data: {
                selector: "#__NEXT_DATA__",
            }
        });
        const { data } = resp as any;
        let typesTickets = await getTypesTickets(id, country.code);

        let responsePage: JoinnusResponsePage = JSON.parse(data.data);

        let transformEventData = transformEvent(responsePage, typesTickets)
        return transformEventData;
    }

}

export const getTypesTickets = async (idEvent: number, countryCode: string): Promise<JoinnusTypesTickets> => {
    let data: JoinnusTypesTickets = await (await fetch(`${config.URL_BASEV1}/${countryCode}/events/${idEvent}/types`)).json();
    return data;
}

export const transformEvent = (page: JoinnusResponsePage, typesTickets: JoinnusTypesTickets) => {
    const eventData = page.props.initialProps.pageProps.eventData;
    const pageData = page.props.initialProps.pageProps;
    delete pageData.eventData;
    delete pageData.namespacesRequired;
    delete pageData.isMatch;
    delete pageData.PLoader;
    delete pageData.LLoader;
    delete eventData.venueBlockStructure;
    delete eventData.venueSvgStructure;

    let eventPage = new EventPage();
    eventPage.status = page ? true : false;
    eventPage.typesTickets = typesTickets;
    eventPage.others = pageData;
    eventPage.eventData = eventData;

    return eventPage;

}



