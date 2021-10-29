import Card from "./components/layout/Card";

import Random from "./components/basics/Random";
import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";

export default (_) => {
  return (
    <div id="app">
      <h1>React fundaments 2</h1>
      <Card title="Random Challenge">
        <Random min={1} max={60} />
      </Card>
      <Card title="With Param">
        <WithParam
          title="Student situation"
          student="Diogo Oliveira"
          grade={9.7}
        />
      </Card>
      <Card title="Fragment">
        <Fragment></Fragment>
      </Card>
      <Card title="First">
        <First />
      </Card>
    </div>
  );
};
