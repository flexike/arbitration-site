import axios from 'axios';
import { REACT_APP_API_URL } from '../constants';

export const user_login = async (data) => {
    const { response } = await axios.post(`${REACT_APP_API_URL}/login`, data);
    return response;
};
