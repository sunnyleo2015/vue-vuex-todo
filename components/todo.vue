<template>
    <div id="todo">
       <todo-input></todo-input>
       <todo-list></todo-List>
       <todo-button></todo-button>
    </div>
</template>
<style>

</style>
<script>
    import TodoInput from './Input.vue';
    import TodoList from './List.vue';
    import TodoButton from './button.vue'
    export default{
        components:{
            TodoInput,
            TodoList,
            TodoButton
        }
    }
</script>
