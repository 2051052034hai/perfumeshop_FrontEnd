import Product from "../Product";


const ProductContent = ({data}) => {
  return (
    <>
     {data?.data?.map((item, index) =>
        <div key={index} className="w-3/12">
           <Product product={item} key={index} />
        </div>
      )}
    </>
  );
};

export default ProductContent;
