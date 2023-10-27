<template>

<v-card min-width="500">
                    <v-container>
                        <v-card-title>Summary</v-card-title>
                        <v-table>
                            <thead>
                                <tr>
                                    <th>Logo</th>
                                    <th>Make</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td>$ {{ calculateTotalPrice() }} </td>
                            </tr>
                        </v-table>

                    </v-container>
                </v-card>

</template>
  
<script lang="ts">
export default {
    props: {
        cartItems: {
            type: Array,
            default: () => [],
        },
        cartItemsCount: {
            type: Number,
            required: true,
        },
    },

    mounted() {},
};
</script>
  