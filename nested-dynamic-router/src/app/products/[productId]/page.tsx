
const ProductId = ({ params } : {params: {productId: string}} ) => {
  return (
    <h1>Details about product id {params.productId} </h1>
  )
}

export default ProductId