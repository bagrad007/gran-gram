import { SEARCH } from '../constants/actionType'

export default (state = [], action) => {
    switch (action.type) {
        case SEARCH:
            return

        default:
            return state;
    }
}