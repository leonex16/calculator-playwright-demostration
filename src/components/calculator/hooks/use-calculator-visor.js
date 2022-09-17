/* eslint-disable quote-props */
import { useContext } from 'preact/hooks';
import { CalculatorVisorContext } from '../context/calculator-visor';
import { math } from '../helpers/math';

const operations = {
  'AC': () => ('0'),
  'C': (input) => input.slice(0, -1),
  '%': (input) => math.evalualte(`${input}%`),
  '=': (input) => math.evalualte(input)
};

const formatExpressionCalculator = (input) => {
  return math.formatToMillionSeparator(input);
};

const formatStatementCalculator = (input) => {
  const { backJoin, numbersSplited } = math.splitAndJoinBySymbols(input);
  const numbersFormatted = numbersSplited.map(num => formatExpressionCalculator(num));
  const resultFormatted = backJoin(numbersFormatted);

  return resultFormatted;
};

export const useCalculatorVisor = () => {
  const [calculatorVisorContext, setCalculatorVisorContext] = useContext(CalculatorVisorContext);

  const updateBySymbol = (symbol) => {
    const startWithNegativeNumber = calculatorVisorContext === '0' && symbol === '-';
    if (startWithNegativeNumber) return setCalculatorVisorContext(symbol);

    const operationFn = operations[symbol];
    const result = operationFn
      ? operationFn(`${calculatorVisorContext}`)
      : `${calculatorVisorContext}${symbol}`;

    const isExpression = symbol === '=' || symbol === '%';
    const resultFormatted = isExpression
      ? formatExpressionCalculator(result)
      : formatStatementCalculator(result);

    setCalculatorVisorContext(resultFormatted || '0');
  };

  return [calculatorVisorContext, updateBySymbol];
};
