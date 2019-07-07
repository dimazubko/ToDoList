<template>
  <div>
    <img alt="To Do List" src="@/assets/todolist.png">
    <h1>{{ msg }}</h1>   

    <ToDoAdd v-on:addElem="addElement"/>

    <div class="selectnbutton">
      <select v-model="filter">
        <option value="all">Все</option>
        <option value="completed">Выполненные</option>
        <option value="not_completed">Не выполненные</option>
      </select>
      <button v-if="filteredList.length" v-on:click="clearList">Очистить список</button>
    </div>    

    <ul v-if="filteredList.length">
      <ToDoItem v-for="(item, index) in filteredList" v-bind:key="item.id" v-bind:item="item" v-bind:index="index" v-on:removeElem="removeElement" v-on:saveElem="saveElement"/>        
    </ul> 
    <p v-else>Список пуст!</p> 
  </div>   
</template>

<script>
  import TodoAdd from '@/components/ToDoAdd.vue'
  import TodoItem from '@/components/ToDoItem.vue'  

  export default
  {
    name: 'todolist',
    components:
    {
      ToDoAdd: TodoAdd, ToDoItem: TodoItem
    },
    props: // ['msg'],
    {      
      msg: { type: String, default: 'Нет сообщения' }
    },     
    data()
    {
      return { list: [], filter: 'all' };
    },
    mounted() // Хук, когда весь компонент уже подготовил html-шаблон и поместил его в DOM-дерево
    {
      if (localStorage.getItem('list')) // Если что-то есть (не пусто)
      {
        try
        {
          let obj = JSON.parse(localStorage.getItem('list')); // Получаем JSON-значение и преобразуем в объект.
          this.list  = Object.values(obj); // Преобразование в массив
        }
        catch(e)
        {
          localStorage.removeItem('list'); // Если что-то пошло не так, мы предполагаем, что данные повреждены и удаляем их.
        }
      }
    },
    computed:
    {       
      filteredList()
      {
        if (this.filter === 'all') return this.list;
        if (this.filter === 'completed') return this.list.filter(item => item.completed);
        if (this.filter === 'not_completed') return this.list.filter(item => !item.completed);
      }
    },
    methods:
    {
      addElement(newItem)
      {
        this.list.push({ ...newItem });           
        this.saveElement();
      },      
      removeElement(item)
      {        
        this.list.splice(this.list.indexOf(item), 1); // Находим индекс элемента и удаляем его
        this.saveElement();        
      },
      saveElement()
      {
        const PARSED = JSON.stringify(this.list);
        localStorage.setItem('list', PARSED);
      },
      clearList()
      {
        this.list = this.list.filter(item => this.filteredList.indexOf(item) < 0); // Оставляем только те элементы, которых нет в filteredList
        this.saveElement();
      },     
    }
  }
</script>

<style scoped> /* Cтили видны только внутри этого компонента */
  ul
  { 
    list-style: none;
    margin: 0;
    padding: 0;
  } 

  div.selectnbutton
  {
    width: 472px;
    height: 44px;
    display: inline-block;
    margin-bottom: 30px;   
  }

  select
  {
    width: 268px;  
    height: 44px;
    font-size: 16px;
    padding: 6px 12px;    
    border-radius: 6px; 
    border: 1px solid rgb(0, 123, 255);
  }

  button
  {
    margin-left: 4px;
    font-size: 16px;
    width: 200px;
    height: 44px;
    cursor: pointer;
    padding: 6px 12px;
    background-color: rgba(0, 0, 0, 0);   
    border: 1px solid rgb(0, 123, 255);
    border-radius: 6px;    
    color: rgb(0, 123, 255);
    transition-duration: 0.15s, 0.15s;
    transition-property: color, background-color;
    transition-timing-function: ease-in-out, ease-in-out;
  }

  button:hover
  {
    background-color: rgb(0, 123, 255);
    color: rgb(255, 255, 255);
  }

  p
  {
    margin: 0 0 16px 0;
  }
</style>
