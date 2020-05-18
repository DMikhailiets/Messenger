import { sendMessage } from './../../../redux/reducers/messagesReducer';
import DialogsPage from '../components/DialogsPage'
import { connect } from 'react-redux'
import { AppState } from '../../../redux/store'
import { fetchDialogs, fetchUserData, fetchMessages, fetchDialogId } from '../../../redux/selectors'
import { getDialogs } from '../../../redux/reducers/dialogsReducer'
import { getMessages } from '../../../redux/reducers/messagesReducer'

let mapStateToProps = (state: AppState) => ({
    dialogs: fetchDialogs(state),
    user: fetchUserData(state),
    messages: fetchMessages(state),
    dialogId: fetchDialogId(state),
})

export default connect(mapStateToProps, {getDialogs, getMessages, sendMessage})(DialogsPage)
