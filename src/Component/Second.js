import React from "react";
import Hoc from "./Hoc";




function Second(props){
    console.log(props.submit)
   
    return(
      <div >
      <div className="bghover"><h1 className="mouse">For Hover</h1>
<h1>{props.count}</h1>
<button onMouseOver={props.submit} className="addbt">Add</button>
</div>
</div>
    )
}
export default Hoc (Second)