<template>
    <div id="todo-input">
       <input type="text" placeholder="please input todo"
              @keyup.enter = "addTodo"
       />
    </div>
</template>
<style>

</style>
<script>
    import { addTodo } from '../vuex/actions'
    export default{
        vuex: {
            actions: {
                addTodo
            }
        }
    }
</script>
