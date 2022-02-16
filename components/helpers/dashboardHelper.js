export function getColumnIndex(num) {
  let numRemainder = num % 13;
  let divisionResult = Math.floor(num / 13);
  if (numRemainder == 0 && divisionResult > 0) {
    numRemainder = 13;
    divisionResult--;
  }
  let mappedNum = (numRemainder - 1) * 6 + divisionResult + 1;
  return mappedNum;
}
