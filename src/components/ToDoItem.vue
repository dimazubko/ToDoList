<template>
    <li>
        <!-- <input type="checkbox" v-bind:checked="item.completed" v-on:change="changeValue"> -->
        <!-- <input v-bind:id="index" type="checkbox" v-model="item.completed" v-on:change="changeValue"> -->

<label class="container">
  <input v-bind:id="index" type="checkbox" v-model="item.completed" v-on:change="changeValue">
  <span class="checkmark"></span>
</label>
                 
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
                // this.item.completed = !this.item.completed;
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

    /*input
    {
        margin: 0;   
        width: 44px;
        height: 44px;     
    }*/

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

    /* Customize the label (the container) */
    .container
    {
        display: block;
        position: relative;
        width: 44px;
        height: 44px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input
    {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark
    {
        position: absolute;
        top: 0;
        left: 0;
        height: 44px;
        width: 44px;
        background-color: #eee;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark
    {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark
    {
        background-color: #2196F3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after
    {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after
    {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after
    {
        left: 14px;
        top: 3px;
        width: 12px;
        height: 24px;
        border: solid white;
        border-width: 0 6px 6px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
</style>

