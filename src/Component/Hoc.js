import { useState } from 'react';
import React from 'react';

const Hoc = (WrappedComponent)=>{
    function New(){
        const [count,setCount]=useState(0);
        const handleSubmit = () => {
             setCount(count+1);
         }
         return(
            <div>
                <WrappedComponent count={count} submit={handleSubmit}/>
            </div>
         )
    }
    return(
        New
    )
}
export default Hoc;