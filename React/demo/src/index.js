import React from 'react';
import ReactDOM from 'react-dom'
import Bharat from './Component'
import ButtonComponent from "./ButtonComponent"
import FunctionalComp from './stateAndProps/funcComp'
import ClassComponent from './stateAndProps/classComp'
import Parent from './methodAsProps/methodAsProps'
import Condition from './Conditional_Rendering/ifElse'
import Ternarry from './Conditional_Rendering/Ternary'
import ShortCircuit from './Conditional_Rendering/shortCircuitOperator'
import List from './List/List'
import ListClass from './List/ListClass'
import Form from './FormInput/FormInput'
import LifeCycleOne from './Lifecycle_Method/cycle'
import Fragment from './Fragement/fragement'
import ParentComponent from './Pure_Component/ParentComponent'
import Ref from './Ref/Ref'
import InputContComp from './Ref/InputContComp'
import "./index.css"

function App() {
    return (
      // <div>
      //   <h2 style={{ backgroundColor: "red", color: "green" }}>Heading</h2>
      //   <p className="para">Paragraph</p>
      //   <Bharat />
      //   <br />
      //   <ButtonComponent title="Activate" />
      //   <br />
      //   <br />
      //   <br />
      //   <ButtonComponent title="Deactivate" />
      // </div>
      <React.Fragment>
        {/* <FunctionalComp name="Functionalll Componenetttt" />
        <ClassComponent
          value1="Classsss Componentttt 1"
          value2="Classsss Componentttt 2"
          value3="Classsss Componentttt 3"
          value4="Classsss Componentttt 4"
        /> */}
        {/* <Parent /> */}
        {/* <Condition /> */}
        {/* <Ternarry /> */}
        {/* <ShortCircuit /> */}
        {/* <List /> */}
        {/* <ListClass /> */}
        {/* <Form /> */}
        {/* <LifeCycleOne /> */}
        {/* <Fragment /> */}
        {/* <ParentComponent /> */}
        {/* <Ref /> */}
        <InputContComp />
      </React.Fragment>
    );
    
}
ReactDOM.render(<App />, document.querySelector("#root"));
