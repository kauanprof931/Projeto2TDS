class Animal {
    emitirSom(){
        return "Som de animal";
    }
}

class Cachorro extends Animal {
    emitirSom(){
        return "Au au";
    }
}

const cachorro = new Cachorro();
console.log(cachorro.emitirSom());