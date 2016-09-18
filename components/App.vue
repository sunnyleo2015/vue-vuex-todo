<template>
  <div id="app">
    <todo></todo>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import NotesList from './NotesList.vue'
import Editor from './Editor.vue'
import Todo from './todo.vue'

export default {
  components: {
    Toolbar,
    NotesList,
    Editor,
    Todo
  }
}
</script>
