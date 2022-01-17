<template>
    <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                    <img class="h-8 w-auto" src="http://siglacontabilidade.com.br/public/assets/siglalogo.png" alt="" />
                    </div>
                    <div class="-mr-2">
                        <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="sr-only">Close main menu</span>
                            <XIcon class="h-6 w-6" aria-hidden="true" />
                        </PopoverButton>
                    </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <!-- <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                    Log in
                </a> -->
            </div>
        </PopoverPanel>
    </transition>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
    { name: 'Produtos', href: '/product' },
    { name: 'Política de Privacidade', href: '/policies' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contact' },
]

export default {
    name: 'Header',
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        MenuIcon,
        XIcon
    },
    setup() {
        return {
        navigation,
        }
    },
}
</script>

<style>

</style>
