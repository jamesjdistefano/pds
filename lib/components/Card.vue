<template>
  <div>
    <div class="card">
      <slot name="image"><img src="http://images.ctfassets.net/ncgri9n8y2w0/4xVcu0if9xeM7T5aKipaXe/f614ed7da6cefbb758fa5e48703c7406/Southern_Company_Gas"/></slot>
      <div class="content">
        <p v-if="this.$slots.label" class="card-label"><slot name="label">label</slot></p>
        <p class="title"><slot>Title</slot></p>
        <p class="description"><slot name="description">Description</slot></p>
        <a :href="url"><slot name="link"/></a>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss" scoped>
  @import "../assets/css/variables.scss";
  
  .card {
    display:flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    background-color: $brown;
    max-width: 80rem;
    margin: 2rem auto;
    font-weight: 500;
    color: $white;
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.2);
  }

  p {
    margin: 0;
  }
  .content {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 0 4rem;
      width: 100%;
  }


  img {
      max-width: 36rem;
      // object-fit: cover;
      // display: block;
    }
   
  .card-label {
      font-size: 1.4rem;
      text-transform: uppercase;
  }
  
  .description {
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 2.2rem;
  }

  .title {
      font-size: 2rem;
      margin-bottom: 1.4rem;
  }

  a {
      font-size: 1.6rem;
      color: $orange;
      text-align: left;
      margin-top: 2rem;
  }


  @media(max-width: 80rem) {
    a { margin-bottom: 2rem; }
     .card {
        flex-direction: column; 
        max-width: 36rem;
      }
    .content {  padding: 0 2rem; }
  }

  </style>
  
  <script>
  export default {
    name: "Card",
    props: ["url"],
    size: {
        type: String,
    },
   
  };
  </script>
  