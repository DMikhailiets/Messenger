import { LoginForm as LoginFormComponent } from '../components/LoginForm'
import { withFormik } from 'formik';

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      login: "",
      password: "",
    }),
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
    displayName: "RegisterForm"
  })(LoginFormComponent);


