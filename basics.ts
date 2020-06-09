function add(n1: number, n2: number, showResult: boolean, phrase: string): number {
  // if (typeof n1 === "number" && typeof number2 === "number") {
  //   throw new Error("Incorrect input!");
  // } it`s just ajvascript validation

  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  }

  return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
