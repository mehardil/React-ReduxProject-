import {useDispatch,useSelector} from "react-redux"
import {useRef } from "react";
import {incno,decno} from "./action/Action"
import "./Style.css"
import Lilist from "./Lilist"

function App() {
  const dispatch = useDispatch()
  const state1 = useSelector(state=>state.changestate)
  const text = useRef(0);
 const clickhandler=()=>{
    dispatch( incno( text.current.value));
    text.current.value = ''
  }
  const remove=()=>{
    dispatch( decno());
    state1= ""
  }



  
  console.log("sval",state1)

  return (
   <div>
    <div className=" todo" >
      <h1>hello REDUX</h1>
      
      <input ref={text} defaultValue={state1.initial}></input>
    
       <button onClick={clickhandler}>click add</button>
      <button onClick={remove}>click sub</button>
    </div>
     <Lilist value={state1} clickhandler={clickhandler} />
     </div>
  );
}

export default App;
