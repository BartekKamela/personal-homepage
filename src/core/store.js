import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "../common/themeSlice";
import personalHomePageReducer from "../features/personalHomepage/personalHomepageSlice";
import rootSaga from "../core/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
        personalHomepage: personalHomePageReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),

});

sagaMiddleware.run(rootSaga);

export default store;