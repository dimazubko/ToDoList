<template>
    <div>
        <table>
            <tr>
                <td><input type="text" placeholder="Задача" v-model="newItem.task"></td>
                <td rowspan="2" v-on:click="add_elem"><button>Добавить</button></td>
            </tr>

            <tr>
                <td><input type="text" placeholder="Время" v-model="newItem.time"></td>                  
            </tr>
        </table> 
        <hr>
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
        return { newItem: { task: '', time: '', completed: false } } 
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
        width: 300px;
        border: 1px solid rgb(40, 167, 69); 
        border-radius: 6px;
    }
    
    table
    {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-size: 16px;
    }

    button
    {     
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

    div 
    {
        margin-bottom: 30px;
    }
</style>


