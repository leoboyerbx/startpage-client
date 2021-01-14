<template>
  <div id="app" class="container mx-auto">
    <header class="mx-auto mt-10 px-5 content-center">
      <h1 class="font-bold text-center w-auto text-yeleo text-8xl mb-10">...start !</h1>
      <Search />
    </header>
  </div>
</template>

<script>

import Search from '@/components/Search'

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: arboria, sans-serif;
}

</style>
