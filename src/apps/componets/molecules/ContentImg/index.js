//Libaries
import React from "react";
import { Carousel, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ContentImg = () => {
  const titleMarquee = [
    "3 kem dưỡng mắt bán chạy nhất Nhật Bản",
    "Thử 2 loại mặt nạ gạo của Nhật, thích nhất là loại có hạt vừa dưỡng ẩm vừa tẩy da chết nhẹ nhàng",
    "Nước hoa sao Hàn mê mệt: Yoona dùng mùi nhẹ mà sang, Somi lại quyến rũ hết nút",
    "Dùng serum vitamin C ngừa lão hóa, làm mờ vết thâm",
    "6 cách sử dụng toner vừa tiết kiệm vừa thăng hạng nhan sắc từ đầu đến chân",
  ];
  const titleIcon = [
    "Giá sốc",
    "Quà tặng",
    "Tích điểm",
    "Mã giảm giá",
    "Giao nhanh",
    "Địa chỉ",
    "Sức khoẻ",
    "Shop care",
  ];

  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 7,
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
      <Row className="flex w-full ">
        <Col lg={15}>
          <Carousel autoplay className="m-3 w-full styleShadow">
            <div>
              <img src="/assets/images/slider_1.webp"></img>
            </div>
            <div>
              <img src="/assets/images/slider_2.webp"></img>
            </div>
          </Carousel>
          <div className="styleShadow w-full ml-3 py-4">
            <Carousel {...settings} suppressWarnings >
              {titleIcon.map((title, index) => (
                <div key={index} className="ml-6" >
                  <img
                    className="w-14"
                    src={`/assets/images/imgc${index + 1}.png`}
                  />
                  <span className="font-medium text-center">{title}</span>
                </div>
              ))}
            </Carousel>
          </div>
        </Col>

        <Col lg={8} className="ml-3 mt-3 w-full styleShadow overflow-hidden ">
          <div className="bg-pink-100 pt-3 pb-2 px-2 ml-2 w-full">
            <div className="flex">
              <div>
                <img className="w-12" src="/assets/images/user.png"></img>
              </div>
              <div className="ml-2">
                <h5 className="font-medium mb-1">
                  Thế giới mỹ phẩm của phái đẹp
                </h5>
                <span className="text-xs p-1 px-2 text-white bg-pink-500 rounded-lg text-center">
                  Đăng ký nhận quà
                </span>
              </div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 bg-pink-500 text-white font-bold text-center p-2 mt-2 rounded-md">
                <Link to="/login">
                  <span>Đăng ký</span>
                </Link>
              </div>
              <div className="w-1/2 bg-white text-pink-500 ml-2 font-bold text-center p-2 mt-2 rounded-md">
                <Link to="/register">
                  <span>Đăng Nhập</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-2 w-full">
            <img src="/assets/images/banner-free.webp"></img>
          </div>
          <div className="ml-2 mt-1 w-full bg-white flex justify-between py-2 px-3">
            <div>
              <h3 className="font-bold text-center">0</h3>
              <span className="font-normal text-base">Yêu thích</span>
            </div>
            <div>
              <h3 className="font-bold text-center">1</h3>
              <span className="font-normal text-base">Đã thêm</span>
            </div>
            <div>
              <h3 className="font-bold text-center">3</h3>
              <span className="font-normal text-base">Đã xem</span>
            </div>
            <div>
              <h3 className="font-bold text-center">6</h3>
              <span className="font-normal text-base">Ưu đãi</span>
            </div>
          </div>
          <div
            style={{ borderTop: "1px solid #DDDDDD" }}
            className="ml-2 mt-1 w-full flex justify-between pl-2 bg-white"
          >
            <h3 className="text-pink-600 mt-3 uppercase font-bold text-sx">
              Tin tức khuyến mãi
            </h3>
          </div>
          <div className="marqueeWrap ml-2 w-full bg-white">
            <div className="marquee  mr-3">
              {titleMarquee.map((title, index) => (
                <article key={index} className="acticleMarquee">
                  <Link className="linkMarquee hover:text-pink-400" to="/">
                    {title}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ContentImg;
