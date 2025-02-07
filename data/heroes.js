function Hero (name, power, desc) {
    this.name = name;
    this.power = power;
    this.desc = desc;
}

let Heroes = [
    new Hero("Hercules", "Strength", "Could take on 5 men at once."),
    new Hero("Odysseus", "He wise, trojan wise", "He drove that trojan horse as if his life depended on it."),
]

export default Heroes;