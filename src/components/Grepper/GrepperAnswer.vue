<template>
  <div
    class="overflow-hidden relative rounded-xl"
    style="background-color: #0d1032"
  >
    <header class="w-full p-3 leading-none flex items-center justify-between">
      <button class="window-button bg-red-400" @click="$emit('close')">
        <span class="button-times">&times;</span>
      </button>
      <button class="window-button bg-yellow-400 mr-auto ml-2" @click="extended = !extended">
        <span class="button-minus">-</span>
      </button>
      <a v-if="answer.source_url" :href="answer.source_url" title="Source" target="_blank" class="text-indigo-50 opacity-50 hover:opacity-100 transition">
        <i class="fas fa-external-link-alt"></i>
      </a>
    </header>
    <main :style="{ maxHeight }" class="transition-all duration-300">
      <prism
        ref="content"
        :language="language"
        style="background-color: transparent"
        class="prism-wrapper"
      >{{ answer.answer || '' }}</prism>
    </main>
  </div>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
  name: 'GrepperAnswer',
  components: { Prism },
  props: ['answer', 'language'],
  data: () => ({
    extended: true,
    isMounted: false
  }),
  mounted () {
    this.isMounted = true
  },
  computed: {
    maxHeight () {
      if (!this.isMounted) return
      if (this.extended) {
        return this.$refs.content.offsetHeight + 'px'
      } else {
        return '0px'
      }
    }
  }
}
</script>

<style scoped>
.prism-wrapper {
  border-radius: 0px;
  margin: 0;
  padding-top: 5px;
}

.window-button {
  @apply text-transparent flex justify-center items-center text-lg hover:text-gray-800 w-4 h-4 rounded-full transition-colors focus:outline-none;
}
.button-times {
  transform: translateY(-2.5px);
}
.button-minus {
  transform: translateY(-2.5px);
}

</style>
