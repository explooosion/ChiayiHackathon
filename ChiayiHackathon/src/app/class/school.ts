export class School {
    public name: string;
    public address: string;
    public lat: number;
    public lng: number;
    public city: string;
    constructor(name, address, lat, lng, city) {
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.city = city;
    }
}
