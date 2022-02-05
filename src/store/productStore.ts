import { defineStore } from "pinia";
import { Products, propsProdcut } from "../interfaces";

export const productStore = defineStore("product", {
  state: () => {
    return {
      products: [],
    } as Products;
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
  },
});
