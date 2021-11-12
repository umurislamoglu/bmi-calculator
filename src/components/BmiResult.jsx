import React , {useState ,useEffect} from "react";

const BmiResult = ({ bmi , name}) => {


    const [bmiText,setBmiText] = useState("")


    useEffect(() => {
       if(bmi<18){
        setBmiText("underweight")
       } else if(bmi<25){
        setBmiText("ideal")
       } else if(bmi<30){
        setBmiText("overweight")
       } else if(bmi<30){
        setBmiText("obese")
       }
        
    }, [bmi])


  return (
    <div >
      <div className="badge bg-secondary p-3 fs-4 fw-normal w-25 mx-auto mt-5 ">
        {bmi}
      </div>
      <h3 className="mt-3">Hi {name} , you are considered {bmiText}</h3>
    </div>
  );
};

export default BmiResult;
