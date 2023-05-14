<script lang="ts">
  export let imgPath : string;
  export let title : string;
  export let description : string;
</script>

<div class="card" style="width: 18rem;">
  <img src={imgPath} class="card-img-top" alt="">
  <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
  </div>
</div>

<style>
  img {
      width: 200px;
      height: 200px;
      background-position: center;
      margin: auto;
      margin-top: 15px;
      margin-bottom: 15px;
  }
  .card {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) !important;
      border-color: #0f1624 !important;
      margin-bottom: 1.5rem;
  }
  .card-body {
      background-color: #0f1624 !important;
  }
  .card-title, .card-text {
      color: #fff;
  }
  @media only screen and (max-width: 768px) {
      img {
          width: 100px;
          height: 100px;
      }
  }
</style>