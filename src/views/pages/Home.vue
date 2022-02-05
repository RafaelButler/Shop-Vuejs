<script lang="ts">
import { defineComponent } from "vue";
import { useToast, POSITION } from "vue-toastification";

import ProductCard from "../../components/ProductCard.vue";
import { Products, propsProdcut } from "../../interfaces";
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

  methods: {
    add(product: propsProdcut) {
      this.store.addProduct(product);
      this.toast.success("Produto adicionado ao carrinho", {
        position: POSITION.TOP_RIGHT,
        icon: "fas fa-check",
        timeout: 7500,
        hideProgressBar: true,
      });
    },
  },

  setup() {
    const store = productStore();
    const toast = useToast();

    return { store, toast };
  },
});
</script>

<template>
  <div class="row"><h1>Camisetas</h1></div>

  <div class="container mt-4">
    <div class="wrapperCards">
      <div v-for="(product, index) in products" :key="index">
        <ProductCard @click="add(product)" :product="product" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  padding: 30px;

  @media (min-width: 700px) {
    padding: 0px;
  }

  @media (min-width: 1008px) {
    padding: 0px;
  }

  .wrapperCards {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2rem;
    text-align: center;
    justify-content: center;
    justify-items: center;

    @media (min-width: 700px) {
      grid-template-columns: 50% 50%;
      gap: 1rem;
    }

    @media (min-width: 1008px) {
      grid-template-columns: 33% 33% 33%;
      gap: 1rem;
    }
  }
}
</style>
