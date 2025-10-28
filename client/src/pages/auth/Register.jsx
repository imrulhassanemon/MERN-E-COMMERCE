import CommonForm from "@/components/common/CommonForm";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { RegisterFormControls } from "@/config";
import React, { useState } from "react";
import {Link} from "react-router-dom";

const innitialState = {
    userName: '',
    email: '',
    password: ''
}

const Register = () => {

    const [formData, setFormData] = useState(innitialState)


    const onSubmit = ( )=>{

    }


  return (
    <div className="mx-auto w-full max-w-md spcae-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create New Accout
        </h1>

       <div>
        <CommonForm
        formControls={RegisterFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
       </div>
        <p className="mt-2 ">
          Already have an accout
          <Link
            className="font-medium text-primary hover:underline ml-2"
            to={"/auth/login"}>
            Login
          </Link>
        </p>
      </div>
      
    </div>
  );
};

export default Register;
