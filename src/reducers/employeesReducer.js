
import { FAILURE, SUCCESS, REQUEST } from './actionType.util';
import axios from 'axios';

const initialState = {
  employees: [],
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST('FETCH_EMPLOYEES'):
      return {
        loading: true,
        ...state
      }
    case SUCCESS('FETCH_EMPLOYEES'):
      return {
        loading: false,
        employees: action.payload.data
      }
    case FAILURE('FETCH_EMPLOYEES'):
      return {
        loading: false,
        ...state
      }
    default:
      return state
  }
}

const apiUrl = 'http://dummy.restapiexample.com/api/v1/';

export const fetchEmployees = () => ({
  type: 'FETCH_EMPLOYEES',
  payload: axios.get(`${apiUrl}employees`)
})

