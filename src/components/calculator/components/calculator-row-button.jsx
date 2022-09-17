import { CalculatorButton } from './calculator-button';

export function CalculatorRowButton ({ rowButtons }) {
  return (
    <div class='flex'>
      {rowButtons.map(({ ariaLabel, label, IconComponent }) => {
        return <CalculatorButton key={label} IconComponent={IconComponent} label={label} ariaLabel={ariaLabel} />;
      })}
    </div>
  );
}
