export const addNote = ({dispatch}) => {
  dispatch('ADD_NOTE');
};

export const editNote = ({dispatch},e) => {
  dispatch('EDIT_NOTE', e.target.value);
};

export const deleteNote = ({dispatch}) => {
  dispatch('DELETE_NOTE');
};

export const toggleFavorite = ({dispatch}) => {
  dispatch('TOGGLE_FAVORITE');
};

export const setActiveNote = ({dispatch}, note) => {
  dispatch('SET_ACTIVE_NOTE');
};
//todo
export const addTodo = ({dispatch}, e) => {
  dispatch('ADD_TODO', e);
};
export const deleteTodo = ({dispatch},index) => {
  dispatch('DELETE_TODO', index);
};
export const doneTodo = ({dispatch}, index) => {
  dispatch('DONE_TODO', index);
};
export const showAllTodo = ({dispatch}) => {
  dispatch('SHOW_ALL_TODO');
};
export const showDoneTodo = ({dispatch}) => {
  dispatch('SHOW_DONE_TODO');
};
export const showActiveTodo = ({dispatch}) => {
  dispatch('SHOW_ACTIVE_TODO');
};