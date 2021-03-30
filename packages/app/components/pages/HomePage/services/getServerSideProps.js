export const getServerSideProps = async (ctx) => {
  const add = await import('@olehan/add.node');

  const { a, b } = ctx.query;
  console.log('> a - b:', `${a} - ${b}`);

  const sum = add.add(Number(a), Number(b));
  console.log('> sum:', sum);

  return {
    props: {
      sum,
    },
  };
};
