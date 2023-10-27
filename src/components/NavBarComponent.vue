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


                <v-card min-width="500">
                    <v-container>
                        <v-card-title>Summary</v-card-title>
                        <v-table hover>
                            <thead>
                                <tr>
                                    <th class="text-center">Logo</th>
                                    <th class="text-center">Make</th>
                                    <th class="text-center">Name</th>
                                    <th class="text-center">Price</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in cartItems" :key="index">
                                    <td>
                                        <v-img max-width="25" max-height="25" aspect-ratio="1" :src="item.logo"></v-img>
                                    </td>
                                    <td> {{ item.make }} </td>
                                    <td> {{ item.name }} </td>
                                    <td>$ {{ item.price }} </td>
                                    <td>
                                        <v-btn variant="text" @click="removeItem(index)">
                                            <v-icon>mdi-delete-outline</v-icon>
                                        </v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>

                    </v-container>

                    <v-divider v-if="cartItemsCount > 0" class="mx-4 mb-1"></v-divider>
                    
                    <v-card-item class="text-end"><span> Total: $ {{ calculateTotalPrice() }}</span></v-card-item>

                    <v-divider class="mx-4 mb-1"></v-divider>

                    <v-card-item>
                        <v-btn color="#ef5350" v-if="cartItemsCount > 0" block class="text-white">Pay Now</v-btn>
                    </v-card-item>

                </v-card>SSSS
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

        calculateTotalPrice(): number {
            return this.cartItems.reduce((total: number, item: any) => total + parseFloat(item.price), 0);
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