<template>
    <h1>Sobre</h1>
</template>

<script>
import Header from './Header.vue'
import Policies from './Policies.vue'
import About from './About.vue'

const navigation = [
    { name: 'Produtos', href: '/product' },
    { name: 'Quem somos', href: '/' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contact' },
]

export default {
    name: 'About',
}
</script>

<style>

</style>
