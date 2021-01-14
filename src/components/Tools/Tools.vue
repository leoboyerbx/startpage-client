<template>
  <section class="my-5">
    <header>
      <h2 class="text-4xl font-bold text-gray-700"><i class="fas fa-wrench transform scale-75 inline-block mr-2"></i>Tools</h2>
    </header>
    <main class="my-5 grid grid-cols-2 gap-4 items-start">
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
  }
}
</script>

<style scoped>

</style>
