<template>
<Navbar />
<div class="hero min-h-screen bg-base-200">
    <div class="flex-col hero-content lg:flex-row-reverse">
        <img src="https://picsum.photos/id/1005/600/600" class="max-w-sm rounded-lg shadow-2xl">
        <div>
        <h1 class="mb-5 text-5xl font-bold">
                Sigla Contabilidade
            </h1>
        <p class="mb-5">
                A Sigla Contabilidade é uma empresa do Grupo Sigla, há mais de 18 anos servindo empresas.            </p>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    name: 'About',
    components: {
        Navbar,
    },
}
</script>
