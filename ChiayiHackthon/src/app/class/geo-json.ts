/**
 * GeoJson 接口
 */
export class GeoJson {

    public type: string = 'FeatureCollection';
    public bbox: any[];
    public features: Features[] = [];
}

/**
 * Features - 單筆資料之集合
 */
export class Features {

    public type: string = 'Feature';
    public properties: any[];
    public geometry: Geometry;

    constructor(properties, geometry) {
        this.properties = properties;
        this.geometry = geometry;
    }
}

/**
 * Geometry - 點位的座標屬性
 */
export class Geometry {
    
    public type: string;
    public coordinates: any[];

    constructor(type, coordinates) {
        this.type = type;
        this.coordinates = coordinates;
    }
}