import axios from 'axios'
export default {

    async getLastUserName() {
        let users = await axios.get('http://jsonplaceholder.typicode.com/users')
        return users.data[0].name
    },
    async getLastUserName() {
        let users = await fetch('http://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
        return users[0].name
    }
}