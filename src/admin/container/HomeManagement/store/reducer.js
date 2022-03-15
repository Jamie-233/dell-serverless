import { produce } from 'immer';
import { parseJsonByString } from '../../../../common/utils';
import { CHANGE_SCHEMA } from './constant';

const initialSchema = parseJsonByString(window.localStorage.schema, {
    name: 'Page',
    attributes: {},
    children: []
});

const defaultState = {
    schema: initialSchema
};

const reducer = (state = defaultState, action) => produce(state, (draft) => {
    switch(action.type) {
        case CHANGE_SCHEMA:
            draft.schema = action.value;
            break;
        default:
            break;
    }
});

export default reducer;