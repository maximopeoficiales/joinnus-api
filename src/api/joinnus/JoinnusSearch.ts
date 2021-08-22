import { Injectable } from "@nestjs/common";
import { Categories, JoinnusFilter, Location, Price, Today } from "./entitys/joinnus.dto";

@Injectable()
export class JoinnusSearch {
    public text: string;
    public maps: boolean;
    public filters: JoinnusFilter;
    public page: number;
    public start: number;
    public limit: number;
    public country: string;
    public minPrice: number;
    public maxPrice: number;

    constructor() {
        this.setDefault();
    }
    setSearch(search: string) {
        this.text = search;
        return this;
    }
    setMaps(activate: boolean = true) {
        this.maps = activate;
        return this;
    }
    setPrice(price: Price) {
        this.filters.price = price;
        return this;
    }
    setToday(today: Today) {
        this.filters.dates = today;
        return this;
    }

    setLocation(location: Location) {
        this.filters.location = location;
        return this;
    }
    setCategories(categories: Categories[]) {
        this.filters.categories = categories;
        return this;
    }
    setCategorie(categorie: Categories) {
        this.filters.categories.push(categorie);
        return this;
    }
    setAllCategories() {
        let keys = Object.keys(Categories);
        keys.forEach(cat => {
            this.filters.categories.push(Categories[cat]);
        });
    }
    setPage(page: number) {
        this.page = page;
        return this;
    }
    setLimit(limit: number) {
        this.limit = limit;
        return this;
    }
    setStart(start: number) {
        this.start = start;
        return this;
    }
    setCountry(country: string) {
        this.country = country;
        return this;
    }

    setMaxPrice(maxPrice: number) {
        this.maxPrice = maxPrice;
        return this;
    }

    setMinPrice(minPrice: number) {
        this.minPrice = minPrice;
        return this;
    }

    setDefault() {
        let hoy = new Date();
        let fecha = hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate();
        let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
        let start = `${fecha}T${hora}`;
        let end = `${fecha}T23:59:00`;
        this.text = "";
        this.maps = false;
        this.filters = {
            price: {
                min: "",
                max: ""
            },
            categories: [],
            dates: {
                key: "all",
                dateStart: start,
                dateEnd: end
            },
            location: {
                z: 12,
                center: {
                    lat: -12.074317294768308,
                    lng: -77.04348643769534
                }
            }
        };
        this.page = 1;
        this.country = "PE";
    }
}

