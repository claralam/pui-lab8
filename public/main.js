function Penguin(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "a penguin"
    this.image = "images/penguin.png"
}

function RedPanda(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "a red panda"
    this.image = "images/red-panda.png"
}

function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "an elephant"
    this.image = "images/elephant.png"
}

// Creating new instances of each animal type
var penguin = new Penguin("pocky", 10)
var redPanda = new RedPanda("redbean", 5)
var elephant = new Elephant("sesame", 32)

const animals = [penguin, redPanda, elephant]
const names = [penguin.name, redPanda.name, elephant.name]

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    var randomIdx = generateRandomIndex(3);
    return names[randomIdx];
}

function generateRandomAge() {
    var randomIdx = generateRandomIndex(3);
    return animals[randomIdx].age;
}

function generateRandomAnimal() {
    var randomIdx = generateRandomIndex(3);
    var randomAnimal = animals[randomIdx];
    var name = generateRandomName();
    var age = generateRandomAge();

    if (randomAnimal instanceof Penguin) {
        return new Penguin(name, age);
    } else if (randomAnimal instanceof RedPanda) {
        return new RedPanda(name, age);
    } else if (randomAnimal instanceof Elephant) {
        return new Elephant(name, age);
    };
}

function onLoad() {
    var animal = generateRandomAnimal();
    document.getElementById("animal").src = animal.image;
    document.getElementById("animal").alt = animal.image_alt;
    document.getElementById("name").innerHTML = animal.name;
    document.getElementById("age").innerHTML = animal.age;
  }