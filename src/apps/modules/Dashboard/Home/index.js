//Libaries
import { Row } from "antd";
import { Link } from "react-router-dom";

//Molecules
import ProductTopSale from "../../../componets/molecules/AllProduct/ProductTopSale";
import TrademarkProduct from "../../../componets/molecules/AllProduct/TrademarkProduct"
import SliceProduct from "../../../componets/molecules/AllProduct/SliceProduct";
import Voucherproduct from "../../../componets/molecules/AllProduct/VoucherProduct";
import ProductContainer from "../../../componets/molecules/AllProduct/ProductContainer";
import ProductContent from "../../../componets/molecules/AllProduct/ProductContent";
import ProductPosts from "../../../componets/molecules/AllProduct/ProductPosts";

//Queries
import { useGetDataProductPage } from "../../../queries/product/useGetAllProduct";
import { useGetAllPosts } from "../../../queries/posts/useGetAllPosts";

const Home = () => {

  // Condition filter
  const filterDataApiPice = {
    top: 10,
    sort: "-price",
    arrType: {
      trademark: 'trademark',
    }
  }
  const filterDataApiDiscount = {
    top: 8,
    sort: "-discountPercentage",
    arrType: {
      trademark: 'trademark',
    }
  }

  //Call API
  const { data:productDataPrice, isLoading:isLoadingPrice } = useGetDataProductPage(
    filterDataApiPice
  );

  const { data:productDataDiscount, isLoading:isLoadingDiscount } = useGetDataProductPage(
    filterDataApiDiscount
  );

  const {data: postsData, isLoading: isLoadingPosts} = useGetAllPosts()

  return (
    <>
      <Row className="items-center w-11/12 m-auto p-0 pl-12 pr-20">
        <ProductTopSale />
        <div className="flex w-full items-center">
          <div>
            <h3 className="uppercase text-2xl font-bold mt-8 mb-6 text-opacity-50">
              mỹ phẩm làm đẹp
            </h3>
          </div>
          <div className="ml-auto">
            <Link to="/">
              <span className="text-base">Xem tất cả</span>
            </Link>
          </div>
        </div>
        <TrademarkProduct />
        <SliceProduct data = {productDataPrice}/>
        <Voucherproduct />
        <div>
          <h3 className="uppercase font-bold text-2xl px-2 mb-2 mt-8">
            mỹ phẩm cao cấp
          </h3>

          <div className="flex w-full flex-wrap justify-between divStyle">
            <ProductContainer data = {productDataPrice}/>
          </div>
        </div>

        <div className="flex w-full mt-6">
          <div className="w-1/2 mr-2">
            <img alt="not found" src="/assets/images/banner01.webp"></img>
          </div>
          <div className="w-1/2 ml-2">
            <img alt="not found" src="/assets/images/banner02.webp"></img>
          </div>
        </div>

        <div>
          <h3 className="uppercase font-bold text-2xl px-2 mb-2 mt-8">
            ưu đãi còn nhiều
          </h3>
          <div className="flex mb-4">
            <div style={{ width: "30%" }} className="mt-3 mr-2 mb-8">
              <img alt="not found"
                className="w-full h-full"
                src="/assets/images/banner03.webp"
              ></img>
            </div>
            <div
              style={{ width: "70%" }}
              className="flex flex-wrap justify-between"
            >
              <ProductContent data = {productDataDiscount}/>
            </div>
          </div>
        </div>

        <div className="w-full mb-4">
          <h3 className="uppercase font-bold text-2xl px-2">tin tức làm đẹp</h3>
          <ProductPosts data = {postsData}/>
        </div>
      </Row>
    </>
  );
};

export default Home;