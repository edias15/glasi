<template>
<div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Popover>
            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div class="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                            <span class="sr-only">Workflow</span>
                                <img class="h-8 w-auto sm:h-10" src="http://siglacontabilidade.com.br/public/assets/siglalogo.png" />
                            </a>
                            <div class="-mr-2 flex items-center md:hidden">
                            <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Menu</span>
                                <MenuIcon class="h-6 w-6" aria-hidden="true" />
                            </PopoverButton>
                            </div>
                        </div>
                    </div>
                        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                            <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                            <!-- <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a> -->
                        </div>
                </nav>
            </div>
            <Header/>
        </Popover>

        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-bold text-black sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Sigla Contabilidade</span>
                {{ ' ' }}
                <span class="block text-4xl text-indigo-600 xl:inline">Compromisso e confiança</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Há 18 anos ajudando empresas a se firmarem no mercado. Cuidamos de área fiscal e contábil, para que você aproveite o seu tempo com o que é importante.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Contato
                </a>
                </div>
                <!-- <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                </a>
                </div> -->
            </div>
            </div>
        </main>
        </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="http://siglacontabilidade.com.br/public/assets/woman-planning.jpg" alt="" />
    </div>
</div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
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
components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    Header,
    About,
    Policies,
},
setup() {
    return {
    navigation,
    }
},
}
</script>
