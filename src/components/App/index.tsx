import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

import FormikField from "../FormikField";
import FormikSelect, { FormikSelectItem } from "../FormikSelect";

import "./App.css";

interface FormValues {
  name: string;
  position: string;
}

const initialValues: FormValues = {
  name: "",
  position: ""
};

const positionItems: FormikSelectItem[] = [
  {
    label: "Front End",
    value: "front_end"
  },
  {
    label: "Back End",
    value: "back_end"
  },
  {
    label: "Dev Ops",
    value: "dev_ops"
  },
  {
    label: "QA",
    value: "qa"
  }
];

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  position: Yup.string().required("Required")
});

const App: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <FormikField name="name" label="Name" required />
              <FormikSelect
                name="position"
                items={positionItems}
                label="Position"
                required
              />

              <Button
                variant="contained"
                color="primary"
                disabled={!dirty || !isValid}
                type="submit"
              >
                Primary
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;
