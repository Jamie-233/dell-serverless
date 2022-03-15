import { createStore, combineReducers } from 'redux';
import HomeManageReducer from './container/HomeManagement/store/reducer';

const reducer = combineReducers({
    homeManageMent: HomeManageReducer
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// {
//     homeManageMent: {
//         schema: {
//             name: 'Page',
//             attributes: {},
//             children: []
//         } 
//     }
// }