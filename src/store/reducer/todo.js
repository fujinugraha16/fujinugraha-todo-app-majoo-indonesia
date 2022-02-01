// action types
import {
  SET_TODO_DOCS,
  ADD_TODO_DOC,
  UPDATE_TODO_DOC,
  REMOVE_TODO_DOC,
} from "../../constants/action-types";

// helpers
import updateObject from "../../helpers/update-object";

const initialState = {
  docs: [],
};

const reducer = (state = initialState, action) => {
  let updatedDocs = [];

  switch (action.type) {
    case SET_TODO_DOCS:
      return updateObject(state, { docs: action.todoDocs });
    case ADD_TODO_DOC:
      return updateObject(state, { docs: [...state.docs, action.todoDoc] });
    case UPDATE_TODO_DOC:
      const { id, title, description } = action.todoDoc;

      updatedDocs = state.docs.map((doc) => {
        if (doc.id === id) {
          doc.title = title;
          doc.description = description;
        }

        return doc;
      });

      return updateObject(state, { docs: updatedDocs });
    case REMOVE_TODO_DOC:
      updatedDocs = state.docs.filter((doc) => doc.id === action.id);

      return updateObject(state, { docs: updatedDocs });
    default:
      return state;
  }
};

export default reducer;
