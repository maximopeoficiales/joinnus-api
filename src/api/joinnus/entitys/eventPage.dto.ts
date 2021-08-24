import { EventData, PageProps } from "../interfaces/joinnusResponsePage.entity";
import { JoinnusTypesTickets } from "../interfaces/joinnusTypesTickets.entity";
export class EventPage {
    status: boolean;
    eventData: EventData;
    typesTickets: JoinnusTypesTickets;
    others: PageProps;
}