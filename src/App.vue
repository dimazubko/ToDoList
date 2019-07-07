<template>
  <div id="app">
    <ToDoList msg="Список дел"/>     
  </div>
</template>

<script>
  import TodoList from './components/ToDoList.vue'

  export default
  {
    name: 'app',
    components:
    {
      ToDoList: TodoList // Регестрируем объект
    }    
  }
</script>

<style>
  #app
  {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    border-radius: 5%;
    width: 720px;
    margin: 30px auto;
    padding: 15px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
    background-color: rgb(255, 255, 255);   
  } 
</style>
