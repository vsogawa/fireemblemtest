class FEsprite {
    constructor(character) {
        this.angry = "img/"+character+"_angry.png",
        this.grumpy = "img/"+character+"_grumpy.png",
        this.happy = "img/"+character+"_happy.png",
        this.neutral = "img/"+character+"_neutral.png",
        this.sad = "img/"+character+"_sad.png",
        this.shock = "img/"+character+"_shock.png"
        if (character === "elise") {
            this.diamond = "For me?  Yippee!";
            this.bomb = "That's not a funny joke! I won't go easy on you, you know!"
            this.lightning = "Oh wow, that was so loud! Must have been a close one."
            this.name = "Elise"
        }
        if (character === "takumi") {
            this.diamond = "Hmph. You're not so bad after all.";
            this.bomb = "I knew you were Nohrian scum all along! Prepare to die by my hands!"
            this.lightning = "Hnng!"
            this.name = "Takumi"
        }
        if (character === "felicia") {
            this.diamond = "Th-thank you for your kindness!";
            this.bomb = "If that is what you desire, I will follow you until the end."
            this.lightning = "Oh my! Are you okay?"
            this.name = "Felicia"
        }
    }

}

let elise = new FEsprite("elise");
let takumi = new FEsprite("takumi");
let felicia = new FEsprite("felicia");
let currentPageChara = "";

let charaArray = [elise, takumi, felicia];

$(document).ready(function() {
    let randomCharacter = charaArray[Math.floor(Math.random() * charaArray.length)];
    $("#sprite").append("<img id = \"chara\" src=" + randomCharacter.neutral + ">");
    currentPageChara = randomCharacter;
    $("#nametext").empty().append(currentPageChara.name);
})

$(".newHero").on("click", function(){
    let randomCharacter = charaArray[Math.floor(Math.random() * charaArray.length)];
    while (randomCharacter === currentPageChara) {
        randomCharacter = charaArray[Math.floor(Math.random() * charaArray.length)];
    }
    $("#sprite").empty().append("<img id = \"chara\" src=" + randomCharacter.neutral + ">");
    currentPageChara = randomCharacter;
    $("#text").empty().append("Welcome to this test page! How are you today?");
 $("#nametext").empty().append(currentPageChara.name);
})

$(".fa-diamond").on("click", function(){
    $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.happy + ">");
    $("#text").empty().append(currentPageChara.diamond);
})

$(".fa-bomb").on("click", function(){
    $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.angry + ">");
    $("#text").empty().append(currentPageChara.bomb);
})

$(".fa-bolt").on("click", function(){
    $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.shock + ">");
    $("#text").empty().append(currentPageChara.lightning);
})