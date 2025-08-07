import { createApp, ref } from 'vue'
import ProductDisplay from './components/ProductDisplay.js'

createApp({
  components: {
    ProductDisplay
  },
  setup() {
    const cart = ref(0)

    function incrementCart() {
      cart.value += 1
    }

    return {
      cart,
      incrementCart
    }
  }
}).mount('#app')
