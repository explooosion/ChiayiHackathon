/**
 * 圖層 - 照護紀錄
 */
export class Care {
    
    public name: string;
    public service: string;
    public area: string;
    public address: string;
    public lat: number;
    public lng: number;

    constructor(name, service, area, address, lat, lng) {
        this.name = name;
        this.service = service;
        this.area = area;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
    }
}
