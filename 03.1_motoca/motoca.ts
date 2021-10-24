class Pessoa {
    age: number;
    name: string;

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }
}

class Moto {
    pessoa: Pessoa | null;
    power: number;
    time: number = 0;
    vel: number = 4 * 60 / 3.6; //km por hora para metros por minuto

    constructor(power: number){
        this.power = power;
    }

    isOcupada(): boolean {
        if (this.pessoa == null) {
            return false;
        }
        return true;
    }

    isAgeRight(pessoa: Pessoa): boolean {
        if (pessoa.age > 10) {
            return false;
        }
        return true;
    }

    subir(pessoa: Pessoa) {
        if (this.isAgeRight(pessoa) == true) {
            if (this.isOcupada() == false) {
                console.log(pessoa.name + " subiu na moto.")
                this.pessoa = pessoa;
            }
        }
        else { 
            console.log("A criança não pode subir na moto.")
        }
    }   

    descer(): Pessoa | null {
        if (this.isOcupada() == false || this.time <= 0) {
            console.log("Moto desocupada; não há quem desça.");
            return null;
        }
        console.log(this.pessoa.name + " desceu da moto. Moto desocupada.");
        return this.pessoa;
    }

    comprarTempo(tempo: number) {
        this.time = tempo   
    }

    dirigir(tempo: number) {
        if (tempo <= this.time){
            let desloc: number = this.vel * tempo;
            console.log("Você andou " + desloc.toFixed(2) + " metros. ainda restam " + (this.time - tempo )+ " minutos.");
            this.time -= tempo;
        }
        else {
            let desloc: number = this.vel * this.time;
            console.log("Seu tempo acabou. Você andou " + desloc.toFixed(2) + " metros.");
            this.time = 0;
        }
    }

    buzinar(): string {
        if (this.isOcupada() == false) {
            return ("Moto desocupada. Não há como buzinar.");
        }
        let som = "p";
        for (let i = 0; i < this.power; i++) {
            som += "e";
        } 
        return som + "m;"
    }

    darGrau() {
        let n = Math.random() * 100;
        if (n >= 40 && this.isOcupada() == true) {
            console.log(this.pessoa.name + " deu um grau. Incrível.");
        }
        if (n < 40 && this.isOcupada() == true) {
            console.log("A criança caiu e agora precisa ser hospitalizada.")
            this.pessoa = null;
            this.time = 0;
        }

        if (this.isOcupada() == false) {
            console.log("A moto está desocupada pois a criança caiu. Sério, leva ela pro hospital.")
        }
    }
}

let moto = new Moto(5);
let crianca1 = new Pessoa(8, "Zé");
let crianca2 = new Pessoa(11, "Ana");
let crianca3 = new Pessoa(5, "Astrianeudo");

moto.comprarTempo(5);
moto.subir(crianca1);
moto.dirigir(3);

moto.subir(crianca3);

moto.dirigir(1);
moto.descer();

moto.comprarTempo(8);
moto.subir(crianca2);
moto.darGrau();
moto.darGrau();
moto.darGrau();

if(moto.isOcupada() == false) {
    moto.subir(crianca2);
}