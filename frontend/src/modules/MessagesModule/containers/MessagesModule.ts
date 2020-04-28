import { getMessages } from '../../../redux/reducers/messagesReducer';
import { fetchMessages, fetchDialogId } from '../../../redux/selectors'
import  MessagesComponent  from '../components/MessagesModule'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux';


let mapStateToProps = (state:any) => ({
    messages: fetchMessages(state),
    dialogId: fetchDialogId(state)
})

export default compose(
                connect(mapStateToProps,{ getMessages })
               )(MessagesComponent)



