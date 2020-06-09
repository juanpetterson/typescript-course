enum RESULT_TYPES {
  AS_NUMBER,
  AS_TEXT,
}

type Combinable = number | string;

// when using with string/literal-type and not enums
// function combine(input1: number | string, input2: number | string, resultType: 'as-number' | 'as-text') {
function combine(input1: Combinable, input2: Combinable, resultType: number) {
  let result;

  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultType === RESULT_TYPES.AS_NUMBER
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  // if (resultType === RESULT_TYPES.AS_NUMBER) {
  //   result = +result;
  // } else {
  //   result = result.toString();
  // }

  return result;
}

const combinedAges = combine(30, 20, RESULT_TYPES.AS_NUMBER);
console.log(combinedAges);

const combinedStringAges = combine('30', '20', RESULT_TYPES.AS_NUMBER);
console.log(combinedStringAges);

const combinedNames = combine('Juan', 'Ruro', RESULT_TYPES.AS_TEXT);
console.log(combinedNames);
