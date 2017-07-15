/**
 * 圖層 - 照護機構
 */
export class Secure {
    
    public address: string;
    public lat: number;
    public lng: number;

    constructor(address, lat, lng) {
        this.address = address;
        this.lat = lat;
        this.lng = lng;
    }
}
