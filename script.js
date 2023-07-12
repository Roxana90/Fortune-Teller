function randomNumberGenerator(num) {
    return Math.floor(Math.random() * num)
}; // Generates a random number.

//Object of arrays to keep the messages
const collectiveWidsom = {
    elementInfo: ['fire', 'air', 'earth', 'water'],
    fortuneOutput: ['great luck', 'good luck', 'ok luck', 'bad luck', 'terrible luck'],
    advice: ['relax more', 'find love', 'get a hug', 'go for a walk', 'listen to music', 'trust nobody']
};

//Store the widsom message in an array
let personalWidsom = [];

// Iterate over the object considering the array length
for (let item in collectiveWidsom) {
    let optionIdx = randomNumberGenerator(collectiveWidsom[item].length)
    
    // Use the object properties to customize the message that's added to personalWidsom
    switch(item) {
        case 'elementInfo':
            personalWidsom.push(`Your element is  "${collectiveWidsom[item][optionIdx]}".`);
            break;
        case 'fortuneOutput':
            personalWidsom.push(`You are having "${collectiveWidsom[item][optionIdx]}" right now.`);
            break;
        case 'advice':
            personalWidsom.push(`You should: "${collectiveWidsom[item][optionIdx]}"!`);
            break;
        default:
            personalWidsom.push('There is not enough info.');
    }
};

function formatWidsom(widsom) {
    // Add some ASCII here.
    const formatted = personalWidsom.join('\n')
    console.log(formatted);
};

formatWidsom(personalWidsom);