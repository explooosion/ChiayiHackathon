/**
 * 人口數量變動
 */
export class Population {

    public no: number;
    public year: number;
    public season: number;
    public year_season: number;

    public city: string;

    public total_population: number;
    public total_population_increase: number;

    public births: number;
    public deaths: number;

    public immigrants: number;
    public emigrants: number;

    public natural_increase_rate: number;
    public social_increase_rate: number;
    public total_increase_rate: number;

    public FxChiayi = [
        {
            a: 553948.1425,
            b: -581.785489,
            c: -10.297091
        }, {
            a: 0.278969,
            b: -0.073024,
            c: 0.000845
        }, {
            a: -1.50288,
            b: 0.141537,
            c: -0.003555
        }];

    public FxYunlin = [
        {
            a: 728300.0431,
            b: -540.313088,
            c: -7.064001
        }, {
            a: 0.075185,
            b: -0.030418,
            c: 0.000209
        }, {
            a: -1.428443,
            b: 0.173646,
            c: -0.004368
        }];
}
