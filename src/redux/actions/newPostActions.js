import actionTypes from '../actionTypes';

export default {
    setNewTitle: (title) => ({
        type: actionTypes.SET_NEW_TITLE,
        title,
    }),
    setNewContent: (content) => ({
        type: actionTypes.SET_NEW_CONTENT,
        content,
    }),
    setNewId: (id) => ({
        type: actionTypes.SET_NEW_ID,
        id,
    }),
    resetNew: () => ({
        type: actionTypes.RESET_NEW,
    }),
};