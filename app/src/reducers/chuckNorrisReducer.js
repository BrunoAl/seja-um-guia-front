import {
  CHUCK_NORRIS_JOKES_CATEGORIES,
  CHUCK_NORRIS_JOKES_CATEGORIES_SUCCESS,
  CHUCK_NORRIS_JOKES_CATEGORIES_ERROR,
  JOKE_CONTENT,
  JOKE_CONTENT_SUCCESS,
  JOKE_CONTENT_ERROR
} from '../actions/chuckNorrisActions'

const CHUCK_NORRIS_STATE = {
  isGetingJokesCategories: false,
  getJokesCategoriesSuccess: null,
  getJokesCategoriesError: null,

  isGetingJokeContent: false,
  getJokeContentSuccess: null,
  getJokeContentError: null
}

export const chuckNorris = (state = CHUCK_NORRIS_STATE, actions) => {
  switch(actions.type) {
    case CHUCK_NORRIS_JOKES_CATEGORIES:
      return {
        ...state,
        isGetingJokesCategories: true,
        getJokesCategoriesSuccess: null,
        getJokesCategoriesError: null
      }
    
    case CHUCK_NORRIS_JOKES_CATEGORIES_SUCCESS:
      return {
        ...state,
        isGetingJokesCategories: false,
        getJokesCategoriesSuccess: actions.response,
        getJokesCategoriesError: null
      }

    case CHUCK_NORRIS_JOKES_CATEGORIES_ERROR:
      return {
        ...state,
        isGetingJokesCategories: false,
        getJokesCategoriesSuccess: null,
        getJokesCategoriesError: actions.error
      }

    
    
    case JOKE_CONTENT:
      return {
        ...state,
        isGetingJokeContent: true,
        getJokeContentSuccess: null,
        getJokeContentError: null
      }

    case JOKE_CONTENT_SUCCESS:
      return {
        ...state,
        isGetingJokeContent: false,
        getJokeContentSuccess: actions.response,
        getJokeContentError: null
      }

    case JOKE_CONTENT_ERROR:
      return {
        ...state,
        isGetingJokeContent: false,
        getJokeContentSuccess: null,
        getJokeContentError: actions.error
      }

    default:
      return {
        ...state
      }
		
	}
}