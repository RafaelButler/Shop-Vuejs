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

    takeOutProduct(productInfos: propsProdcut) {
      const isIn = this.products.some(
        (product) => product.id === productInfos.id
      );

      if (isIn) {
        console.log("sadakjsdlkajs");

        if (productInfos.qtdy > 1) {
          productInfos.qtdy -= 1;
        } else {
          this.removeProduct(productInfos);
        }
      }
    },

    removeProduct(productInfos: propsProdcut) {
      const index = this.products.indexOf(productInfos);
      this.products.splice(index, 1);
      console.log(this.products);
    },
  },

  getters: {
    arrayProducts: (state) => state.products.slice(0, state.arraySize),
    arrayProductsSizeFive: (state) => state.products.slice(0, 4),
  },
});
