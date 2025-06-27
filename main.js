const { createApp, ref } = Vue

createApp({
  setup() {
    const product = ref('Boots')
    const description = ref('Comfortable leather boots for hiking.')
    const image = ref('assets/images/socks_green.jpg') 
    const inStock = ref(true)

    return {
      product,
      description,
      image,
      inStock
    }
  }
}).mount('#app')
