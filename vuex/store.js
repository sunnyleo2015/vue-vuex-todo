import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  notes: [],
  activeNote: {},
  todos: [{
    info: 'eatting0',
    done: false,
    delete: false,
    show: true
  },{
    info: 'eatting1',
    done: false,
    delete: false,
    show: true
  },{
    info: 'eatting2',
    done: false,
    delete: false,
    show: true
  },{
    info: 'eatting3',
    done: false,
    delete: false,
    show: true
  }
  ],
};

const mutations = {
  ADD_NOTE(state){
    const newNote = {
      text: 'New note',
      favorite: false
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  
  EDIT_NOTE(state,text){
    state.activeNote.text = text;
  },
  
  DELETE_NOTE(state){
    state.notes.$remove(state.activeNote);
    state.activeNote = state.notes[0];
  },

  TOGGLE_FAVORITE(state){
    state.activeNote.favorite = !state.activeNote.favorite;
  },

  SET_ACTIVE_NOTE(state, note){
    state.activeNote = note;
  },
  //todo
  ADD_TODO(state, info){
    const newTodo = {
      info: info.target.value,
      done: false,
      delete: false,
      show: true
    };
    state.todos.push(newTodo);
    info.target.value='';
  },
  DELETE_TODO(state, index){
    state.todos[index].delete = true;
    console.log(state.todos[index].delete);
  },
  DONE_TODO(state, index){
    state.todos[index].done = !state.todos[index].done;
    console.log(state.todos[index].done);
  },
  SHOW_ALL_TODO(state){
    for(let i=0; i<state.todos.length; i++){
      state.todos[i].show = true;
    }
  },
  SHOW_DONE_TODO(state){
    for(let i=0; i <state.todos.length; i++){
      if(state.todos[i].done === true){
        state.todos[i].show = true;
      }else{
        state.todos[i].show = false;
      }
    }
    
  },
  SHOW_ACTIVE_TODO(state){
    for(let i=0; i<state.todos.length; i++){
      if(state.todos[i].done !== true){
        state.todos[i].show = true;
      }else{
        state.todos[i].show = false;
      }
    }
  }
  
};

export default new Vuex.Store({
  state,
  mutations
});