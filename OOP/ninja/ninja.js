



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
// class Ninja1 extends Ninja{
//     constructor(name){
//         super(name,"well");  
//     }
//     sayName(){
//         console.log(this.name);
//     }
// }
const ninja1 = new Ninja("Hyabusa",4);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();


