const sentence = "hello there from lighthouse labs";
const interval = 300; //inteval between each step 1

let delay = 0 // intitalizing empty function to add the delay time to each interval
for (const char of sentence) { //loop through each character ion the scentence
setTimeout(() => { //setTimeout
process.stdout.write(char); //Prints out the letters in a row unlike console.log where it break it into each line
}, delay); //instead of the time that will globally affects the entire loop we place the delay function here 
delay += interval; //after passing each character the delay function will now += the interval after each loop!
}

setTimeout(() => {
    console.log("\n"); //we are adding a new line
}, sentence.length * interval); // we are adding the new line after the sentence.length * interval which will pass after the scentence passes!