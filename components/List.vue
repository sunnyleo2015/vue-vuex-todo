<template>
    <div id="todo-list">
       <div v-for="todo in todos" v-if="!todo.delete && todo.show">
           <span>{{todo.info}}</span>
           <input type="checkbox" @click="doneTodo($index)" :checked="todo.done"/>
           <button @click="deleteTodo($index)">X</button>{{$index}}
       </div>
    </div>
</template>
<style>

</style>
<script>
    import { deleteTodo,doneTodo } from '../vuex/actions'
    export default{
        vuex:
        {
            getters: {
                todos: state => state.todos
            },
            actions: {
                deleteTodo,
                doneTodo
            }
        }
    }
</script>
