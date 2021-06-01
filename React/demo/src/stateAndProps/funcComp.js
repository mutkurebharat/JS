const FunctionalComponent = (props) => {

    // const clickHandler = () => {
    //     alert("Click Handler is getting called")
    // }

    function clickHandler() {
         alert("Click Handler is getting called");
    }

    console.log("props = ",props);
    return (
      <div>
        <h1>{props.name}</h1>
        <button onClick={clickHandler}>Click In Functional</button>
      </div>
    );
}
    
    

export default FunctionalComponent;