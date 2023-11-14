import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

import { useState } from "react";

function App() {

  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello!"} />
      <Section title="Diffrent Title">This is my Section</Section>
      <Counter setCount={setCount}>The Count is {count}</Counter>
      <List items={["coffee","tacos","code"]} render={(item: string) => <span className="gold">{item}</span>}/>
    </>
  );
}

export default App;
