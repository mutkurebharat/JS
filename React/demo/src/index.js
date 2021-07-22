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
import ClickCount from './HOC/ClickCount'
import HoverCount from './HOC/HoverCounter'
import ClickCounter from './PropsRendering/ClickCounter';
import HoverCounter from "./PropsRendering/HoverCounter";
import CommonComponent from './PropsRendering/CommonComponent'
import Name from './PropsRendering/Name'
import ComponentA from './Context/NormalUseCase/ComponentA'
import ComponentB from "./Context/NormalUseCase/ComponentB";
import ComponentC from "./Context/NormalUseCase/ComponentC";
import ContextComponentA from './Context/ContextAPI/ContextComponentA';
import { ContextApiProvider } from './Context/ContextAPI/Context';
import {obj} from './Context/ContextAPI/data'
import PostsApi from './Api/postsApi';
import MethodPostApi from './Api/MethodPostApi';
import ClassCounter from './Hooks/Components/ClassCounter';
import HookCounter from './Hooks/Components/HookCounter';
import UseStateWithObject from './Hooks/Components/UseStateWithObject';
import UseStateWithArray from './Hooks/Components/UseStateWithArray';
import HooksClassCounter from './Hooks/UseEffect/ClassCounter'
import UseEffectHookCounter from './Hooks/UseEffect/UseEffectHookCounter'


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
        {/* <InputContComp /> */}
        {/* <ClickCount some="ABC" one="1" two="2" three="3" />
        <HoverCount /> */}
        {/* <ClickCounter />
        <HoverCounter /> */}
        {/* <CommonComponent
          abc={(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />

        <CommonComponent
          abc={(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        />

        <Name value={(something) => something === "one" ? "Hundred" : "Invalid"} /> */}

        {/* <ComponentA name="Bharat"/> */}
        {/* <ContextApiProvider value={obj}>
          <ContextComponentA />
        </ContextApiProvider> */}

        {/* <PostsApi /> */}
        {/* <MethodPostApi /> */}
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <UseStateWithObject /> */}
        {/* <UseStateWithArray /> */}
        {/* <HooksClassCounter /> */}
        <UseEffectHookCounter />
      </React.Fragment>
    );
    
}
ReactDOM.render(<App />, document.querySelector("#root"));
