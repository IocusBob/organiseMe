import axios from 'axios';
import { FETCH_USER, FETCH_TODOS} from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: res.data})
}

export const fetchTodos = () => async dispatch => {
    const res = await axios.get('https://gist.githubusercontent.com/delapuente/9001607/raw/67feae941c38046d0f043581cfe29862edef62fa/TODO%2520list%2520JSON%2520sample');
    dispatch({type: FETCH_TODOS, payload: res.data})
}