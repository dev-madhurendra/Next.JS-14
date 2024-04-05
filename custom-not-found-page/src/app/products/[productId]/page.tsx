import React from "react"
import { notFound } from 'next/navigation'
const ProductId = ({ params }: { params: { productId: string } }) => {
  if (parseInt(params.productId) > 1000) {
    notFound()
  }
  return (
    <h1>Details about product id {params.productId} </h1>
  )
}

export default ProductId