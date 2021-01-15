<template>
  <section class="my-10 py-5">
    <main class="my-5 grid gap-x-4 gap-y-6 items-start">
      <GrepperAnswer
        v-for="(answer, i) in answers"
        :key="answer.id"
        :answer="answer"
        :language="language"
        @close="closeAnswer(i)"
      />
    </main>
  </section>
</template>

<script>
import grepperApi from '@/api/grepperApi'
import debounce from 'lodash.debounce'

import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-liquid'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-kotlin'

import GrepperAnswer from '@/components/Grepper/GrepperAnswer'

export default {
  name: 'Grepper',
  components: { GrepperAnswer },
  props: {
    query: {
      type: String,
      required: false
    }
  },
  data: () => ({
    answers: [],
    language: ''
  }),
  mounted () {
    Prism.highlightAll()
  },
  watch: {
    query () {
      this.getAnswers()
    },
    answers (newVal) {
      this.$nextTick(() => {
        Prism.highlightAll()
      })
      this.$emit('hasAnswers', newVal ? !!(newVal.length) : false)
    }
  },
  computed: {
    getAnswers () {
      return debounce(async () => {
        const response = await grepperApi.query(this.query)
        this.answers = response.answers?.map(answer => {
          answer.answer = answer.answer
            .split(/\r?\n/)
            .map(row => row.trim().split(/\s+/).join(' '))
            .join('\n')
          return answer
        })
        this.language = response.language_guess
        console.log(this.answers)
      }, 250)
    }
  },
  methods: {
    closeAnswer (index) {
      this.answers.splice(index, 1)
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
