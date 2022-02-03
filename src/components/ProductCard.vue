<script>
export default {
  name: "ProductCard",
};
</script>

<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="https://chicorei.imgix.net/21351/bd5f7dd0-74b4-11ec-b94f-454db13126f7.jpg?auto=compress,format&q=65&w=425&h=600&fit=crop&crop=top"
          class="img-fluid rounded-start"
          alt="camisa"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
