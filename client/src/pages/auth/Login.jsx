import CommonForm from "@/components/common/CommonForm";
import {Select, SelectContent, SelectItem} from "@/components/ui/select";
import {LoginFormControls} from "@/config";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const innitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(innitialState);

  const onSubmit = () => {};

  return (
    <div className="mx-auto w-full max-w-md spcae-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create New Accout
        </h1>

        <div>
          <CommonForm
            formControls={LoginFormControls}
            buttonText={"Loggin"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
        </div>
        <p className="mt-2 ">
          Already have an accout
          <Link
            className="font-medium text-primary hover:underline ml-2"
            to={"/auth/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
