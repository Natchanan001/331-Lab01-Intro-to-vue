const { createApp, ref, computed } = Vue

createApp({
  setup() {
    // 🧶 Reactive data
    const product = ref('Boots')
    const brand = ref('SE 331')
    const cart = ref(0)
    const onSale = ref(true)

    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 50 }
    ])
    const selectedVariant = ref(0)

    const details = ['50% cotton', '30% wool', '20% polyester']
    const sizes = ['S', 'M', 'L']

    // 🧠 Computed properties
    const title = computed(() => {
      return brand.value + ' ' + product.value
    })

    const image = computed(() => {
      return variants.value[selectedVariant.value].image
    })

    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity > 0
    })

    const saleMessage = computed(() => {
      return onSale.value ? `${brand.value} ${product.value} is on sale` : ''
    })

    // ⚙️ Functions
    function addToCart() {
      cart.value += 1
    }

    function updateVariant(index) {
      selectedVariant.value = index
    }

    function toggleStock() {
      const currQty = variants.value[selectedVariant.value].quantity
      variants.value[selectedVariant.value].quantity = currQty > 0 ? 0 : 50
    }

    // 🔄 Expose to template
    return {
      title,
      cart,
      details,
      sizes,
      variants,
      addToCart,
      updateVariant,
      toggleStock,
      image,
      inStock,
      onSale,
      saleMessage
    }
  }
}).mount('#app')
