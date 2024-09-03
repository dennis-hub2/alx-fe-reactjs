// src/components/formikForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
