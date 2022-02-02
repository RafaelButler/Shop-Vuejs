<script>
import ProductCard from "../../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>

<template>
  Hello Home Component
  <router-link to="/about">Go to about page</router-link>

  <div class="container mt-4">
    <div class="wrapperCards">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
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
    gap: 3rem;
  }

  @media (min-width: 700px) {
    grid-template-columns: 33% 33% 33%;
  }
}
</style>
