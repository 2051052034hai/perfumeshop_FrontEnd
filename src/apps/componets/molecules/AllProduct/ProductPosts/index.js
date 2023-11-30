import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Post from "../../Posts";

const ProductPosts = ({data}) => {
  const settings = {
    dots: false,
    slidesToShow: 4,
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

  return (
    <>
      <div className="w-full mt-1">
        <Carousel className="justify-between" {...settings}>
        {data?.map((item, index) =>
            <Post data = {item} key={index} />
          )}
        </Carousel>
      </div>
    </>
  );
};

export default ProductPosts;
