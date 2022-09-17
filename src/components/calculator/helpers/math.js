import * as Math from 'mathjs';

const removeMillionSeparator = (value) => {
  return `${value}`.replaceAll(',', '');
};

const removeDecimalSeparatorOfDecimalPart = (input) => {
  const [integralPart = '', decimalPart = ''] = `${input}`.split('.');
  const inputJoined = `${integralPart}${decimalPart === '' ? '' : '.'}${decimalPart.replaceAll(',', '')}`;
  return inputJoined;
};

const removeDotFromSymbols = (numbers, symbols) => {
  const hasDecimalSeparator = numbers.join('').includes('.');
  const symbolsFiltered = hasDecimalSeparator
    ? symbols.filter(s => s !== '.')
    : symbols;

  return symbolsFiltered;
};

const joinNumbers = (numbers, symbols) => {
  const symbolsDuplicateDotRemoved = removeDotFromSymbols(numbers, symbols);
  const symbolsWithoutComma = symbolsDuplicateDotRemoved.filter(s => s !== ',');
  const calculatorInput = numbers
    .map(num => `${num}${symbolsWithoutComma.shift() ?? ''}`)
    .join('');

  return calculatorInput;
};

const splitAndJoinBySymbols = (calculatorInput) => {
  const filterEmptyStr = digit => digit !== '';
  const numbers = `${calculatorInput}`.split(/\+|-|x|÷/).filter(filterEmptyStr);
  const symbols = `${calculatorInput}`.split(/\d/).filter(filterEmptyStr);

  return {
    numbersSplited: numbers,
    backJoin: (numbersFormatted) => joinNumbers(numbersFormatted, symbols)
  };
};

const formatToMillionSeparator = (value) => {
  const MAX_LENGTH = 10;
  const { 1: partDecimal = [] } = `${value}`.split('.');
  const optsIntl = { maximumFractionDigits: MAX_LENGTH, minimumFractionDigits: partDecimal.length };
  const valueTruncate = `${value}`.slice(0, MAX_LENGTH);
  const valueWithoutComma = removeMillionSeparator(valueTruncate);
  const numberFormat = new Intl.NumberFormat('en-US', optsIntl);
  const valueFormated = numberFormat.format(valueWithoutComma);

  return removeDecimalSeparatorOfDecimalPart(valueFormated);
};

const evalualte = (inputToEval) => {
  const toEval = `${inputToEval}`
    .replaceAll('x', '*')
    .replaceAll('÷', '/');

  return Math.evaluate(removeMillionSeparator(toEval));
};

export const math = { evalualte, formatToMillionSeparator, splitAndJoinBySymbols };
