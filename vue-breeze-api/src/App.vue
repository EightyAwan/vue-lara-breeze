<script setup> 
import Nav from './components/Nav.vue';
import Main from './components/Main.vue';
</script>

<template> 
    <main>
        <div class="isolate bg-white">
        <Nav /> 
        <RouterView />
        </div>
    </main>
</template>
 