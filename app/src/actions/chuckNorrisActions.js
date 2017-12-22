import axios from 'axios'

// Achei que eu fosse precisar de todos esses states, mas acabei não precisando :/
export const CHUCK_NORRIS_JOKES_CATEGORIES = 'CHUCK_NORRIS_JOKES_CATEGORIES'
export const CHUCK_NORRIS_JOKES_CATEGORIES_SUCCESS = 'CHUCK_NORRIS_JOKES_CATEGORIES_SUCCESS'
export const CHUCK_NORRIS_JOKES_CATEGORIES_ERROR = 'CHUCK_NORRIS_JOKES_CATEGORIES_ERROR'

export const JOKE_CONTENT = 'JOKE_CONTENT'
export const JOKE_CONTENT_SUCCESS = 'JOKE_CONTENT_SUCCESS'
export const JOKE_CONTENT_ERROR = 'JOKE_CONTENT_ERROR'

export const getCategoriesJokesCategories = response => ({ type: CHUCK_NORRIS_JOKES_CATEGORIES })
const getCategoriesJokesCategoriesSuccess = response => ({ type: CHUCK_NORRIS_JOKES_CATEGORIES_SUCCESS, response })
const getCategoriesJokesCategoriesError = error => ({ type: CHUCK_NORRIS_JOKES_CATEGORIES_ERROR, error })

export const getCategoriesJokesCategoriesRequest = () => {
	const instance = axios.create({ "Content-Type": "application/json" })

	const request = instance.get('https://api.chucknorris.io/jokes/categories')

	return dispatch => {
		dispatch(getCategoriesJokesCategories())

		return request
			.then(response => dispatch(getCategoriesJokesCategoriesSuccess(response.data)))
			.catch(error => dispatch(getCategoriesJokesCategoriesError(error)))
	}
}

export const getJokeContentByCategory = response => ({ type: JOKE_CONTENT })
const getJokeContentByCategorySuccess = response => ({ type: JOKE_CONTENT_SUCCESS, response })
const getJokeContentByCategoryError = error => ({ type: JOKE_CONTENT_ERROR, error })

export const getContentByCategoryRequest = category => {
	const instance = axios.create({ "Content-Type": "application/json" })

	const request = instance.get(`https://api.chucknorris.io/jokes/random?category=${category}`)

	return dispatch => {
		dispatch(getJokeContentByCategory())

		return request
			.then(response => dispatch(getJokeContentByCategorySuccess(response.data)))
			.catch(error => dispatch(getJokeContentByCategoryError(error)))
	}
}

