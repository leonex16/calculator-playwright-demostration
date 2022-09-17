import { useCalculatorVisor } from '../hooks/use-calculator-visor';

export function CalculatorButton ({ ariaLabel, label, IconComponent }) {
  const [calculatorVisorContext, setCalculatorVisorContext] = useCalculatorVisor();

  const NumberJSX = (<span class='text-xl font-bold'>{label}</span>);
  const IconJSX = (<span class='h-4 w-4'><IconComponent /></span>);
  const shouldRenderNumber = IconComponent === null;
  const LabelJSX = shouldRenderNumber ? NumberJSX : IconJSX;

  const shoudDisabledDecimalSeparator = calculatorVisorContext.includes('.');

  const handleClick = (latestButtonEntered) => setCalculatorVisorContext(latestButtonEntered);

  return (
    <button
      class='
      w-16
      h-16
      m-1
      transition-opacity
      ease-in-out
      rounded-[20px]
      [&[data-is-rendered-symbol]]:text-blue-500
      [&[data-label$="C"]]:text-blue-500
      [&[data-is-rendered-symbol]]:pt-2
      [&[data-label="="]]:grow
      bg-gray-100
      dark:bg-neutral-900
      text-zinc-900
      dark:text-neutral-200
      hover:opacity-75
      disabled:opacity-25'
      disabled={label === '.' && shoudDisabledDecimalSeparator}
      aria-label={ariaLabel}
      data-label={label}
      data-is-rendered-symbol={!shouldRenderNumber}
      onClick={() => handleClick(label)}
    >
      {LabelJSX}
    </button>
  );
}
