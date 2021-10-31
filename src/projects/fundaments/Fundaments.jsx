import "./Fundaments.css";
import Card from "./components/layout/Card";

import Mega from "./components/draw/Mega";
import Counter from "./components/counter/Counter";
import Input from "./components/form/Input";
import IndirectFather from "./components/communication/IndirectFather";
import DirectFather from "./components/communication/DirectFather";
import UserInfo from "./components/conditional/UserInfo";
import ParOuImpar from "./components/conditional/ParOuImpar";
import ProductsTable from "./components/repetition/ProductsTable";
import StudentsList from "./components/repetition/StudentsList";
import FamilyMember from "./components/basics/FamilyMember";
import Family from "./components/basics/Family";
import Fragment from "./components/basics/Fragment";
import WithParam from "./components/basics/WithParam";
import Random from "./components/basics/Random";
import First from "./components/basics/First";

const App = (_) => {
  return (
    <div className="App">
      <h1>React fundaments 2</h1>

      <div className="Cards">
        <Card title="#13 - Mega" color="#25AAA0">
          <Mega />
        </Card>

        <Card title="#12 - Counter" color="#53BBF4">
          <Counter initialNumber={10} />
        </Card>

        <Card title="#11 - Controlled Component" color="#EB65A0">
          <Input />
        </Card>

        <Card title="#10 - Indirect Communication" color="#3A9AD9">
          <IndirectFather />
        </Card>

        <Card title="#9 - Direct Communication" color="#588C73">
          <DirectFather />
        </Card>

        <Card title="#8 - Conditional Render" color="#FDF200">
          <ParOuImpar number={21} />
          <UserInfo user={{ name: "Diogo" }} />
          <UserInfo user={{ email: "Diogo" }} />
        </Card>

        <Card title="#7 - Table Challenge" color="#E8BAE3">
          <ProductsTable />
        </Card>

        <Card title="#6 - Repetition" color="#3E501B">
          <StudentsList />
        </Card>

        <Card title="#5 - Children Components" color="#C14644">
          <Family family="Oliveira">
            <FamilyMember name="Diogo" />
            <FamilyMember name="Mayara" />
            <FamilyMember name="Eli" />
          </Family>
        </Card>

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

export default App;
