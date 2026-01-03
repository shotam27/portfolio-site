<template>
  <footer class="bg-primary text-white py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>&copy; {{ currentYear }} Portfolio. Made with ❤️ and Vue.js</p>
      <p class="text-sm text-gray-300 mt-2">Last Updated: {{ lastUpdated }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
    lastUpdated() {
      try {
        const date = new Date(__LAST_UPDATED__)
        return date.toLocaleString('ja-JP', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Tokyo',
        })
      } catch {
        return 'Unknown'
      }
    },
  },
}
</script>
