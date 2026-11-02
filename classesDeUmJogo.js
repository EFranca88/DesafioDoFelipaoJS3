class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    heroType() {
        if (this.type === "mago") {
            this.heroAttack = "magia"
        } else if (this.type === "guerreiro") {
            this.heroAttack = "espada"
        } else if (this.type === "monge") {
            this.heroAttack = "artes marciais"
        } else if (this.type === "ninja") {
            this.heroAttack = "shuriken"
        } else {
            this.heroAttack = "ataque basico"
        }
        console.log(`O ${this.type} atacou usando ${this.heroAttack}`)
    }
}
function whatAttackType() {
    let heroList = [
        ["Elzaliel" , 15,"mago"],
        ["Anavelin" , 35,"monge"],
        ["Cadulix" , 75,"mago"],
        ["Andrenzux" , 13,"guerreiro"],
        ["Erraim" , 93,"monge"],
        ["Smurf" , 15,"guerreiro"],
        ["Candelun" , 51,"ninja"],
        ["Morfirelix", 101,"comerciante"]
    ]
    for (const lineIndex in heroList) {
        let myHero = new hero(heroList[lineIndex][0], heroList[lineIndex][1], heroList[lineIndex][2])
        myHero.heroType()
    }
}

whatAttackType()
// a0d824a88e465777991fda8adfd7353458298471b9bdd9f2