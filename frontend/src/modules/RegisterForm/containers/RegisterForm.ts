import { RegisterForm as RegisterFormComponent } from '../components/RegisterForm'
import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';
import { registrationUser } from '../../../redux/reducers/registerReducer'

const MapStateToProps = (state: AppState) => {

}
export default connect (MapStateToProps, {registrationUser}) (RegisterFormComponent);


