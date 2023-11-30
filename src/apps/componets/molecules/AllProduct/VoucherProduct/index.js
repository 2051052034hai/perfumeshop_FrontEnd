import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

const Voucherproduct = () => {
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
  const contentVoucher = [
    {
      title: "giảm ngay 10%",
      content: "Cho toàn bộ sản phẩm của thương hiệu Vichy",
    },
    {
      title: "giảm thêm 10%",
      content: "Cho toàn bộ sản phẩm son dưỡng",
    },
    {
      title: "giảm thêm 20K",
      content: "Khi thanh toán qua ví Ví VNPay",
    },
    {
      title: "giảm 15%",
      content: "Cho đơn tối thiểu 200k",
    },
    {
      title: "giảm ngay 50k",
      content: "Cho khách hàng mua lần đầu tiên",
    },
    {
      title: "giảm 5%",
      content: "Cho khách hàng có hoá đơn trên 1 triệu",
    },
  ];
  return (
    <>
      <div className="w-full mt-8">
        <Carousel className="justify-between" {...settings}>
          {contentVoucher.map((item, index) => (
            <div key={index}>
              <div style={{borderRight: '2px solid #ee4f83'}}  className="flex styleShadow mx-2">
                <div className="voucherStyle p-2 mx-3 ">
                  <img
                    alt="not found"
                    className="mt-6"
                    src={`/assets/images/coupon_${index + 1}.png`}
                  ></img>
                </div>
                <div className="ml-1 relative">
                  <div className="beforeVoucher"></div>
                  <div className="afterVoucher"></div>
                  <h3 className="font-bold uppercase mt-2 text-pink-600">
                    {item.title}
                  </h3>
                  <h4
                    style={{ lineHeight: "18px" }}
                    className="font-medium mt-2 w-3/4"
                  >
                    {item.content}
                  </h4>
                  <button className="bg-pink-600 text-white py-1 mt-4 px-2 rounded-md text-xs">
                    Sao chép
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Voucherproduct;
