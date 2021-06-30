const sentence = "hello there from lighthouse labs";
let i = 0;

for (let j = 0; j < sentence.length; j++) {
  setTimeout(()=> {process.stdout.write(sentence[j]);
    if (j === (sentence.length - 1)){ 
      process.stdout.write('\n');
    }},i);
  i += 100;
  
};