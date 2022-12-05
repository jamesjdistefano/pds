<template>
    <nav>
      <ul>
        <li><g-link class="nav__link" to="/"><img src="../../static/images/mad-branch-mark.png" width="70" /></g-link></li>
        <li><g-link class="nav__link" to="/for-sale/">For Sale</g-link></li>
        <li><g-link class="nav__link" to="/commission/">Commission</g-link></li>
        <li><g-link class="nav__link" to="/about/">About</g-link></li>
        <li><g-link class="nav__link" to="/contact/">Contact</g-link></li>
      </ul>
    </nav>
</template>



<style lang="scss" scoped>
@import "../assets/css/variables.scss";

a {
    color: black;
    text-decoration: none;
}

a:hover {
    color: $blue;
    text-decoration: underline;
    text-underline-offset: 1rem;
}


ul {   
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  list-style: none;
  list-style-type: none;
  padding: 0;
  width: 100%;
  min-width: 96rem;
  margin-bottom: 8rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    min-width: auto;
  }
}

li {
    font-family: "Spline-Sans-Mono", sans-serif;
    font-weight: 400;
    font-size: 2.4rem;
}

</style>



