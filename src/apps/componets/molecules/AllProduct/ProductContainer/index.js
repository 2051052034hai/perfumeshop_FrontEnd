import Product from "../Product";


const ProductContainer = ({data}) => {
  return (
    <>
      <div style={{ width: "33%" }} className="py-3 pr-1">
        <img
          alt="not found"
          className="w-full rounded-tl-3xl rounded-br-3xl"
          src="/assets/images/bb1.webp"
        ></img>
      </div>
      {data?.data?.map((item, index) =>
        <div
        key={index}
          style={{ width: "16%" }}
        >
          <Product product={item} key={index} />
        </div>
     )}
    </>
  );
};

export default ProductContainer;
