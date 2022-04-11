export class Simulacion{
    public capital: number;
    public dias: number;
    public tasa: number;
    public interes: number;

    constructor(capital: number, dias: number, tasa: number){
        this.capital = capital;
        this.dias = dias;
        this.tasa = tasa;
        this.interes = 0;
    }

    calcularInteres(): number {
        this.interes = (this.capital * this.dias * this.tasa)/36500;
        return this.interes;
    }
}