<template>
<div style="width: 300px">
  <div class="shadow border-sm" style="margin-bottom: 1rem;">
    <div class="card-top-p">
      <img class=" border-sm img" src="@/assets/littlegirl.jpg" alt="demo">
    </div>
    <div class="card-body">
      <h2 class="card-title ">TITLE</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sint culpa reiciendis ut amet doloremque ad numquam, optio commodi aspernatur asperiores porro autem rerum debitis impedit deserunt nesciunt inventore ea.</p>
      <div style="text-align: right;">
        <a class="btn btn-link btn-primary border" style="margin-top: 1rem;" href="">MORE</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Picture"
    }
</script>

<style scoped>
  .card-top-p {
    text-align: center;
    padding: 4% 4% 0 4%;
  }
  .shadow {
    box-shadow: -6px -5px 10px white, 0px 4px 15px rgba(0, 0, 0, 0.15);
  }
  .border-sm {
    border-radius: 10px;
  }
  .card-body {
    padding: 15px;
  }
  .img {
    max-width: 100%;
  }
  .card-title {
    margin: 0;
    color: #668a9a;
  }

  .btn-link {
    display: inline-block;
    text-decoration: none;
  }
  .btn-primary {
    background: linear-gradient(145deg, #4ec8ff, #42a8db);
    /* box-shadow: 12px 12px 16px 0px #d4d4d4, -8px -8px 16px #ffffff; */
    color: #ffffff;
  }
  .border {
    border-radius: 20px;
  }

</style>
