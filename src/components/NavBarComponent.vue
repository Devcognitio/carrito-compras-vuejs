<template>
    <nav>
        <v-app-bar :elevation="2" color="black">
            <v-toolbar-title color="#fb8000">SuperCars Store</v-toolbar-title>
            <v-text-field color="#ffffff" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
            <v-menu v-model="menu" :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-heart" color="#ffffff"></v-btn>
                    <v-btn icon="mdi-cart" v-bind="props" color="#ffffff"></v-btn>
                    <v-badge :content="cartItemsCount" v-if="cartItemsCount > 0" stacked color="#ef5350"></v-badge>
                    <v-btn icon="mdi-dots-vertical" color="#ffffff"></v-btn>
                </template>
                <ShoppingCartComponent :cartItemsCount="cartItemsCount" :cartItems="cartItems" @remove-item="removeItem"></ShoppingCartComponent>
            </v-menu>
        </v-app-bar>
    </nav>
</template>

<script lang="ts">

import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue';
import { Item } from '@/types/Item';

export default {

    components: {
        ShoppingCartComponent,
    },

    props: {
        cartItemsCount: {
            type: Number,
            required: true,
        },
        cartItems: {
            type: Array as () => Item[],
            default: () => []
        },
    },

    data() {
        return {
            menu: false,
        };
    },

    methods: {
        toggleShoppingCartMenu() {
            this.menu = !this.menu;
        },

        removeItem(index?: Number) {
            this.$emit('remove-item', index);
        },

        emitProps() {
            this.$emit('pass-props', this.$props); // Emitir evento y pasar props
        },

    },
};

</script>