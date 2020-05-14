import { fetchUserData } from './../../../redux/selectors/userInfoSelector'
import { AppState } from './../../../redux/store'
import { connect } from 'react-redux'
import { default as LoginFormContainer } from './LoginForm'
import { authUser, getMe } from '../../../redux/reducers/userReducer'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
// const MapStateToProps = (state: AppState) => ({
//   userData: fetchUserData(state)
// })

// export default connect(MapStateToProps, {authUser}) (LoginFormContainer);


const MapStateToProps = (state: AppState) => ({
  userData: fetchUserData(state)
})

export default compose<any>(
  reduxForm({form: 'RegisterForm'}),
  connect(MapStateToProps, {authUser, getMe})
  ) (LoginFormContainer)


