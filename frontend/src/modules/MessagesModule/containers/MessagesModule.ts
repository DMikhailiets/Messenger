import  MessagesComponent  from '../components/MessagesModule'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

export default compose<any>(
                withRouter,
               )(MessagesComponent)

