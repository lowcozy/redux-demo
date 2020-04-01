import { INSC_COUNTER, DESC_COUNTER } from "../actions/types";
import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";


export function* sayHello() {
	console.log('hello saga');
}

export function* watchIncrement() {
	yield takeEvery(INSC_COUNTER, () => {
		console.log('this is increament saga');
	})
}


export function* watchDescrement() {
	yield takeEvery(DESC_COUNTER, () => {
		console.log('this is descreament saga');
	})
}

