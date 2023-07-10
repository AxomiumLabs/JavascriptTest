let ratings = [5, 4, 5];
let sum = 0;


// ratings.forEach((result)=>{console.log(result+4)})

let sumFunction = async (a, b) => a + b;

ratings.forEach((result) => {
  sum = result+2
  console.log(sum);
});

const arrSparse = [1, 3, /* empty */, 7];
let CallbackRuns = 0;

arrSparse.forEach((element) => {
  console.log({ element });
  CallbackRuns++;
});
