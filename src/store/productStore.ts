import { defineStore } from "pinia";
import { ProductStoreState, propsProdcut } from "../interfaces";

export const productStore = defineStore("product", {
  state: () => {
    return {
      products: [],
      arraySize: 5,
    } as ProductStoreState;
  },

  actions: {
    // Add product to cart, if exist sum quatity
    addProduct(productInfos: propsProdcut) {
      const isIn = this.products.some(
        (product) => product.id === productInfos.id
      );

      if (!isIn) {
        productInfos.qtdy = 1;
        this.products.push(productInfos);
      } else {
        productInfos.qtdy += 1;
      }
    },
    incrementArraySize() {
      this.arraySize += 5;
    },

    // take Out Product of array
    takeOutProduct(productInfos: propsProdcut) {
      const isIn = this.products.some(
        (product) => product.id === productInfos.id
      );

      if (isIn) {
        if (productInfos.qtdy > 1) {
          productInfos.qtdy -= 1;
        } else {
          this.removeProduct(productInfos);
        }
      }
    },

    // Remove element from array
    removeProduct(productInfos: propsProdcut) {
      const index = this.products.indexOf(productInfos);
      this.products.splice(index, 1);
    },
  },

  getters: {
    // Bring array with set arraySize
    arrayProducts: (state) => state.products.slice(0, state.arraySize),
    // Bring sliced array of products to show in sidebar menu
    arrayProductsSizeFive: (state) => state.products.slice(0, 4),
    //Bring sum total of products
    arraySumProducts(state): Number {
      let total = 0;

      state.products.map((product) => {
        total += product.price * product.qtdy;
      });

      return total;
    },
    //Bring total at 'cart'
    totalAtCart(state): Number {
      let total = 0;

      state.products.map((product) => {
        total += product.qtdy;
      });

      return total;
    },
  },
});
