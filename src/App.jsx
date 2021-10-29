import "./App.css";
import Card from "./components/layout/Card";

import Random from "./components/basics/Random";
import First from "./components/basics/First";
import WithParam from "./components/basics/WithParam";
import Fragment from "./components/basics/Fragment";

export default (_) => {
  return (
    <div className="App">
      <h1>React fundaments 2</h1>

      <div className="Cards">
        <Card title="#4 - Random Challenge" color="#4E2877">
          <Random min={1} max={60} />
        </Card>
        <Card title="#3 - With Param" color="#361228">
          <WithParam
            title="Student situation"
            student="Diogo Oliveira"
            grade={9.7}
          />
        </Card>
        <Card title="#2 - Fragment" color="#1F190A">
          <Fragment></Fragment>
        </Card>
        <Card title="#1 - First" color="#2F8E58">
          <First />
        </Card>
      </div>
    </div>
  );
};
