import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from "./personalHomepageSlice";
import { getRepositories } from "./personalHomepageAPI";

const loadingDelay = 2_000;

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(loadingDelay); //just to demo the loading
        const repositories = yield call(getRepositories, "BartekKamela");
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
      yield put(fetchRepositoriesError());
    }
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}