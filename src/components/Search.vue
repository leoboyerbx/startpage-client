<template>
  <form class="search-bar"
        @submit.prevent="submitQuery(query)"
        @keydown.down.prevent="nextSuggestion"
        @keydown.up.prevent="prevSuggestion"
        @keyup.prevent.esc="hideSuggestions = !hideSuggestions"
        @focusin="hideSuggestions = false"
  >
    <section class="flex flex-row items-center">
      <button tabindex="0" type="submit" class="ml-5 focus:outline-none hover:text-yeleo focus:text-yeleo transition-colors"><i class="fas fa-search"></i></button>
      <input
        tabindex="1"
        autofocus
        type="text"
        class="mx-4 flex-grow focus:outline-none pt-2 pb-3 text-gray-800 font-light"
        v-model="query"
        @input="updateQuery"
      >
      <div class="mr-5 text-sm text-gray-300">
        <span class="keyhint">ENTER</span> to search, <span class="keyhint">ESC</span> to Grepp'
      </div>
    </section>
    <section v-show="suggestions.length && !hideSuggestions" class="flex flex-col suggestions-wrapper pb-3" @mouseout="selectedSuggestion = null">
      <a v-for="(suggestion, i) in suggestions"
         :key="i"
         class="flex flex-row items-center cursor-default"
         :class="{ 'bg-gray-200': i === selectedSuggestion }"
         @click="submitQuery(suggestion)"
         @mouseover="selectedSuggestion = i"
      >
        <i class="fas fa-search ml-5 fa-sm"></i>
        <span class="text-gray-900 mx-4 py-2 font-light" v-html="formatSuggestion(suggestion)"></span>
      </a>
    </section>
  </form>
</template>

<script>
// import duckduckgoApi from '@/api/duckduckgoApi'
import googleSuggestApi from '@/api/googleSuggestApi'

export default {
  name: 'Search',
  data: () => ({
    query: '',
    baseQuery: '',
    suggestions: [],
    selectedSuggestion: null,
    hideSuggestions: false
  }),
  watch: {
  },
  computed: {
  },
  methods: {
    formatSuggestion (suggestion) {
      console.log(this.baseQuery)
      if (suggestion.startsWith(this.baseQuery)) {
        suggestion = `${this.baseQuery}<span class="font-medium">${suggestion.slice(this.baseQuery.length)}</span>`
      } else {
        suggestion = `<span class="font-medium">${suggestion}</span>`
      }
      return suggestion
    },
    submitQuery (query) {
      this.query = ''
      window.open(`https://www.google.com/search?q=${query}`, '_blank')
    },
    nextSuggestion () {
      if (this.suggestions.length) {
        if (this.selectedSuggestion === null || this.selectedSuggestion < this.suggestions.length - 1) {
          if (this.selectedSuggestion === null) {
            this.selectedSuggestion = 0
          } else {
            this.selectedSuggestion++
          }
          this.query = this.suggestions[this.selectedSuggestion]
        } else {
          this.selectedSuggestion = null
          this.query = this.baseQuery
        }
      }
    },
    prevSuggestion () {
      if (this.suggestions.length) {
        if (this.selectedSuggestion === null || this.selectedSuggestion > 0) {
          if (this.selectedSuggestion === null) {
            this.selectedSuggestion = this.suggestions.length - 1
          } else {
            this.selectedSuggestion--
          }
          this.query = this.suggestions[this.selectedSuggestion]
        } else {
          this.selectedSuggestion = null
          this.query = this.baseQuery
        }
      }
    },
    updateQuery () {
      if (this.query.length) {
        googleSuggestApi.getSuggestions(this.query).then(suggestions => {
          this.suggestions = suggestions
          this.baseQuery = this.query
          this.selectedSuggestion = null
        })
      } else {
        this.selectedSuggestion = null
        this.suggestions = []
        this.baseQuery = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.search-input {
  border-radius: 25px;
  min-height: 50px;
}
.suggestions-wrapper {
  position: relative;
  display: none;
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    right: 20px;
    top: 0;
    height: 1px;
    @apply bg-gray-200;
  }
}
.search-input:focus-within .suggestions-wrapper, .search-input:hover .suggestions-wrapper {
  display: block;
}
.keyhint {
  //@apply bg-gray-200 py-1 px-2 rounded text-white;
  @apply border py-1 px-2 rounded;
}

.search-bar {
  @apply flex flex-col search-input flex-grow text-lg text-gray-500 border border-gray-200 transition-all overflow-hidden max-w-3xl mx-auto bg-white;
}
.search-bar:hover, .search-bar:focus-within {
  box-shadow:  0 0 25px rgba(0, 0, 0, 0.15);
  border-color: transparent;
}
</style>
