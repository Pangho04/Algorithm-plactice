function addBinary(a: string, b: string): string {
  const decimalA = getDecimal(a);
  const decimalB = getDecimal(b);
  const reversedSum: string[] = [];
  let decimalSum = decimalA + decimalB;

  if (decimalSum === BigInt(0)) {
    return "0";
  }

  while (decimalSum > 0) {
    reversedSum.push(String(decimalSum % BigInt(2)));

    decimalSum = decimalSum / BigInt(2);
  }

  return reversedSum.reverse().join("");
};

function getDecimal(binary: string): bigint {
  const binaryNums = binary.split("").map((str) => +str);

 return  binaryNums.reduce((acc, cur, i) => {
    if (cur === 1) {
      return acc + BigInt(2) ** BigInt(binaryNums.length - (i + 1));
    } else {
      return acc;
    }
  }, BigInt(0));
}