import { useState } from 'preact/hooks';

import { CalculatorPad } from './components/calculator-pad';
import { CalculatorVisorContext } from './context/calculator-visor';

export function Calculator () {
  const [calculatorVisorContext, setCalculatorVisorContext] = useState('0');

  return (
    <CalculatorVisorContext.Provider value={[calculatorVisorContext, setCalculatorVisorContext]}>
      <article class='h-full w-full flex flex-col'>
          <header class='CalculatorVisor flex-grow flex justify-end items-end px-4 py-2 overflow-hidden'>
            <input class='text-right text-[48px] w-full tracking-normal bg-transparent pointer-events-none text-zinc-900 dark:text-neutral-50' type='text' value={calculatorVisorContext} readOnly />
          </header>
        <div class='bg-neutral-200 dark:bg-neutral-800 p-3 flex place-content-center rounded-t-3xl'>
          <CalculatorPad />
        </div>
      </article>
    </CalculatorVisorContext.Provider>
  );
}
