import { setCurrentDialogId } from './../../../redux/reducers/messagesReducer';
import { default as Dialogs} from './DialogsSearch'
import { connect } from 'react-redux'
import store from '../../../redux/store'
import { getDialogs } from '../../../redux/reducers/dialogsReducer'
import { fetchDialogs } from '../../../redux/selectors'

let mapStateToProps = (state:any) => ({
    dialogs_items: fetchDialogs(state)
})

export default connect(mapStateToProps, {getDialogs, setCurrentDialogId})(Dialogs)