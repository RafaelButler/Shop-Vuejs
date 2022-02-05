<script lang="ts">
import { defineComponent } from "vue";
import { IMaskComponent } from "vue-imask";
import { useToast, POSITION } from "vue-toastification";
import { dataAdress } from "../../interfaces";
import ProductCart from "../../components/productCart.vue";
import { productStore } from "../../store/productStore";

export default defineComponent({
  components: {
    "imask-input": IMaskComponent,
    ProductCart,
  },

  data: () => {
    return {
      adress: {} as dataAdress,
      disabledButton: true,
    };
  },

  methods: {
    async getAdress(): Promise<void> {
      if (this.adress.cep != "_____-___") {
        const data = await fetch(
          `https://api.pagar.me/1/zipcodes/${this.adress.cep}`
        )
          .then((response: any) => response.json())
          .then((res: any) => res);

        this.toast.info("Buscando dados", {
          position: POSITION.TOP_CENTER,
          icon: "fas fa-circle-notch fa-spin",
          timeout: 2000,
        });

        setTimeout(() => {
          if (data.errors) {
            this.toast.error(data.errors[0].message, {
              position: POSITION.TOP_CENTER,
              icon: "fas fa-check",
              timeout: 3000,
            });
          } else {
            this.toast.success("Endereço encontrado com sucesso", {
              position: POSITION.TOP_CENTER,
              icon: "fas fa-check",
              timeout: 3000,
            });

            this.adress.street = data.street;
            this.adress.neighborhood = data.neighborhood;
            this.adress.state = data.state;
            this.adress.city = data.city;
          }
        }, 4500);
      }
    },

    closeOrder(e: { preventDefault: () => void }) {
      e.preventDefault();

      const stringToAvoid = "_____-___";

      if (
        this.adress.cep == stringToAvoid ||
        this.adress.phone == "(___) _ ____-____" ||
        this.adress.cardNumber == "____ ____ ____ ____" ||
        this.adress.dueDate == "__/____" ||
        this.adress.cvcCard == "____"
      ) {
        this.toast.info("Preencha os campos obrigatórios", {
          position: POSITION.TOP_CENTER,
          icon: "fas fa-exclamation-triangle",
          timeout: 1000,
        });
      } else {
        alert("concluido");
      }
    },
  },

  setup() {
    const toast = useToast();
    const store = productStore();

    return { toast, store };
  },
});
</script>

<template>
  <div class="container">
    <router-link to="/">Go to home page</router-link>
    <div class="row">
      <div class="col-md-8">
        <h2 class="mb-3">Finalização do pedido</h2>

        <form @submit="closeOrder">
          <div class="mt-3">
            <div class="mb-3 mt-3">
              <h4>Informações de contato</h4>
            </div>
            <div class="mb-3 text-left">
              <label for="exampleFormControlInput1" class="form-label"
                >Email</label
              >
              <input
                required
                type="email"
                class="form-control"
                :mask="Number"
                v-model="adress.email"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3 text-left">
              <label for="exampleFormControlInput1" class="form-label"
                >Telefone</label
              >
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">+55</span>
                <input
                  required
                  type="text"
                  class="form-control"
                  v-mask="{ mask: '(999) 9 9999-9999' }"
                  v-model="adress.phone"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
          </div>

          <div>
            <div class="mb-3 mt-3">
              <h4>Informações de entrega</h4>
            </div>
            <div class="row searchField">
              <div class="col-md-11">
                <div class="mb-3 text-left">
                  <label for="exampleFormControlInput1" class="form-label"
                    >CEP</label
                  >
                  <input
                    required
                    type="text"
                    class="form-control"
                    v-mask="{ mask: '99999-999' }"
                    v-model="adress.cep"
                    id="exampleFormControlInput1"
                  />
                </div>
              </div>
              <div class="col-md-1">
                <button
                  type="button"
                  @click="getAdress()"
                  title="Procurar cep"
                  class="searchButton"
                  :disabled="adress.cep == '_____-___' ? disabledButton : false"
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div class="mb-3 text-left">
              <label for="exampleFormControlInput1" class="form-label"
                >Rua</label
              >
              <input
                required
                type="text"
                class="form-control"
                v-model="adress.street"
                id="exampleFormControlInput1"
              />
            </div>

            <div class="row text-left">
              <div class="col-md-6 text-left">
                <label for="exampleFormControlInput1" class="form-label"
                  >Cidade</label
                >
                <input
                  required
                  type="text"
                  class="form-control"
                  v-model="adress.city"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="col-md-6 text-left">
                <label for="exampleFormControlInput1" class="form-label"
                  >Bairro</label
                >
                <input
                  required
                  type="text"
                  class="form-control"
                  v-model="adress.neighborhood"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>

            <div class="row text-left">
              <div class="col-md-6 text-left">
                <label for="exampleFormControlInput1" class="form-label"
                  >Numero</label
                >
                <input
                  required
                  type="text"
                  class="form-control"
                  v-model="adress.number"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="col-md-6 text-left">
                <label for="exampleFormControlInput1" class="form-label"
                  >Estado</label
                >
                <input
                  required
                  type="text"
                  class="form-control"
                  v-model="adress.state"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
          </div>

          <div>
            <div class="mb-3 mt-3">
              <h4>Informações de pagamento</h4>
            </div>
            <div class="mb-3 text-left">
              <label for="exampleFormControlInput1" class="form-label"
                >Numero do Cartão</label
              >
              <input
                required
                type="text"
                class="form-control"
                v-mask="{ mask: '9999 9999 9999 9999' }"
                v-model="adress.cardNumber"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3 text-left">
              <label for="exampleFormControlInput1" class="form-label"
                >Titulo do cartão</label
              >
              <input
                required
                type="text"
                class="form-control"
                v-model="adress.ownerCardName"
                id="exampleFormControlInput1"
              />
            </div>

            <div class="row text-left">
              <div class="col-md-6 text-left">
                <label for="exampleFormControlInput1" class="form-label"
                  >Data de vencimento</label
                >
                <input
                  required
                  type="text"
                  class="form-control"
                  v-mask="{ mask: '99/9999' }"
                  v-model="adress.dueDate"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="col-md-6 text-left">
                <label for="exampleFormControlInput1" class="form-label"
                  >CVC</label
                >
                <input
                  required
                  type="text"
                  class="form-control"
                  v-mask="{ mask: '9999' }"
                  v-model="adress.cvcCard"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8"></div>

            <div class="col-md-4 mb-4">
              <button type="submit" title="Procurar cep" class="searchButton">
                Fechar Pedido
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-md-4">
        <div class="bag">
          <h4>Sacola</h4>
          <div v-for="(product, index) in store.products" :key="index">
            <ProductCart :product="product" />
          </div>
        </div>
        <div class="sumTotal mt-4 mb-4">Total: R$ 1000.00</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;

  .searchField {
    @media (min-width: 700px) {
      & {
        display: flex;
        align-items: center;
      }
    }
  }

  .searchButton {
    background-color: var(--color-main);
    border: var(--color-main);
    color: var(--color-four);
    padding: 4px 8px;
    width: 100%;
    margin-bottom: 25px;

    @media (min-width: 700px) {
      & {
        margin-bottom: 0;
        padding: 6px 8px;
        margin-top: 15px;
      }
    }
  }
}

.bag {
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid var(--color-primary);
  padding: 20px;
  width: 100%;
  background: var(--color-main);
  border-radius: 8px;
  color: var(--color-four);
}

.sumTotal {
  background: var(--color-main);
  padding: 20px;
  text-align: right;
  color: var(--color-four);
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
}
</style>
