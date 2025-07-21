<template>
  <footer class="bg-primary text-white py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>&copy; {{ currentYear }} Portfolio. Made with ❤️ and Vue.js</p>
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
  },
}
</script>
