<script lang="ts">
import { defineComponent, PropType } from "vue";
import { propsProdcut } from "../interfaces";

export default defineComponent({
  name: "ProductCard",

  props: {
    product: {
      type: Object as PropType<propsProdcut>,
      required: true,
    },
  },
});

</script>

<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="product.imageUrl"
          class="img-fluid rounded-start"
          alt="camisa"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title main-text">{{ product.title }}</h5>
          <p class="card-text desc">{{ product.description }}</p>
          <p class="card-text">
            <p class="main-text">R$ {{ product.price }}</p>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.card{

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }
  .card-body{
    padding: 0rem 1.5rem;
    .main-text{
      font-size: 18px;
      color: var(--color-main);
      font-weight: bold;
      margin-top: 20px;
      text-align: left;
    }
    .desc{
      font-size: 14px;
      text-align: left;
    }
  }

}
</style>