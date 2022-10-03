import React,{useEffect} from "react";
import { useSelector } from "react-redux";

export default function Lilist(props) {
  const state1 = useSelector((state) => state.changestate);
  console.log(state1,"orignal");
  const removeItem = (index) => {
    state1.splice(index, 1);
    console.log(state1);
  };
useEffect(() => {
  // props.clickhandler()
}, [state1])

  return (
    <div>
      {state1?.map((e, index) => (
        <li>
          {e} {index}
          <button
            style={{ color: "green" }}
            onClick={() => {
              removeItem(index);
              // console.log(state1,"update");
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}
