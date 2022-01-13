import { configureStore } from '@reduxjs/toolkit';
import peoplesReducer from '../container/PeopleSlice';

const reducer = {
    peoples: peoplesReducer
}

export default configureStore({
    reducer
});