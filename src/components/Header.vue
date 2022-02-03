<script lang="ts">
import { defineComponent } from "vue";

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

.op {
  opacity: 0.9;
}

// Mobile menu
.overlay {
  background-color: var(--color-main);
  box-shadow: 0px 0px 3px 0px var(--color-five);
  border-radius: 0px 10px 6px 0px;
  position: fixed;
  width: 50%;
  height: 100vh;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;

  @media (min-width: 700px) {
    width: 20%;
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
</style>
