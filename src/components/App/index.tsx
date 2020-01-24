import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import FormikField from "../FormikField";

import "./App.css";

interface FormValues {
  name: string;
  position: string;
}

const initialValues: FormValues = {
  name: "",
  position: ""
};

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
              <FormikField name="name" label="Name" />

              <div>
                <label>Position: </label>
                <Field
                  name="position"
                  as="select"
                  placeholder="Choose your Position"
                >
                  <option value=""></option>
                  <option value="front-end">Front End</option>
                  <option value="back-end">Back End</option>
                  <option value="dev-ops">Dev Ops</option>
                  <option value="qa">QA</option>
                </Field>
                <ErrorMessage name="position" />
              </div>

              <button disabled={!dirty || !isValid} type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default App;
