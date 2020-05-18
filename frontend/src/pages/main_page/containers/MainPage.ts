import { getMe } from './../../../redux/reducers/userReducer';
import { AppState } from './../../../redux/store';
import MainPage from '../components/MainPage'
import { connect } from 'react-redux'
import { fetchUserData } from '../../../redux/selectors';

let mapStateToProps = (state: AppState) => ({
    user: fetchUserData(state)
})

export default connect(mapStateToProps, {getMe})(MainPage)