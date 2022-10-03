import { current } from "@reduxjs/toolkit";

const initialstate = [];
let changestate = (state = initialstate, action) => {
  console.log("action", action);
  switch (action.type) {
    
    case "in":
     let x=  [...state , action.payload ];
      return x
     
      case "de":
      return console.log("hjv")
    default:
      return state;
  }
};
export default changestate;