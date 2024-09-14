
let banco = []
let rotas = []

calcularMedia = (tempo, entregas) => tempo / entregas

calcularMediaRota = (rota, media) =>{
   let rotaAchada = rotas.find((rotaArray) => rotaArray.rota = rota)
    rotaAchada.media = (rotaAchada.media + media) / 2
}

class Rota{
    constructor(rota, media){
        this.rota = rota
        this.media = media
        rotas.push(this)
    }
}


class Viagem{
    constructor(Motorista, rota, entregas, tempo){
        this.motorista = Motorista.nome
        this.rota = rota
        this.entregas = entregas
        this.tempo = tempo
        this.media = calcularMedia(tempo, entregas)
        banco.push(this)
    }
}

class Motorista{
    constructor(nome){
       this.nome = nome
    }
}

rotaTeste = new Rota(rota="Tirol", media=60)

motoristaTeste = new Motorista("João Vicente")
motoristaTeste2 = new Motorista("Flávio")

viagemTeste = new Viagem(motoristaTeste, "Tirol", 10, 300)
viagemTeste2 = new Viagem(motoristaTeste2, "Tirol", 5, 250)

console.log(rotas)

calcularMediaRota("Tirol", 300)
console.log(rotas)