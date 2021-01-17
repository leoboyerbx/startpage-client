<template>
  <article class="bg-white shadow-th-sm rounded-lg w-full overflow-hidden dark:bg-gray-800">
    <header class="py-3 px-4 text-gray-700 dark:text-gray-300 shadow">
      <h3 class="text-xl"><i :class="category.font_awesome_icon.class" class="mr-2 inline-block transform scale-75"></i>{{ category.name }}</h3>
    </header>
    <main :style="{ maxHeight: maxHeight + 'px' }" class="overflow-y-scroll no-scrollbar transition-all duration-300" ref="listWrapper">
      <div ref="list">
        <a
          v-for="link in category.links"
          :key="link.id"
          :href="link.URL"
          target="_blank"
          class="flex items-center p-2 text-gray-800 dark:text-gray-300"
          :title="link.title"
        >
          <img :src="link.icon ? apiEndPoint + link.icon.url : '/assets/globe.svg'" alt="fav" style="width: 16px; height: 16px;" class="ml-2">
          <span class="truncate mx-2">{{ link.title }}</span>
        </a>
      </div>
    </main>
    <footer @click.prevent="extended = !extended" v-if="category.links.length > 5" class="border-t border-gray-20 dark:border-gray-700 p-2 flex justify-center items-center text-gray-700 dark:text-gray-300 cursor-pointer">
      <i class="fas fa-chevron-down fa-2x transition duration-300 transform" :class="{ 'rotate-180': extended }"></i>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'ToolsCategory',
  data: () => ({
    initialHeight: 200,
    extended: false
  }),
  props: {
    category: {
      type: Object,
      default: null
    }
  },
  computed: {
    maxHeight () {
      if (this.extended) {
        return this.$refs.list.offsetHeight
      } else {
        return this.initialHeight
      }
    }
  }
}
</script>

<style scoped lang="scss">
.no-scrollbar {
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
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
