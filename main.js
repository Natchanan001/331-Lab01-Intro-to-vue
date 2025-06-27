const { createApp, ref } = Vue

createApp({
  setup() {
    const product = 'Boots'
    const brand = ref('SE 331')
    const image = ref('./assets/images/socks_green.jpg')
    const onSale = true
    const inStock = ref(true)
    const details = ['50% cotton', '30% wool', '20% polyester']
    const sizes = ['S', 'M', 'L']
    const cart = ref(0)
    

    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
      { id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg' }
    ])

    function addToCart() {
      cart.value++
    }

    function updateImage(variantImage) {
      image.value = variantImage
    }

    function toggleStock() {
      inStock.value = !inStock.value
    }

    return {
      product,
      brand,
      image,
      onSale,
      inStock,
      details,
      sizes,
      variants,
      cart,
      addToCart,
      updateImage,
      toggleStock
    }
  }
}).mount('#app')
