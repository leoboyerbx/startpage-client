<template>
  <div id="app" class="container mx-auto max-w-6xl px-10 relative">
    <header class="mx-auto mt-10 content-center relative z-10">
      <h1 class="font-bold text-center w-auto text-yeleo text-8xl mb-10">...start !</h1>
      <section class="search-wrapper">
        <Search @update="searchQuery = $event" />
      </section>
    </header>
    <main class="my-10">
      <Grepper :query="searchQuery" />
      <Tools />
    </main>
  </div>
</template>

<script>

import Search from '@/components/Search'
import Tools from '@/components/Tools/Tools'
import Grepper from '@/components/Grepper'

export default {
  name: 'App',
  data: () => ({
    searchQuery: ''
  }),
  components: {
    Grepper,
    Tools,
    Search
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-y: scroll;
}

#app {
  font-family: arboria, sans-serif;
}

.search-wrapper {
  height: 50px;
}

</style>
