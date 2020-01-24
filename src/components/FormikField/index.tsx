import React from "react";
import { ErrorMessage, Field } from "formik";
import TextField from "@material-ui/core/TextField";

import "./FormikField.css";

interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
}

const FormikField: React.FC<FormikFieldProps> = ({ name, label, type = "text" }) => {
  return (
    <div className="FormikField">
      <Field
        required
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

export default FormikField;
