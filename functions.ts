function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;

  cb(result);
}

let combineValues: (n1: number, n2: number) => number;

combineValues = add;
// combineValues = printResult; // mismatch

addAndHandle(10, 20, result => {
  console.log(result);
});
