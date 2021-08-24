const sentence = "hello there from lighthouse labs\n";
const splitsen = sentence.split("");
console.log(splitsen);
splitsen.forEach((char, index) => {
  setTimeout(() => {
    process.stdout.write(char);
    
  }, 50 * index);
});