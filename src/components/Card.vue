<template>
    <v-card class="mx-auto my-8" elevation="2" max-width="380">
        <v-carousel height="180" hide-delimiters show-arrows="hover">
            <v-carousel-item v-for="(image, imageIndex) in images" :key="imageIndex" :src="image.url" cover>
            </v-carousel-item>
        </v-carousel>
        <v-card-item>
            <v-card-title :title="make"></v-card-title>
            <v-card-subtitle>
                <span class="me-1">{{ name }}</span>
            </v-card-subtitle>
        </v-card-item>
        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating :model-value="stars" color="#f4511e" density="compact" half-increments readonly size="small">
                </v-rating>
                <div class="text-grey ms-4">
                    {{ stars }} stars
                </div>
            </v-row>
            <div class="my-4 text-subtitle-1">
                $ {{ formattedPrice(price) }} • {{ country }}
            </div>
            <div>
                Year {{ year }} • max speed {{ max_speed }} km/h • Horse power {{ hp }} cv. •
                is a{{ hybrid ? 'n' : '' }} hybrid car • available color {{ color }}
            </div>
        </v-card-text>
        <v-divider class="mx-4 mb-1"></v-divider>
        <v-card-actions>
            <v-btn prepend-icon="mdi-plus" variant="elevated" @click="addToCart" block size="small" color="black">
                ADD TO CART
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script lang="ts">

import { Item } from '@/types/Item';
import { CarImage } from '@/types/Car';

export default {

    data() {
        return {
            counter: 0,
            cartItems: [],
        }
    },

    props: {
        images: {
            type: Array as () => CarImage[],
            required: true
        },

        logo: {
            type: String,
            required: false
        },

        make: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        stars: {
            type: Number,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        max_speed: {
            type: Number,
            required: true
        },
        hp: {
            type: Number,
            required: true
        },
        hybrid: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    },
    methods: {
        addToCart() {
            const item: Item = {
                logo: this.logo,
                name: this.name,
                make: this.make,
                price: this.price
            };
            this.$emit('add-to-cart', item);
        },

        formattedPrice(numero: string): string {
            const numeroConPuntos = numero.toLocaleString();
            return numeroConPuntos.replace(/,/g, '.');
        }
    }
};
</script>

  