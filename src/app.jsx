import {Calculator} from './components/calculator'

export function App () {
  return (
    <main class='grid grid-cols-2'>
    <section class='border h-screen flex justify-center items-center'>
        <article class="aspect-[9/16] w-full max-w-[320px] rounded-3xl border border-neutral-900/30 dark:border-gray-50/30 bg-gray-100 dark:bg-neutral-900 flex flex-col overflow-hidden">
          <Calculator />
        </article>
    </section>
    <section class='border h-screen' />
  </main>
  );
}
