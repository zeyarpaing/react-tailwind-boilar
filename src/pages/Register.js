import Form from "../components/Form";
import React from "react";
//import jsonData from "../assets/data.json";

const cameraDataBrand = ["Sony", "Nikon", "Canon", "Fujifilm"];
const Register = () => {
  return (
    <div>
      <Form camera={cameraDataBrand} />
    </div>
  );
}
export default Register;
