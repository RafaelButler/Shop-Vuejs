<script lang="ts">
import { defineComponent, PropType } from "vue";

interface propsProdcut {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

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
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
