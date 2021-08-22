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
export class Today {
    constructor(public key: string, public dateStart: string, public dateEnd: string,) { }
}
export class Price { constructor(min: string, max: string) { } }
export class Location { constructor(public z: number, public center: { lat: number, lng: number }) { } }
export class JoinnusFilter {
    constructor(public price: Price,
        public categories: Categories[],
        public dates: Today,
        public location: Location) { }
}