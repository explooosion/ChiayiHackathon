/**
 * 廟宇資料接口
 */
export class Temple {

    public name: string;
    public lordgod: string;
    public area: string;
    public address: string;
    public lat: number;
    public lng: number;

    constructor(name, lordgod, area, address, lat, lng) {
        this.name = name;
        this.lordgod = lordgod;
        this.area = area;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
    }
}