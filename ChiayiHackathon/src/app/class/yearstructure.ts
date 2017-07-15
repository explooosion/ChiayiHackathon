/**
 * 年齡結構指標
 */
export class Yearstructure {

    public no: number;
    public year: number;
    public month: number;
    public yearmonth: number;
    public city: string;

    public zero_twelve: number;
    public twelve_seventeen: number;
    public twenty: number;
    public sixty_five: number;
    public twnty_sixty: number;

    public seventeen_twenty: number;
    public zero_twenty: number;
    public zero_seventeen: number;
    public seventeen_sixty: number;

    public FxChiayi = [
        {
            a: 18.112324,
            b: -0.057336,
            c: -0.000037
        }, {
            a: 66.130632,
            b: 0.036181,
            c: -0.000201
        }, {
            a: 15.757043,
            b: 0.021155,
            c: 0.000238
        }];

    public FxYunlin = [
        {
            a: 19.770272,
            b: -0.048179,
            c: -0.000027
        }, {
            a: 64.945902,
            b: 0.036008,
            c: -0.000258
        }, {
            a: 15.283826,
            b: 0.012171,
            c: 0.000285
        }];
}



