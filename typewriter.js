const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
    setTimeout( function timer () {
        console.log(char);
      }, char * 1000);
};