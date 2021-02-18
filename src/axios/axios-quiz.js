import axios from 'axios';

export default axios.create ({
    baseURL: 'https://react-quiz-a99c2-default-rtdb.firebaseio.com/'
})