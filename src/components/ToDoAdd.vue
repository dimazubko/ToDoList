<template>
    <div class="container">
        <div class="inputs">
            <input type="text" placeholder="Задача" v-model="newItem.task">
            <input type="text" placeholder="Время" v-model="newItem.time">
        </div>
        <button v-on:click="add_elem">Добавить</button>
    </div>
</template>

<script>
export default
{
    name: 'todoadd',
    props:
    {
        msg: { type: String, default: 'Нет сообщения' },
    },
    data() //      data: function() { return { field: '' } }      data: () => { return { field: '' } }
    {
        return {            
            newItem:            
            {                 
                task: '',
                time: '',
                completed: false    
            }
        };
    },
    methods:
    {
        add_elem()
        {
            if (this.newItem.task.trim()) // Возвращает строку с вырезанными пробельными символами с её концов
            {
                this.$emit('addElem', this.newItem);
                this.newItem.task = this.newItem.time = '';
            }
            else alert("Введите задачу!");
        }
    }    
}
</script>

<style scoped>
    input
    {
        font-size: 16px;
        padding: 12px 20px;    
        width: 306px;        
        border: 1px solid rgb(40, 167, 69); 
        border-radius: 6px;
    }

    button
    {     
        margin-left: 4px;
        cursor: pointer;
        padding: 6px 12px;
        font-size: 16px;
        background-color: rgba(0, 0, 0, 0);   
        border: 1px solid rgb(40, 167, 69);  
        border-radius: 6px;    
        color: rgb(40, 167, 69);
        width: 120px;
        height: 96px;
        transition-duration: 0.15s, 0.15s;
        transition-property: color, background-color;
        transition-timing-function: ease-in-out, ease-in-out;
    }

    button:hover
    {
        background-color: rgb(40, 167, 69); 
        color: rgb(255, 255, 255);
    }

    div.container
    {
        display: flex;
        width: 472px;
        height: 96px;
        margin: 0 auto 15px;
    }

    div.inputs
    {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        width: 348px;
        height: 96px;
    }
</style>


