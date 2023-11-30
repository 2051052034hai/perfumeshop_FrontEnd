import {
    HeartFilled,
    PlusCircleFilled,
    SearchOutlined,
  } from "@ant-design/icons";
  import { Card } from "antd";
  import { Link } from "react-router-dom";
  
  const ProductSale = ({product}) => {
  
    return (
      <>
        <div className="styleShadow mb-3 mx-2 mt-2 childDiv">
          <Link className="group" to="/product">
            <Card
              className="p-3 relative group-hover:overflow-visible"
              cover={
                <img
                  className="group-hover:opacity-50 transition-all duration-1000"
                  alt="example"
                  src={product?.thumbnail}
                />
              }
            >
              <div className="w-full ">
                <h3
                  style={{ width: "100%" }}
                  className="text-sm mt-1 font-medium line-clamp-2 h8"
                >
                 {product?.title}
                </h3>
                <h4 className="mt-1">
                  <span className="text-pink-800 font-bold text-base relative">
                    {new Intl.NumberFormat("vi-VN").format(product?.price - product?.price *(product?.discountPercentage/100))}
                    <span className="underline text-xs absolute -top-0">đ</span>
                  </span>
                </h4>
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-medium opacity-50">
                      Giá cũ:
                    </span>
                    <span className="text-pink-600 font-bold text-xs ml-1 relative line-through">
                      {new Intl.NumberFormat("vi-VN").format(product?.price)}
                      <span className="underline text-xs absolute -top-1">đ</span>
                    </span>
                  </div>
                  <div className="ml-auto">
                    <img
                      alt="not found"
                      className="w-12"
                      src={product?.trademark?.avatar}
                    ></img>
                  </div>
                </div>
                <div className="quantity_sale">
                  <div className="text-xs"> ⚡ Sắp cháy hàng</div>
  
                  <div className="block w-full h-2 bg-gray-300 mt-2 rounded-full relative overflow-hidden">
                    <div className="rounded-tl-full rounded-bl-full absolute top-0 z-1 bg-red-600 h-full w-11/12"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 bg-pink-600 px-2 py-0 rounded-tl-md rounded-br-3xl">
                <span
                  style={{ fontSize: "11px" }}
                  className="font-medium text-white"
                >
                  Giảm giá: {product?.discountPercentage}%
                </span>
              </div>
              <div className="absolute top-0 right-3 mt-3 overflow-hidden transition-all duration-500 w-0 group-hover:w-8">
                <div>
                  <span
                    title="Thêm vào yêu thích"
                    className="text-2xl whiteColor"
                  >
                    <HeartFilled />
                  </span>
                </div>
                <div>
                  <span
                    title="Thêm vào giỏ"
                    className="text-2xl whiteColor hover:text-pink-600 transition-all duration-500"
                  >
                    <PlusCircleFilled />
                  </span>
                </div>
                <div>
                  <span
                    title="Xem nhanh"
                    className="text-3xl whiteColor hover:text-pink-600 transition-all duration-500"
                  >
                    <SearchOutlined />
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </>
    );
  };
  
  export default ProductSale;
  