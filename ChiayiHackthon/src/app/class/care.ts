export class Care {
    public CareName: string;
    public Service: string;
    public Area: string;
    public Address: string;
    public lat: number;
    public lng: number;

    constructor(CareName, Service, Area, Address, lat, lng) {
        this.CareName = CareName;
        this.Service = Service;
        this.Area = Area;
        this.Address = Address;
        this.lat = lat;
        this.lng = lng;
    }
}
