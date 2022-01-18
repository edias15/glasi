<template>
<div class="relative" data-theme="light">
    <Navbar />
    <Hero />
    <Footer />
</div>
</template>

<script>
import Navbar from './Navbar.vue'
import Policy from './Policy.vue'
import About from './About.vue'
import Footer from './Footer.vue'
import Hero from './Hero.vue'

export default {
    name: 'Home',
    components: {
        Navbar,
        About,
        Policy,
        Footer,
        Hero,
    },
}
</script>
