export class Hospi {
    public name: string;
    public address: string;
    public lat: number;
    public lng: number;
    public level: number;
    constructor(name, address, lat, lng, level) {
        this.name = name;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.level = level;
    }
}
