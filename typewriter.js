const sentence = "hello there from lighthouse labs";
const interval = 300; //inteval between each 

let delay = 0
for (const char of sentence) {
setTimeout(() => {
process.stdout.write(char);
}, delay);
delay += interval;
}

setTimeout(() => {
    console.log("\n");
}, sentence.length * interval);