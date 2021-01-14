<template>
  <section class="my-5">
    <header class="flex flex-row justify-between items-center">
      <h2 class="text-4xl font-bold text-gray-700"><i class="fas fa-file-code transform scale-75 inline-block mr-2"></i>Grepper results</h2>
    </header>
    <main class="my-5 grid gap-x-4 gap-y-6 items-start">
      {{ query }}
    </main>
  </section>
</template>

<script>
import grepperApi from '@/api/grepperApi'
import debounce from 'lodash.debounce'

export default {
  name: 'Grepper',
  components: {},
  props: {
    query: {
      type: String,
      required: false
    }
  },
  data: () => ({}),
  watch: {
    query () {
      this.getAnswers()
    }
  },
  computed: {
    getAnswers () {
      return debounce(async () => {
        const response = await grepperApi.query(this.query)
        console.log(response)
      }, 250)
    }
  }
}
</script>

<style scoped lang="scss">
.display-button {
  @apply mx-1 text-gray-700 p-2 rounded-md text-xl transition-colors hover:bg-gray-100;
  line-height: 1;
  &:focus {
    @apply outline-none ring ring-yeleo-light;
   }
}
</style>
