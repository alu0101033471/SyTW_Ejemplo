import React from 'react';
import {Form} from "semantic-ui-react";
import {useFormik} from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";
import {Auth} from "../../../../api"

const authController = new Auth();

export function LoginForm() {
    //const { login } = useAuth();
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validationOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const response = await authController.login(formValue);  
                console.log(response);
                //console.log("Trying");
            } catch (error) {
                console.error(error);
            }
        },
    });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input 
        name="email" 
        placeholder="Correo electrónico" 
        onChange={formik.handleChange} 
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Form.Input 
        name="password" 
        type="password" 
        placeholder="Contraseña" 
        onChange={formik.handleChange} 
        value={formik.values.password}
        error={formik.errors.password}
       />

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Entrar
      </Form.Button>
    </Form>
  );
}
