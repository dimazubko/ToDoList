<template>
    <li>
        <input v-bind:id="index" type="checkbox" v-model="item.completed" v-on:change="changeValue">
                 
        <p v-bind:class="{done: item.completed}">
            <strong>Задача {{ index + 1 }}:</strong> {{ item.task }}
            <br>           
            <strong> Время:</strong> {{ item.time.length ? item.time : 'Не указано' }}     
        </p>                                
       
        <button v-on:click="$emit('removeElem', item)">Удалить</button>
    </li>
</template>

<script>
    export default
    {
        name: 'todoitem',      
        props: 
        {
            item: { type: Object, required: true },
            index: { type: Number, required: true }
        },
        methods:
        {
            changeValue()
            {
                let chbox = document.getElementById(this.index); // Костыль, но без него пропалала галочка с checkbox'a
                chbox.checked = chbox.checked ? false : true;
                this.$emit('saveElem');                
            }
        }
    }
</script>

<style scoped>
    li
    {
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin-bottom: 1rem;
    }

    input
    {
        margin: 0;   
        width: 44px;
        height: 44px;     
    }

    p 
    {
        padding: 0 12px;
        margin: 0;
        width: 550px;
        text-align: justify;
        line-height: 22px;
        word-break: break-all;
    }

    button
    {
        cursor: pointer;
        padding: 6px 12px;
        font-size: 16px;
        background-color: rgba(0, 0, 0, 0);   
        border: 1px solid rgb(232, 17, 35);
        border-radius: 6px;        
        color: rgb(232, 17, 35);
        width: 100px;
        height: 44px;
        transition-duration: 0.15s, 0.15s;
        transition-property: color, background-color;
        transition-timing-function: ease-in-out, ease-in-out;    
    }

    button:hover
    {
        background-color: rgb(232, 17, 35);
        color: rgb(255, 255, 255);
    }    

    .done
    {
        text-decoration: line-through;
    }
</style>

