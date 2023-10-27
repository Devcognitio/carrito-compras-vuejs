<template>
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
                            <div class="img-center">
                                <v-img max-width="25" max-height="25" aspect-ratio="1" :src="item.logo"
                                    class="img-center"></v-img>
                            </div>

                        </td>
                        <td class="text-center"> {{ item.make }} </td>
                        <td class="text-center"> {{ item.name }} </td>
                        <td class="text-center">$ {{ item.price }} </td>
                        <td class="text-center">
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
    </v-card>
</template>
  
<script lang="ts">

import { Item } from '@/types/Item';

export default {
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

    methods: {
        calculateTotalPrice(): number {
            return this.cartItems.reduce((total: number, item: Item) => total + parseInt(item.price), 0);
        },

        removeItem(index?: Number) {
            this.$emit('remove-item', index);
        },
    },
    mounted() { },
};
</script>

<style scoped>
.img-center {
    display: flex;
    justify-content: center;
}
</style>

  