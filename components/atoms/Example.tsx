import type { FC } from "react";

interface ExampleProps { }

const Example: FC<ExampleProps> = () => {
  return (
    <p className="text-3xl font-bold flex flex-col">
      <span>Grüezi!</span>
      <span>Salut !</span>
      <span>Ciao!</span>
      <span>Allegra!</span>
    </p>
  );
};

export default Example;
