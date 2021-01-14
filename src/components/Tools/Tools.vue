<template>
  <section class="my-5">
    <header class="flex flex-row justify-between items-center">
      <h2 class="text-4xl font-bold text-gray-700"><i class="fas fa-wrench transform scale-75 inline-block mr-2"></i>Tools</h2>
      <div class="text-gray-400 flex text-sm ml-auto mr-3" v-show="gridDisplay">
        <button @click="rmCol" class="pl-3 pr-2 py-1 border-2 border-gray-400 border-r-0 rounded-l-full focus:outline-none focus:bg-gray-100"><i class="fas fa-minus"></i></button>
        <span class="text-lg px-1 border-b-2 py-1 border-t-2 border-gray-400 leading-none">{{ cols }}</span>
        <button @click="addCol" class="pr-3 pl-2 py-1 border-2 border-gray-400 border-l-0 rounded-r-full focus:outline-none focus:bg-gray-100"><i class="fas fa-plus"></i></button>
      </div>
      <div>
        <button class="display-button" @click="gridDisplay = true" :class="{ 'bg-gray-200 transition-colors': gridDisplay }"><i class="fas fa-th"></i></button>
        <button class="display-button" @click="gridDisplay = false" :class="{ 'bg-gray-200': !gridDisplay }"><i class="fas fa-th-list"></i></button>
      </div>
    </header>
    <main class="my-5 grid gap-x-4 gap-y-6 items-start" :class="gridClass">
      <ToolsCategory v-for="category in categories" :category="category" :key="category.id" />
    </main>
  </section>
</template>

<script>
import toolsApi from '@/api/toolsApi'
import ToolsCategory from '@/components/Tools/ToolsCategory'

export default {
  name: 'Tools',
  components: { ToolsCategory },
  data: () => ({
    categories: [],
    gridDisplay: true,
    cols: 4,
    maxCols: 4,
    minCols: 2
  }),
  async created () {
    this.categories = await toolsApi.getCategories()
  },
  computed: {
    gridClass () {
      if (this.gridDisplay) {
        return `sm:grid-cols-2
        md:grid-cols-${Math.min(3, this.cols)}
        lg:grid-cols-${this.cols}`
      }
      return ''
    }
  },
  methods: {
    addCol () {
      if (this.cols < this.maxCols) this.cols++
    },
    rmCol () {
      if (this.cols > this.minCols) this.cols--
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
