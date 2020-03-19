function* fetchOrDeleteTemplate(actionTypes, api, action) {
    try {
        const result = yield call(api, action.id)
        yield put({
            type: actionTypes.success,
            data: result,
        })
    } catch (e) {
        yield put({ type: actionTypes.failure, e })
    }
}

function* postTemplate(actionTypes, api, action) {
    try {
        const result = yield call(api, action.body)
        yield put({
            type: actionTypes.success,
            data: result,
        })
    } catch (e) {
        yield put({ type: actionTypes.failure, e })
    }
}

function* putTemplate(actionTypes, api, action) {
    try {
        const result = yield call(api, action.id, action.body)
        yield put({
            type: actionTypes.success,
            data: result,
        })
    } catch (e) {
        yield put({ type: actionTypes.failure, e })
    }
}

function* withoutApiTemplate(actionTypes, action) {
    try {
        yield put({
            type: actionTypes.success,
            data: action.body,
        })
    } catch (e) {
        yield put({ type: actionTypes.failure, e })
    }
}

export {
    fetchOrDeleteTemplate,
    postTemplate,
    putTemplate,
    withoutApiTemplate,
}