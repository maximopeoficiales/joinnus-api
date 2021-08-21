
export interface Full {
    url: string;
}

export interface ActivityImage {
    full: Full;
}

export interface Images {
    activityImage: ActivityImage;
}

export interface Country {
    code: string;
}

export interface Geopoint {
    latitude: string;
    longitude: string;
}

export interface Geolocation {
    city: string;
    country: Country;
    address: string;
    reference: string;
    geopoint: Geopoint;
    otherInfo?: any;
}

export interface Organizer {
    firstName: string;
    lastName: string;
    slug: string;
}

export interface Date {
    starts: string;
    ends: string;
}

export interface Pricing {
    isFree: boolean;
    code: string;
    symbol: string;
    amount: number;
}

export interface Settings {
    foreignActivity: boolean;
    standOut: boolean;
}

export interface Source {
    id: string;
    title: string;
    url: string;
    description: string;
    images: Images;
    geolocation: Geolocation;
    flagModerate: boolean;
    flagEventRepeat: boolean;
    organizerFullName: string;
    organizer: Organizer;
    companyName: string;
    category: string;
    categorySlug: string;
    date: Date;
    pricing: Pricing;
    soldOut: boolean;
    state: boolean;
    activityType: string;
    settings: Settings;
}

export interface Hit {
    _index: string;
    _type: string;
    _id: string;
    _score: number;
    _source: Source;
}

export interface JoinnusData {
    total: number;
    max_score: number;
    hits: Hit[];
    perPage: number;
    currentPage: number;
    lastPage: number;
    firstPage: number;
    nextPage: number;
    prevPage?: any;
}

export interface JoinnusResponse {
    status: boolean;
    message: string;
    data: JoinnusData;
}



