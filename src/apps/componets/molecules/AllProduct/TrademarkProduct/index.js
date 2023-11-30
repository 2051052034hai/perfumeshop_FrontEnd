import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

const TrademarkProduct = () => {
    const settings = {
      dots: true,
      slidesToShow: 8,
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
      <div style={{border: '1px solid #DDDDDD'}} className="justify-between w-full">
        <Carousel {...settings} className="justify-between">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="p-3">
              <img alt="not found" src={`/assets/images/vendorimg_${index + 2}.jpg`} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default TrademarkProduct;
