export class Saldo{
    saldoDisponible: number;

    constructor(){
        this.saldoDisponible = 10000;
    }

    actualizarSaldo(nuevoSaldo: number){
        this.saldoDisponible = nuevoSaldo;
    }
}