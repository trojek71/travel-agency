/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const addTag = payload => ({ payload, type: ADD_TAG });
export const removeTag = payload => ({ payload, type: ADD_TAG });

// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
      // TODO - handle other action types
    case CHANGE_DURATION:
      const duration = { ...statePart.duration };
      duration[action.payload.type] = parseInt(action.payload.value);
      return {
        ...statePart,
        duration,
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG:
      const tags = [...statePart.tags];
      const tagToRemove = tags.indexOf(action.payload);
      tags.splice(tagToRemove, 1);

      return {
        ...statePart,
        tags,
      };
    default:
      return statePart;
  }
}
