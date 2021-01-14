<template>
  <article class="bg-white shadow-th-sm rounded-xl w-full overflow-hidden">
    <header class="py-3 px-4 text-gray-700 shadow">
      <h3 class="text-xl"><i :class="category.font_awesome_icon.class" class="mr-2 inline-block transform scale-75"></i>{{ category.name }}</h3>
    </header>
    <main>
      <div>
        <a
          v-for="link in category.links"
          :key="link.id"
          :href="link.URL"
          target="_blank"
          class="flex items-center p-2"
          :title="link.title"
        >
          <img :src="apiEndPoint + link.icon.url" alt="fav" style="width: 16px; height: 16px;" class="ml-2">
          <span class="truncate mx-2">{{ link.title }}</span>
        </a>
      </div>
    </main>
  </article>
</template>

<script>
export default {
  name: 'ToolsCategory',
  props: {
    category: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
//header {
//  position: relative;
//  &::after {
//    content: '';
//    position: absolute;
//    left: 1rem;
//    right: 1rem;
//    bottom: 0;
//    height: 1px;
//    @apply bg-gray-400;
// }
//}
</style>
