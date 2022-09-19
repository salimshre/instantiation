class Player{
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hello my name is ${this.name}, I am a type ${this.type}`)

	}
}

class Wizard extends Player{
	constructor(name, type){
		super(name, type)
	}

}

class Animals extends Player{
	constructor(name, type){
		super(name, type)
	}
}

const Wizard1 = new Wizard("salim", "healer");
const Animals1 = new Animals("dragon", "Fire");

