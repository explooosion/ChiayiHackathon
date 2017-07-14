/**
 * 廟宇資料接口
 */
export class Temple {
    public TempleName: string;
    public LordGod: string;
    public Area: string;
    public Address: string;
    public lat: number;
    public lng: number;

    constructor(TempleName, LordGod, Area, Address, lat, lng) {
        this.TempleName = TempleName;
        this.LordGod = LordGod;
        this.Area = Area;
        this.Address = Address;
        this.lat = lat;
        this.lng = lng;
    }
}