/**
 * 圖層 - 竊盜紀錄
 */
export class Burglary {
    
    public address: string;
    public lat: number;
    public lng: number;
    public date: string;
    
    constructor(address, lat, lng, date) {
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.date = date;
    }
}
