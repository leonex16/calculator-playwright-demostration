import { CalculatorRowButton } from './calculator-row-button';
import { DashSymbol } from '../../icons/dash-symbol';
import { DivideSymbol } from '../../icons/divide-symbol';
import { EqualSymbol } from '../../icons/equal-symbol';
import { MultiplySymbol } from '../../icons/multiply-symbol';
import { PercentageSymbol } from '../../icons/percentage-symbol';
import { PlusSymbol } from '../../icons/plus-symbol';

const multiRowButtons = [
  [
    {
      label: 'AC',
      ariaLabel: 'All Clear',
      IconComponent: null
    },
    {
      label: 'C',
      ariaLabel: 'Clear',
      IconComponent: null
    },
    {
      label: '%',
      ariaLabel: 'Percentage',
      IconComponent: PercentageSymbol
    },
    {
      label: '÷',
      ariaLabel: 'Divider',
      IconComponent: DivideSymbol
    }
  ],
  [
    {
      label: '7',
      ariaLabel: 'Seven',
      IconComponent: null
    },
    {
      label: '8',
      ariaLabel: 'Eight',
      IconComponent: null
    },
    {
      label: '9',
      ariaLabel: 'Nine',
      IconComponent: null
    },
    {
      label: 'x',
      ariaLabel: 'Multiply',
      IconComponent: MultiplySymbol
    }
  ],
  [
    {
      label: '4',
      ariaLabel: 'Four',
      IconComponent: null
    },
    {
      label: '5',
      ariaLabel: 'Five',
      IconComponent: null
    },
    {
      label: '6',
      ariaLabel: 'Six',
      IconComponent: null
    },
    {
      label: '-',
      ariaLabel: 'Dash',
      IconComponent: DashSymbol
    }
  ],
  [
    {
      label: '1',
      ariaLabel: 'One',
      IconComponent: null
    },
    {
      label: '2',
      ariaLabel: 'Two',
      IconComponent: null
    },
    {
      label: '3',
      ariaLabel: 'Three',
      IconComponent: null
    },
    {
      label: '+',
      ariaLabel: 'Plus',
      IconComponent: PlusSymbol
    }
  ],
  [
    {
      label: '0',
      ariaLabel: 'Zero',
      IconComponent: null
    },
    {
      label: '.',
      ariaLabel: 'Dot',
      IconComponent: null
    },
    {
      label: '=',
      ariaLabel: 'Equal',
      IconComponent: EqualSymbol
    }
  ]
];

export function CalculatorPad () {
  return (
    <section>
      {multiRowButtons.map((rowButtons, i) => {
        return <CalculatorRowButton key={`CalculatorRowButton-${i}`} rowButtons={rowButtons} />;
      })}
    </section>
  );
}
