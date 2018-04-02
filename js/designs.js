class FEsprite {
    constructor(character) {
        this.angry = "img/"+character+"_angry.png",
        this.grumpy = "img/"+character+"_grumpy.png",
        this.happy = "img/"+character+"_happy.png",
        this.neutral = "img/"+character+"_neutral.png",
        this.sad = "img/"+character+"_sad.png",
        this.shock = "img/"+character+"_shock.png"
    }
}

let elise = new FEsprite("elise");
let takumi = new FEsprite("takumi");
let felicia = new FEsprite("felicia");

let charaArray = [elise, takumi, felicia];


$(".fa-diamond").on("click", function(){
    let randomCharacter = charaArray[Math.floor(Math.random() * charaArray.length)];
    $("#sprite").empty().append(randomCharacter.happy);
    console.log("joke");
})