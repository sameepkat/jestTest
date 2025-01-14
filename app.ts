
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
  sum: (a: number, b: number) => {
      return a+b;
  },
  sub: (a: number, b: number) => {
      return a-b;
  },
  div: (a: number, b: number) => {
      return a/b;
  },
  mul: (a: number, b: number) => {
      return a*b;
  },
};

export function caesarCipher(input: string, shiftFactor: number){
  let caesar: string = "";
  for(let i=0;i<input.length; i++){
    let letterAscii = input.charCodeAt(i);
    if(letterAscii >= 65 && letterAscii <=90)
      caesar += String.fromCharCode(65+(letterAscii - 65 + shiftFactor)%26);
    else if(letterAscii >= 97 && letterAscii <=122)
      caesar += String.fromCharCode(97+(letterAscii - 97 + shiftFactor)%26);
    else
      caesar += String.fromCharCode(letterAscii);
  }
  return caesar;
}
interface analyzedArray {
  average: number,
  min: number,
  max: number,
  length: number
}
export function analyzeArray(inputArr: Array<number>){
  const average = inputArr.reduce((sum, curr) => sum+curr, 0)/inputArr.length;
  const min = Math.min(...inputArr);
  const max = Math.max(...inputArr);
  const length = inputArr.length;
  return{
    average,
    min,
    max,
    length
  }
}