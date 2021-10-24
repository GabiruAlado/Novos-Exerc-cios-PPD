
class Car {
    pass: number;
    maxPass: number;
    fuel: number;
    maxFuel: number;
    km: number;

    constructor(maxPass: number, maxFuel: number) {
        this.pass = 0;
        this.maxPass = maxPass;
        this.fuel = 0;
        this.maxFuel = maxFuel;
        this.km = 0;
    }

    addPass(n: number): void { //metodo
        if (this.pass + n <= this.maxPass) {
            this.pass += n;
        }
    }

    addFuel(n: number): void {
        this.fuel += n;
        if (this.fuel >= this.maxFuel)
            this.fuel = this.maxFuel;
    }

    dirigir(distancia: number): void {
        if (this.pass > 0 && this.fuel >= distancia) {
            this.km += distancia;
            this.fuel -= distancia;
            console.log("Passeando pela rua parecendo um picolé")
        } else {
            console.log("Não tenho gasolina suficiente");
        }
    }
}

function somar2(a: number, b: number): number | string {
    let c =  a + b;
    if (c == 8)
        return "8 eh lindo, hoje vou jogar no águia";
    return c;
}

let c = somar2(5, 6);

console.log(c);






