<script lang="ts">
import { defineComponent } from "vue";

import ProductCard from "../../components/ProductCard.vue";
import { Products } from "../../interfaces";
import { productStore } from "../../store/productStore";

export default defineComponent({
  components: {
    ProductCard,
  },
  data: () => {
    return {
      products: [],
    } as Products;
  },
  mounted() {
    // Function to fetch all products to show in cards
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => (this.products = data));
  },

  setup() {
    const store = productStore();
    return { store };
  },
});
</script>

<template>
  <div class="row"><h1>Camisetas</h1></div>

  <div class="container mt-4">
    <div class="wrapperCards">
      <div v-for="(product, index) in products" :key="index">
        <ProductCard @click="store.addProduct(product)" :product="product" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrapperCards {
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  text-align: center;
  justify-content: center;
  justify-items: center;

  @media (min-width: 641px) {
    grid-template-columns: 50% 50%;
    gap: 1rem;
  }

  @media (min-width: 700px) {
    grid-template-columns: 33% 33% 33%;
    gap: 1rem;
  }
}
</style>
