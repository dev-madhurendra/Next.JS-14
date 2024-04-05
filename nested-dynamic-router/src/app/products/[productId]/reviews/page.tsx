const Review = ({ params }: { params: { productId: string } }) => {
  return <h1>All Reviews of product {params.productId} </h1>;
};

export default Review