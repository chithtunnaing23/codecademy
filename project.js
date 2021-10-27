const createRandomnum = (num) => {
    //returns random number from 0 to num - 1
    return Math.floor(Math.random() * num);
};

//message object
const messages = {
    signs : ["Astralis", "Yeager", "Byzantine", "Pylistrick", 
    "Mortacky"],
    future : ["have to go on adventures", "be married in a year", 
    "have to do hard decisions concerning your life", 
    "encounter major incients in your country"],
    to_do : ["eat almond oil on early morning", "lick your own elbow twice a day", 
    "bath with goat urine", "punch yourself looking in the mirror"]
};

function generateMessage(){
    let result = []
    //generating message
    for (let item in messages){
        let index = createRandomnum(messages[item].length);
        switch(item){
            case "signs":
                result.push(`According to high-level mythical calculations, your sign right now is ${messages.signs[index]}.`);
                break;
            case "future":
                result.push(`Regarding your future, you will likely ${messages.future[index]}.`);
                break;
            case "to_do":
                result.push(`For better luck, you should ${messages.to_do[index]}.`);
                break;
            default:
                result.push("Not enough information");
                break;
        }

    };
    return result.join("\n");
}

//printout the message
console.log(generateMessage());


