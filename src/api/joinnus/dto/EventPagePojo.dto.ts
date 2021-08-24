import { EventData, PageProps } from "../interfaces/joinnusResponsePage.entity";
import { Datum, JoinnusTypesTickets } from "../interfaces/joinnusTypesTickets.entity";

export class EventDataPojo implements EventData {
    activity_id: number;
    type_template: number;
    externalId?: any;
    description: string;
    imageUrl: string;
    flagEventRepeat: number;
    category: string;
    city: string;
    country: string;
    activityType: string;
    state: number;
    isPublic: number;
    organizationId?: any;
    organizationName?: any;
    organizationSlug?: any;
    organizationImageUrl?: any;
    organizationType?: any;
    organizerId: number;
    title: string;
    information: string;
    imagePath: string;
    categoryName: string;
    address: string;
    addressRef?: any;
    addressLat: number;
    teatro: number;
    idVenue: number;
    restriction: number;
    venueType: number;
    venueStructure?: any;
    venueName: string;
    venueExternalId?: any;
    addressLng: number;
    addressMethod?: any;
    currency: string;
    price: number;
    requirePayment: number;
    dateStart: string;
    dateEnd: string;
    url: string;
    calendar: number;
    slugPartner?: any;
    avatarUrl?: any;
    firstName: string;
    lastName: string;
    namePartner?: any;
    buyCorporative: number;
    listsParticipant: number;
    createdBy: number;
    untilTime: number;
    video?: any;
    userid: number;
    isVenue: number;
    privateUrl: string;
    activityDateHourId: number;
    cupon: number;
    couponDiscountImage?: any;
    salesPoint?: any;
    salesMerchandise?: any;
    restrictions?: any;
    bankName?: any;
    bankDiscountId?: any;
    bankDiscountPercentage?: any;
    bankDiscountActive?: any;
    brandCode: string;
    metadata: any[];
    bankDiscount: any[];
    available: boolean;
    flagClubComercio: number;
    flagClubGestion: number;
    comercioId?: any;
    gestionId?: any;
    venueBlockStructure?: any;
    venueSvgStructure?: any;
}

export class JoinnusTypesTicketsPojo implements JoinnusTypesTickets{
    data: Datum[];
    status: boolean;
    message: string;

}
export class PagePropsPojo implements PageProps{
    title: string;
    description: string;
    twitterSite: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    twitterCreator: string;
    facebookSiteName: string;
    facebookAdmins: string;
    facebookUrl: string;
    facebookImage: string;
    facebookTitle: string;
    facebookDescription: string;
    asPath: string;
    namespacesRequired: string[];
    isMatch: any;
    PLoader: any;
    LLoader: any;
    canonicalUrl: string;
    eventData: EventData;
}
export class EventPagePojo {
    status: boolean;
    eventData: EventDataPojo;
    typesTickets: JoinnusTypesTickets;
    others: PagePropsPojo;
}