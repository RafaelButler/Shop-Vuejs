<script lang="ts">
import { defineComponent } from "vue";
import { IMaskComponent } from "vue-imask";

export default defineComponent({
  components: {
    "imask-input": IMaskComponent,
  },
});
</script>

<template>
  <div class="container">
    <router-link to="/">Go to home page</router-link>
    <div class="row">
      <div class="col-md-8">
        <h2 class="mb-3">Finalização do pedido</h2>

        <form>
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
                    id="exampleFormControlInput1"
                  />
                </div>
              </div>
              <div class="col-md-1">
                <button type="button" title="Procurar cep" class="searchButton">
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
          <h2>Sua sacola</h2>

          <div class="card mb-3 mt-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://chicorei.imgix.net/623/bb46c280-bfb3-11eb-8e1d-79f480106555.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top&markpad=0&mark=https%3A%2F%2Fchico-rei.imgix.net%2Fimages%2Fsite%2Fproduct%2Fselo-desgaste.png%3Fauto%3Dformat%26w%3D0.60"
                  class="img-fluid rounded-start image"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3 mt-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://chicorei.imgix.net/623/bb46c280-bfb3-11eb-8e1d-79f480106555.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top&markpad=0&mark=https%3A%2F%2Fchico-rei.imgix.net%2Fimages%2Fsite%2Fproduct%2Fselo-desgaste.png%3Fauto%3Dformat%26w%3D0.60"
                  class="img-fluid rounded-start image"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

  .bag {
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid var(--color-primary);
    padding: 20px;
    width: 100%;
  }
  .image {
    height: 100%;
    width: 30%;

    @media (min-width: 700px) {
      & {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
