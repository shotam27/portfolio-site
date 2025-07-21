<template>
  <nav class="fixed top-0 w-full bg-light/95 backdrop-blur-sm border-b border-accent z-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="text-xl font-bold text-primary">{{ siteName }}</div>
        <div class="hidden md:flex space-x-8">
          <a
            v-for="item in navigationItems"
            :key="item.href"
            :href="item.href"
            class="text-secondary hover:text-primary transition-colors font-medium"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
  props: {
    siteName: {
      type: String,
      default: 'Portfolio',
    },
    navigationItems: {
      type: Array,
      required: true,
    },
  },
}
</script>
