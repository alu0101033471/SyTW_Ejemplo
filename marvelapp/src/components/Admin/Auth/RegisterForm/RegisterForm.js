import React, {useState} from 'react';
import {Form} from "semantic-ui-react";
import "./RegisterForm.scss";
import {useFormik} from "formik";
import {initialValues} from "./RegisterForm.form";
import "./RegisterForm.scss";

export  function RegisterForm() {
  const[error, setError] = useState("");
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (formValue) => {
        try {
            console.log(formValue)
        } catch (error) {
            console.error(error)
        }
    }
  })
  return (
    <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input 
          name="email" 
          placeholder="Correo electronico"
          onChange={formik.handleChange} 
          values={formik.values.email}
        />
        <Form.Input 
          name="password" 
          type="password" 
          placeholder="Contraseña" 
          onChange={formik.handleChange} 
          values={formik.values.password}
        />
        <Form.Input 
          name="repeatPassword" 
          type="password" 
          placeholder="Repetir Contraseña" 
          onChange={formik.handleChange} 
          values={formik.values.repeatPassword}
        />
        <Form.Checkbox 
          name="conditionAccepted" 
          label="He leido y acepto las politicas de privacidad" 
          onChange={(_, data) => 
            formik.setFieldValue("conditionAccepted", data.checked)
        }
          checked={formik.values.conditionAccepted}
        />
        <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
            Crear cuenta
        </Form.Button>
        <p className="register-form__error">{error}</p>
    </Form>
  );
}
