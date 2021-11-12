import React, { useState } from "react";
import BmiResult from "./BmiResult";

const BmiCalculation = () => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const onNameChange = (e) => {
    setName(e.target.value);
  };


  const onHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const onWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const onFormSubmit = (e) => {
      e.preventDefault();
      if(height > 0 && weight > 0 ){
        let meter=height/100;
        let tempBmi = (weight/(meter*meter)).toFixed(2)
        setBmi(tempBmi)
        localStorage.setItem("username",name);
        localStorage.setItem("userbmi",tempBmi);
      }
  }

  return (
      <div className="d-flex flex-column justify-content-center">
          <form className="w-50 mx-auto" onSubmit={onFormSubmit}>
          <div className="mb-3">
        <label  className="form-label">
          Your Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
          onChange={onNameChange}
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Your Height(cm)
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputHeight"
          aria-describedby="emailHelp"
          onChange={onHeightChange}
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Your Weight(kg)
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputWeight"
          onChange={onWeightChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    {
        bmi>0
         ? <BmiResult bmi={bmi} name={name} />
         : <div></div>
    }
   
      </div>
    
  );
};  

export default BmiCalculation;
