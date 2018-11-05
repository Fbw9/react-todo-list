import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAH8O0Iw9bfE3c6KpXux7lA6OBm_f0BT4c",
    authDomain: "todo-list-react-ryan.firebaseapp.com",
    databaseURL: "https://todo-list-react-ryan.firebaseio.com",
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base