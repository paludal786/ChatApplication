<template>
    <div class="container">
        <li class="list-group-item"><slot></slot></li>
        <small class="badge float-right">name</small>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
