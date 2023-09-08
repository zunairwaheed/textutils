import React from "react";

function Alert(props) {
    const Capatalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {Capatalize(props.alert.type)} : {props.alert.msg} 
      
    </div>
  );
}

export default Alert;
