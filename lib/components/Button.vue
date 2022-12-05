<template>

      <a class="button" v-bind:href="url">
          <slot>Label</slot>
      </a>

</template>

<style scoped lang="scss">
@import "../assets/css/variables.scss";



.layout {
   display: flex;
   align-items:center;
   gap: 10rem;
}

a.button {
    color: white;
    text-decoration:  none;
    cursor: pointer;
    font-size: 2.1rem;
    display: inline-block;
    margin-bottom: 2rem;
    padding: 2rem 4rem;
    background-color: $brown;
    box-shadow: .7rem .7rem 0 $magenta;
    border-radius: 3.6rem 0px;

    &:hover {
      background-color: $salmon;
    }

    @media (max-width: 800px) {
      font-size: 1.4rem;
    }

}

a.light {
    color: $brown;
    text-decoration:  none;
    cursor: pointer;
    font-size: 2.1rem;
    display: inline-block;
    margin-bottom: 2rem;
    padding: 2rem 4rem;
    background-color: $white;
    border: 1px $brown solid;
    box-shadow: .7rem .7rem 0 $magenta;
    border-radius: 3.6rem 0px;

    &:hover {
      background-color: $seafoam;
    }

    @media (max-width: 800px) {
      font-size: 1.4rem;
    }
}
</style>

<script>

  export default {

    name: 'Button',
    props: {
    	url: {
        type: String,
    	},
    }

  }

</script>