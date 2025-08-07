export default {
    props: {
      cart: Number
    },
    setup(props, { emit }) {
      const product = ref('Boots')
      const brand = ref('SE 331')
      const onSale = ref(true)
      const selectedVariant = ref(0)
  
      const variants = ref([
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 50 }
      ])
      const details = ['50% cotton', '30% wool', '20% polyester']
      const sizes = ['S', 'M', 'L']
  
      const title = computed(() => brand.value + ' ' + product.value)
      const image = computed(() => variants.value[selectedVariant.value].image)
      const inStock = computed(() => variants.value[selectedVariant.value].quantity > 0)
      const saleMessage = computed(() => onSale.value ? `${brand.value} ${product.value} is on sale` : '')
  
      function updateVariant(index) {
        selectedVariant.value = index
      }
  
      function toggleStock() {
        const currQty = variants.value[selectedVariant.value].quantity
        variants.value[selectedVariant.value].quantity = currQty > 0 ? 0 : 50
      }
  
      function addToCart() {
        emit('add-to-cart') // ส่ง event ไปยัง parent
      }
  
      return {
        title,
        details,
        sizes,
        variants,
        updateVariant,
        toggleStock,
        addToCart,
        image,
        inStock,
        saleMessage
      }
    }
  }
  