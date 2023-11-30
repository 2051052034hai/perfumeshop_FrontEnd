//Libaries
import { memo } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

//Product
import ProductSale from "../ProductSale";
import Product from "../Product";

const settings = {
  dots: false,
  slidesToShow: 5,
  arrows: true,
  prevArrow: <LeftOutlined />,
  nextArrow: <RightOutlined />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const SliceProduct = ({ data, sale }) => {
 
  return (
    <>
      <div className="w-full mt-6">
        <Carousel className="justify-between saleProductStyle" {...settings}>
          {data?.data?.map((item, index) =>
            sale === 1 ? (
              <ProductSale product={item} key={index} />
            ) : (
              <Product product={item} key={index} />
            )
          )}
        </Carousel>
      </div>
    </>
  );
};

export default memo(SliceProduct);
