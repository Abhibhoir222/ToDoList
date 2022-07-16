import React from "react";

const ShowToDo=(props)=>{
    return(
        <div className="container">
            <div className="row my-2">
                <div className="col-6" >
                    <h1>{props.task}  </h1>
                </div>
                <div className="col-6" >
                <button onClick={()=>{
                    props.onSelect(props.id)
                }} >X</button>
                </div>

            </div>
        </div>
    )

}

export default ShowToDo;