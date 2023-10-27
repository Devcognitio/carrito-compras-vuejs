<template>
    <v-app>
        <v-sheet class="d-flex align-center justify-center flex-wrap mx-auto px-4 my-12" :elevation="2" :width="1000" border
            color="#f2f2f2" rounded>
            <v-spacer></v-spacer>
            <v-container v-model="allCars" class="my-container">
                <v-row>
                    <v-col v-for="(car, index) in carData.cars" :key="index" cols="12">
                        <v-row>
                            <v-col v-for="(value, valueIndex) in car.values" :key="valueIndex" cols="12" md="4">
                                <Card :images="value.url_image" :make="car.make" :logo="car.logo" :name="value.name" :stars="value.stars"
                                    :price="value.price" :country="value.country" :year="value.year"
                                    :max_speed="value.max_speed" :hp="value.hp" :hybrid="value.hybrid" :color="value.color"
                                    @add-to-cart="addItemToCart">
                                </Card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-app>
</template>
  
<script lang="ts">

import Card from '@/components/Card.vue';
import { Item } from '@/types/Item';
import { CarData } from '@/types/Car';

export default {

    data() {
        return {
            carData: {} as CarData,
            queryCar: '',
            cartItems: [] as Array<Item> 
        };
    },

    components: {
        Card
    },

    methods: {
        async allCars() {
            try {
                const carToFind = await fetch('src/db/db.json');
                const car: CarData = await carToFind.json();
                this.carData = car;
                console.log(car);
            } catch (error) {
                console.error('Error searching for cars:', error);
                alert('cars were not found');
            }
        },

        addItemToCart(item: Item) {
            this.cartItems.push(item);
            console.log("Elementos", item);
            console.log(this.cartItems.length);
            this.$emit('cart-item-count-updated', this.cartItems.length);
            this.$emit('item-added-to-cart', this.cartItems);
        }

    },

    created() {
        this.allCars();
    },
};
</script>