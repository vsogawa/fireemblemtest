class FEsprite {
    constructor(character) {
        this.angry = "img/"+character+"_angry.png",
        this.grumpy = "img/"+character+"_grumpy.png",
        this.happy = "img/"+character+"_happy.png",
        this.neutral = "img/"+character+"_neutral.png",
        this.sad = "img/"+character+"_sad.png",
        this.shock = "img/"+character+"_shock.png"
        if (character === "elise") {
            this.diamond = "For me?  Yippee!"
            this.bomb = "That's not a funny joke! I won't go easy on you, you know!"
            this.lightning = "Oh wow, that was so loud! Must have been a close one."
            this.throne = "Why do I need to sit here? I'm pretty busy you know."
            this.name = "Elise"
        }
        if (character === "takumi") {
            this.diamond = "Hmph. You're not so bad after all."
            this.bomb = "I knew you were Nohrian scum all along! Prepare to die by my hands!"
            this.lightning = "Hnng!"
            this.throne = "This throne reminds me of my mother..."
            this.name = "Takumi"
        }
        if (character === "felicia") {
            this.diamond = "Th-thank you for your kindness!"
            this.bomb = "If that is what you desire, I will follow you until the end."
            this.lightning = "Oh my! A-Are you okay?"
            this.throne = "????"
            this.name = "Felicia"
        }
        if (character === "garon") {
            this.diamond = "......."
            this.bomb = ".............I wouldn't have it any other way."
            this.lightning = "..............."
            this.throne = "*GROANS OF INCREASING DISCOMFORT*"
            this.melt = "img/garon_melt.png"
            this.name = "Garon"
        }
    }

}

let elise = new FEsprite("elise");
let takumi = new FEsprite("takumi");
let felicia = new FEsprite("felicia");
let garon = new FEsprite("garon");
let currentPageChara = "";

let charaArray = [elise, takumi, felicia, garon];

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
    if (currentPageChara === garon) {
        $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.neutral + ">");
    }
    else {
        $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.happy + ">");
    }
    $("#text").empty().append(currentPageChara.diamond);
})

$(".fa-bomb").on("click", function(){
    if (currentPageChara === garon) {
        $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.happy + ">");
    }
    else {
        $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.angry + ">");
    }
    $("#text").empty().append(currentPageChara.bomb);
})

$(".fa-bolt").on("click", function(){
    $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.shock + ">");
    $("#text").empty().append(currentPageChara.lightning);
})

$(".fa-wheelchair").on("click", function(){
    if (currentPageChara === garon) {
        $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.melt + ">");
    }
    if (currentPageChara === takumi || currentPageChara === felicia) {
        $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.sad + ">");
    }
    if (currentPageChara === elise) {
        $("#sprite").empty().append("<img id = \"chara\" src=" + currentPageChara.grumpy + ">");
    }
    $("#text").empty().append(currentPageChara.throne);
})