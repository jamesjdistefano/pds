<template>
  <figure>
    <div class="two-up">
     <div class="item"><slot name="left"><img src="https://placekitten.com/680/680/" /></slot></div>
     <div class="item"><slot name="right"><img src="https://placekitten.com/680/680/" /></slot></div>
    </div>
     <figcaption class="copy-small"><slot name="caption">This is a figure caption</slot></figcaption>
  </figure>   
</template>

<style scoped lang="scss">
@import "../assets/css/variables.scss";

.two-up {
  display: flex; 
  align-items: center; 
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 800px) { 
    flex-direction: column;
  }
}

img { 
  max-width: 100%;
  border: 1px $warm-grey solid;
}

figure { 
  margin: 12rem 0;
}

figcaption {
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center; 
  color: $dark-warm-grey;
}

</style>

<script>
</script>