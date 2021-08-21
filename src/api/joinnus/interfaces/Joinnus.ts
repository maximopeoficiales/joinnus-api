export enum Categories {
    STAND_UP = "stand-up",
    DONATION = "donation",
    SALUD_BIENESTAR =
    "salud-bienestar",
    TIENDAS = "tiendas",
    CONCIERTOS = "concerts",
    ENTRETENIMIENTO = "entertainment",
    FIESTA = "party",
    SEMINARIOS_CONFERENCIAS = "seminarios-conferencias",
    TEATRO = "theater",
    ARTE_CULTURA = "art-culture",
    CURSO_TALLERES = "cursos-talleres",
    DEPORTES = "sports",
    FESTIVALES = "festivales",
    COMIDA = "food-drinks",
    TECNOLOGIA = "tech",
    NINOS = "kids",
    SERVICIO_COMUNITARIO = "community-service",
    CINE = "cine"
}

export interface JoinnusFilter {
    price: { min: string, max: string };
    categories: Categories[];
    dates: { key: string, dateStart: string, dateEnd: string }
    location: { z: number, center: { lat: number, lng: number } }
}
export interface JoinnusSearch {
    text: string;
    maps: boolean;
    filters: JoinnusFilter;
    page: number;
    country: string;
}