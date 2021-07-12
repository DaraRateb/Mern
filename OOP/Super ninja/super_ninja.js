
class Ninja {
    constructor(name,health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;

    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Ninjas name: ${this.name} and  Ninjas health ${this.health} and Ninjas speed: ${this.speed} and Ninjas Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health=this.health+10;
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.speed=10;
        this.strength=10;
        this.health=200;
    this.wisdom=10;
    }
    speakWisdom(){

        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
// const ninja1 = new Ninja("Hyabusa",4);
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
superSensei.showStats();



