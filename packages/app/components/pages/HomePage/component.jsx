import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const WasmComponent = dynamic({
  ssr: false,
  loader: async () => {
    const go = new Go();

    const addWasm = await fetch('/add.wasm');
    const addWasmBytes = await addWasm.arrayBuffer();
    const wasm = await WebAssembly.instantiate(addWasmBytes, go.importObject);

    go.run(wasm.instance);

    return ({ a, b }) => {
      console.log('> a, b:', `${a}, ${b}`);
      const sum = wasm.instance.exports.add(Number(a), Number(b));
      console.log('> sum:', sum);

      return sum;
    };
  },
});

export const HomePage = ({ sum }) => {
  const router = useRouter();
  const { a, b } = router.query;

  return (
    <div>
      <h1>
        Change queries <code>a</code> and <code>b</code> to see changes
      </h1>
      <h3>
        Sum from add.wasm: <WasmComponent a={a} b={b} />
      </h3>
      <h3>Sum from add.node: {sum}</h3>
    </div>
  );
};
