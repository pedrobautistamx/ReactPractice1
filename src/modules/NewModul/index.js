import * as Utils from 'Assets/Utils'

import ClientHttpRequest from "Api/ClientHttpRequest"
import Immutable from 'immutable'
import { createModal } from 'Modules/Modal'
import {isLoading} from "Modules/Loading"

const initialState = Immutable.Map({}).set('Get', new Immutable.Map({}))

/* Types */


export const ACTION_GET_CONTENEDOR= 'ACTION_GET_CONTENEDOR'

/* Reducer */
export default (state = initialState, action) => {

    switch (action.type) {

		case ACTION_GET_CONTENEDOR:
			return state.set('Get', new Immutable.Map(action.Obj))
		default:
			return state;
    }
}

/* Action Creators */

export const getContenedor = (form) => {

	return (dispatch) => {

		dispatch(isLoading(true))

		return new ClientHttpRequest({
			service: 'api/service1',
			method: "POST",
			data: { ...form },
			headers: Object.assign({"Authorization": sessionStorage.access_token, "uid": sessionStorage.uid})
		}).request().then(response => {
			dispatch(isLoading(false))
			dispatch({ type: ACTION_GET_CONTENEDOR, Obj: response.data })
			return response.data
		}).catch(error => {
			dispatch(isLoading(false))
			dispatch(createModal(Utils.errorMessage(Utils.getMessageResponse(error.response.data))))
			throw error
		})
	}
}

export const clearContenedor = () => {
	return (dispatch) => {
		dispatch({ type: ACTION_GET_CONTENEDOR, Obj: {} })
	}
}
