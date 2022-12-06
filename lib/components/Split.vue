<template>
  <div class="layout">
    <div class="splitImage">
      <slot name="image"><img src="https://placekitten.com/300/1000/" width="1000" /></slot>
    </div>
    <div class="copy">
      <h3><slot name="title">The Jaunty Fatboy</slot></h3>
      <p><slot>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</slot></p>
        <ul class="copy-small caps">
          <slot name="list">
          <li>(1) BOWL</li>
          <li>(1) OPENSEA NFT GRANTING IMMUTABLE OWNERSHIP</li>
          <li>(1) 3D MODEL IN OBJ FORMAT</li>
          <li>(6) HIGH RESOLUTION PHOTOGRAPHS</li>
          <li>(1) SIGNED CERTIFICATE OF AUTHENTICITY</li>
          </slot>
        </ul>
      <p class="cta"><slot name="link"></slot></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/css/variables.scss";

.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem; 
    @media (max-width: 100rem) {
    flex-direction: column;

    img {
      max-width: 100%
    }
  }
}


.splitImage {
    order: 1;
  }


.copy {
  background-color: $brown;
  color: $white;
  margin-left: -16rem;
  padding: 2rem 8rem;
  z-index: 2;
  order: 2;
  box-shadow: -3px 0px $hot-pink;


  @media(max-width: 100rem) {
    max-width: 100rem;
    box-shadow: 0px -3px $hot-pink;
    padding: 2rem 2.8rem;
    margin-left: 0;
  }
}


.flip { 
  .splitImage {
    order: 2;
    margin-left: -16rem;
  }
  .copy {
    order: 1;
    margin-left: 0;
    box-shadow: 3px 0px $hot-pink;
  }
  @media(max-width: 100rem) {
    .splitImage {
      order: 1;
      margin-left: 0;
    }
    .copy {
      order:2;
      box-shadow: 0px -3px $hot-pink;

    }
  }
}

ul {
  list-style: none;
  padding-left: 0;
  line-height: 2rem;
}

a {
  color: $orange;
  font-weight: 400;
}

.arrow { 
  margin-right: 2rem; 
}
</style>

<script>

  export default {

    name: 'Split',
    props: {
    	bgColor: {
        type: String,
    	},
    }

  }

</script>