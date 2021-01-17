<template>
  <section class="my-5">
    <header class="flex flex-row justify-between items-center">
      <h2 class="text-4xl font-bold text-gray-700 dark:text-gray-100"><i class="fas fa-wdsrench transform scale-75 inline-block mr-2"></i>Tools</h2>
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
    categories: []
  }),
  async created () {
    this.categories = await toolsApi.getCategories()
  },
  computed: {
    gridClass () {
      const cols = this.$store.state.gridCols
      if (this.$store.state.gridDisplay) {
        return `sm:grid-cols-2
        md:grid-cols-${Math.min(3, cols)}
        lg:grid-cols-${cols}`
      }
      return ''
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
