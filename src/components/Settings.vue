<template>
  <div class="fixed top-0 left-0 mt-5 ml-4">
    <div class="flex flex-col font-light text-sm p-4 shadow-th rounded-xl">
      <span class="mb-2">Tools display mode</span>
      <div class="mb-4">
        <button class="display-button" @click="$store.commit('gridDisplay', true)" :class="{ 'bg-gray-200': $store.state.gridDisplay }"><i class="fas fa-th"></i></button>
        <button class="display-button ml-2" @click="$store.commit('gridDisplay', false)" :class="{ 'bg-gray-200': !$store.state.gridDisplay }"><i class="fas fa-th-list"></i></button>
      </div>
      <span v-show="$store.state.gridDisplay" class="mb-2">Number of columns</span>
      <div class="text-gray-400 flex text-sm" v-show="$store.state.gridDisplay">
        <button @click="$store.commit('rmCol')" class="pl-3 pr-2 py-1 border-2 border-gray-400 border-r-0 rounded-l-full focus:outline-none focus:bg-gray-100"><i class="fas fa-minus"></i></button>
        <span class="text-lg px-1 border-b-2 py-1 border-t-2 border-gray-400 leading-none">{{ $store.state.gridCols }}</span>
        <button @click="$store.commit('addCol')" class="pr-3 pl-2 py-1 border-2 border-gray-400 border-l-0 rounded-r-full focus:outline-none focus:bg-gray-100"><i class="fas fa-plus"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings'
}
</script>

<style scoped lang="scss">
.display-button {
  @apply text-gray-700 p-2 rounded-md text-xl transition-colors hover:bg-gray-100;
  line-height: 1;
&:focus {
   @apply outline-none ring ring-yeleo-light;
 }
}
</style>
