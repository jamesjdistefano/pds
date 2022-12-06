<template>
  <section>
    <div>
      <h2 v-if="this.$slots.title">
        <slot name="title">This is a Level 2 Header</slot>
      </h2>

      <div v-if="this.$slots.support" class="support">
        <slot name="support">Science has not yet mastered prophecy. We predict too much for the
          next year and yet far too little for the next 10.
        </slot>
      </div>

      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/css/variables.scss";


</style>

<script>

</script>
