import { RegisterForm as RegisterFormComponent } from '../components/RegisterForm'
import {  withFormik } from 'formik';

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      email: "",
      fullname: "",
      password: "",
    }),
    validate: values => {
      let errors = {};
     
      return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
    displayName: "RegisterForm"
  })(RegisterFormComponent);


