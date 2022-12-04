import React from 'react'
import {Icon} from "../../../assets";
import "./Auth.scss";

export  function Auth() {
  return (
    <div className="auth">
      <Icon.LogoApp className="logo"/>
      <h1>Formulario de login y registro</h1>
    </div>
  );
}
