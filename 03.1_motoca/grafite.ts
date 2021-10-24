class Grafite {
    calibre: number;
    dureza: string;
    tamanho: number;

    constructor(calibre: number, dureza: string, tamanho: number) {
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;
    } 

    toString() {
        return `Grafite: ${this.calibre} ${this.dureza} ${this.tamanho}`;
    }
}

class Lapiseira {
    calibre: number;
    grafite: Grafite | null;

    constructor(calibre: number){
        this.calibre = calibre;
        this.grafite = null;
    }

    setGrafite(grafite: Grafite): boolean {
        if (this.grafite != null){
            console.log("A lapiseira já possui um grafite.");
            return false;
        }
        if (grafite.calibre != this.calibre) {
            console.log("O grafite não é compatível com a lapiseira.");
            return false;
        }
        this.grafite = grafite;
        return true;
    }

    removeGrafite(): Grafite | null {
        if (this.grafite == null){
            console.log("A lapiseira não possui grafites.");
            return null;
        }
        let grafite_r = this.grafite;
        this.grafite = null;
        return grafite;
    }

}


let lapiseira = new Lapiseira(0.5);
console.log(lapiseira);

let grafite = new Grafite(0.5, "8B", 5);
console.log(grafite.toString());

lapiseira.setGrafite(grafite);

lapiseira.removeGrafite();

console.log(lapiseira);
lapiseira.removeGrafite();