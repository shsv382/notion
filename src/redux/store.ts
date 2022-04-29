// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './root-reducer';
// import logger from 'redux-logger';

// const store = createStore(rootReducer, applyMiddleware(logger));

// export default store;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';

const saveToLocalStorage = (state: any) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const persistedStore = loadFromLocalStorage();
const store = createStore(rootReducer, persistedStore, applyMiddleware(logger));

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch