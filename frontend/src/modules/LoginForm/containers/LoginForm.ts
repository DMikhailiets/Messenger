import { LoginForm as LoginFormComponent } from '../components/LoginForm'
import { withFormik } from 'formik';
import axios from '../../../core/axios'


export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      login: "",
      password: "",
    }),
    handleSubmit: (values, { setSubmitting }) => {
      return axios.post('user/login', values)
        .then(({data}) => {console.log(data)})
    },
    displayName: "RegisterForm"
  })(LoginFormComponent);


