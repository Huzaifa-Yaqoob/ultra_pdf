import { universalAdd } from '@ultra-pdf/pdf-builder';

export default async function Home() {
  const a = await universalAdd(1n, 2n);

  console.log(a);

  return <div className={'font-heading text-xl'}>It just begins</div>;
}
