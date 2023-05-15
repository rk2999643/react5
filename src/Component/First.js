import React from "react";
import Hoc from "./Hoc";

  

const First= (props) => {
    console.log(props);
    
    return(
        <div className="">
                <div className="bg"><h1 className="click">For Click</h1>
        <h1>{props.count}</h1>
          <button onClick={props.submit} className="addbt">Add</button>
        </div>
</div>
    )
}
export default Hoc(First)