
export function capitalize(input: string) {
  return [input[0].toUpperCase(), input.slice(1)].join('');
}

export function reverseString(input: string){
  return input.split('').reverse().join('');
}

export function sum(a: number | string, b: typeof a) {
  if(typeof a == 'number' && typeof b == 'number')
    return a+b;
  if(typeof a == 'string' && typeof b == 'string')
    return a+b;
}

export const Calculator = {

};

export function caesarCipher(input: string, shiftFactor: number){}

interface analyzedArray {
  average: number,
  min: number,
  max: number,
  length: number
}
export function analyzeArray(inputArr: Array<number>):analyzedArray {}