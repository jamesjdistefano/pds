<template>
  <div class="tenhundo">
    <img class="image-respond" src="/images/mb-line-break.png" width="100%"/>
    <div class="footer">
      <slot />
    </div>
    <div class="footer-links">
      <p class="copy-small">Copyright 2022 <strong>Mad Branch Studios</strong></p>
      <div>
        <a rel="me" href="https://indieweb.social/@madbranch"><img src="https://indieweb.social/packs/media/images/logo-d4b5dc90fd3e117d141ae7053b157f58.svg" width="44" /></a>
        <a href="https://discord.gg/uCMe5tkBuw"><img src="/images/Discord-Logo.png" width="72" /></a>
    </div>
    </div>
  </div>
</template>

<style scoped>

.footer {
  background-color: var(--brown);
  color: white;

  /* width: 90vw; */
  max-width: 100rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 16rem;
}

.footer-links {
  display: flex; 
  flex-direction: column;
  align-items: center; 
  margin-top: 8rem;
}
</style>