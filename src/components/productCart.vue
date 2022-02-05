<script lang="ts">
import { defineComponent, PropType } from "vue";
import { propsProdcut } from "../interfaces";
import { productStore } from "../store/productStore";

export default defineComponent({
  name: "ProductCart",

  props: {
    product: {
      type: Object as PropType<propsProdcut>,
      required: true,
    },
  },
  setup() {
    const store = productStore();

    return { store };
  },
});
</script>

<template>
  <div class="container wrapperCards mt-4 mb-4">
    <div>
      <img :src="product.imageUrl" alt="image" class="imgProd" />
    </div>
    <div>
      <div class="mainContent">
        <span class="topInfos">
          <span>Camiseta</span>

          <!-- <span class="mt-3">{{ product.description.slice(0, 9) }}...</span> -->
        </span>
        <span class="qtdy"
          ><button @click="store.takeOutProduct(product)">-</button>Qtdy:
          {{ product.qtdy
          }}<button @click="store.addProduct(product)">+</button></span
        >
      </div>
    </div>
    <div>
      <div class="mainContent">
        <span>RS {{ product.price * product.qtdy }}</span
        ><span @click="store.removeProduct(product)" class="remove"
          >Remover</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapperCards {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  align-items: center;
  color: var(--color-four);
  font-size: 16px;
  font-weight: 600;
  border-top: 1px solid;
  border-bottom: 1px solid;
  padding: 10px;

  .imgProd {
    width: 55%;
    height: 80%;
  }

  .mainContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    gap: 3rem;

    .topInfos {
      display: flex;
      flex-direction: column;
    }

    .qtdy {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      button {
        background: none;
        border: 0;
        color: var(--color-four);

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .remove {
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        opacity: 0.8;
        transition: all 0.2s ease-in-out;
      }
    }
  }
}
</style>
