function reverseWords(sentence) {
    let reversedSentence = '';
    let currentWord = '';
    
    for (let char of sentence) {
        if (char !== ' ') {
            currentWord = char + currentWord; 
        } else {
            currentWord = ''; 
        }
    }
    
    reversedSentence += currentWord;
    
    return reversedSentence;
}


let inputSentence = prompt("Enter a sentence:");
let reversedSentence = reverseWords(inputSentence);
console.log("Reversed sentence: " + reversedSentence);
