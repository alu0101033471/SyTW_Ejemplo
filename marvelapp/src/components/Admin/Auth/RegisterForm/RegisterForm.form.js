import * as Yup from "yup";

export function initialValues(){
    return {
        nombre: "",
        nickname: "",
        edad: "",
        email: "",
        password: "",
        repeatPassword: "",
        conditionAccepted: false,
    }
}

export function validationSchema() {
    return Yup.object({
        nombre: Yup.string().required("Campo obligatorio"),
        nickname: Yup.string().required("Campo obligatorio"),
        edad: Yup.string().required("Campo obligatorio"),
        email: Yup.string()
        .email("El email no es valido")
        .required("Campo obligatorio"),
        password: Yup.string().required("Campo obligatorio"),
        repeatPassword: Yup.string().required("Campo obligatorio").oneOf([Yup.ref("password")], "Las contraseñas deben coincidir"),
        conditionAccepted: Yup.bool().isTrue(true),
    });
}