<template>
  <section class="my-10 py-5">
    <main class="my-5 grid gap-x-4 gap-y-6 items-start">
      <pre v-for="(answer, i) in answers" :key="i">
        {{ answer.answer }}
      </pre>
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
  data: () => ({
    answers: []
  }),
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
        this.answers = response.answers
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
