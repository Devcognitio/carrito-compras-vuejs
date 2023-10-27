<template>
  <v-app>
    <NavBarComponent :cartItemsCount="cartItemsCount" :cartItems="cartItems" @remove-item="removeCartItem" />
    <SearchCarComponent @cart-item-count-updated="updateCartItemsCount" @item-added-to-cart="updateCartItems"/>
  </v-app>


</template>
  
<script lang="ts">
import NavBarComponent from '@/components/NavBarComponent.vue';
import SearchCarComponent from '@/components/SearchCarComponent.vue';
import { Item } from './types/Item';

export default {
  components: {
    NavBarComponent,
    SearchCarComponent
  },
  data() {
    return {
      cartItemsCount: 0,
      cartItems: [],
    }
  },
  methods: {

    updateCartItemsCount(count: number) {
      this.cartItemsCount = count;
      this.$emit('cart-item-Counter', count)
    },

    updateCartItems(items: Item) {
      this.cartItems = items;
    },

    removeCartItem(index: number) {
      this.cartItems.splice(index, 1);
      this.cartItemsCount = this.cartItems.length;
    },
  },
};
</script>