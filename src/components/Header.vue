<script lang="ts">
import { defineComponent } from "vue";
import { productStore } from "../store/productStore";
import ProductCart from "./productCart.vue";

export default defineComponent({
  data: () => {
    return {
      menuActive: false as boolean,
    };
  },
  methods: {
    openMenu(): void {
      this.menuActive = true;
    },
    closeMenu(): void {
      this.menuActive = false;
    },
  },
  components: { ProductCart },

  setup() {
    const store = productStore();

    return { store };
  },
});
</script>

<template>
  <div class="wrapper" :class="{ op: menuActive }">
    <div class="container">
      <i class="fas fa-bars icone" @click="openMenu()"></i>
    </div>
  </div>
  <div class="overlay" v-if="menuActive">
    <div class="headerMenu">
      <span class="title">Menu</span>
      <span class="closeButton" @click="closeMenu()">X</span>
    </div>

    <div v-for="(product, index) in store.arrayProductsSizeFive" :key="index">
      <ProductCart :product="product" />
    </div>

    <div class="row text-center">
      <router-link to="/checkout">
        <span
          v-if="store.products.length >= 4"
          class="showMore"
          @click="closeMenu()"
          >Mostrar todos do carrinho ?
        </span>
      </router-link>
      <span v-if="store.products.length == 0" class="showMore">Vazio</span>
    </div>

    <div class="container containerCheckout">
      <div class="col-md-12 text-center">
        <router-link to="/checkout">
          <button
            type="button"
            class="btn btn-light checkout"
            :disabled="store.products.length == 0"
            @click="closeMenu()"
          >
            Checkout
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 70px;
  background-color: var(--color-main);
  box-shadow: 0px 0px 3px 0px var(--color-five);
  display: flex;
  align-items: center;

  .icone {
    color: var(--color-four);
    cursor: pointer;
    font-size: 18px;
    margin-left: 1rem; // Esta propriedade será removida em telas grandes

    &:hover {
      transition: all 0.2s;
      opacity: 0.8;
    }

    @media (min-width: 700px) {
      margin-left: 0;
    }
  }
}

.containerCheckout {
  position: absolute;
  bottom: 20px;
  .checkout {
    background: var(--color-four);
    padding: 0.5rem 9rem;
  }
}

.op {
  opacity: 0.9;
}

// Mobile menu
.overlay {
  background-color: var(--color-main);
  box-shadow: 0px 0px 3px 0px var(--color-five);
  border-radius: 0px 10px 6px 0px;
  position: fixed;
  width: 90%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  // overflow-y: scroll;

  @media (min-width: 700px) {
    width: 50%;
  }

  @media (min-width: 1008px) {
    width: 25%;
  }

  .headerMenu {
    display: flex;
    justify-content: space-between;
    padding: 20px 25px;
    color: var(--color-four);

    .closeButton {
      cursor: pointer;
      font-size: 18px;

      &:hover {
        transition: all 0.2s;
        opacity: 0.8;
      }
    }

    .title {
      font-size: 18px;
    }
  }
}

// Mostrar mais items clicando
.showMore {
  color: var(--color-four);
  text-decoration: underline;
  cursor: pointer;
}
</style>
