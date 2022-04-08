var randoms = [...Array(5)].map(() => Math.floor(Math.random() * 1000));

console.log(randoms);
var min = Math.min( ...randoms ),
   max = Math.max( ...randoms );
console.log("Minimum Value:"+min);
console.log("Maximum Value:"+max);