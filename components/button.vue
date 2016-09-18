<template>
    <div id="todo-button">
       <button @click="showAllTodo">show all</button>
       <button @click="showDoneTodo">show done</button>
       <button @click="showActiveTodo">show active</button>
    </div>
</template>
<style>

</style>
<script>
    import { showAllTodo,showDoneTodo,showActiveTodo } from '../vuex/actions'
    export default{
        vuex: {
            actions: {
                showAllTodo,
                showDoneTodo,
                showActiveTodo
            }
        }
    }
</script>
