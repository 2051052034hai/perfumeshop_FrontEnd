import { Col, Row } from "antd";

const Footer = () => {
  const content1 = [
    "Mua hàng",
    "Đổi trả",
    "Tư vấn sản phẩm",
    "Sỉ lẽ sản phẩm",
    "Tư vấn khác",
  ];
  const content2 = [
    "Chứng chỉ cửa hàng",
    "Mua hàng",
    "Phương thức thanh toán",
    "Điều khoản mua bán",
    "Tích điểm đổi quà",
    "Săn sale siêu tốc",
  ];

  return (
    <>
      <div className="pt-3" style={{ borderTop: "1px solid #DDDDDD" }}>
        <Row className="w-11/12 m-auto p-0 pl-12 pr-20">
          <Col lg={7}>
            <div className="w-6/12 ">
              <img className="w-full" src="/assets/images/logo.png"></img>
            </div>
            <p className="opacity-40 font-medium my-4 text-justify">
              Hãy sống trọn vẹn mỗi ngày Một cuộc sống tuyệt vời đôi khi bắt
              nguồn từ chính chúng ta. Cuộc sống đẹp hơn khi ta tự tin hơn với
              bản thân. Khi ta yêu bản thân nhiều hơn. Mỗi ngày chăm sóc bản
              thân chính là bí quyết giúp người phụ nữ trở nên lạc quan tự tin.
            </p>
            <h3 className="text-lg font-bold ">
              Bạn cần hỗ trợ ? Gọi chúng tôi 24/7
            </h3>
            <h3 className="text-pink-600 font-bold text-xl">0865028574</h3>
            <h3 className="font-bold text-base mt-2">Thông tin địa chỉ</h3>
            <p className="font-medium opacity-40 mt-1">
              14/9 Đào Duy Anh, P9, Quận Phú Nhuận, HCM
            </p>
          </Col>
          <Col lg={5}>
            <div >
              <ul className="text-base ml-14">
                <li className="font-bold mb-3">Hỗ trợ</li>
                {content1.map((title, index) => (
                  <li key={index} className="mt-3 opacity-40 font-medium">
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={5}>
            <ul className="ml-2 text-base">
              <li className="font-bold mb-3">Chính sách</li>
              {content2.map((title, index) => (
                <li key={index} className="mt-3 opacity-40 font-medium">
                  {title}
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={7}>
            <h3 className="text-base font-bold mb-3">
              Nhận tin khuyến mãi
            </h3>

            <div className="w-full">
              <label className="font-medium opacity-50">
                Hỗ trợ khách hàng 24/7
              </label>
              <input
                style={{ border: "1px solid #DDDDDD" }}
                className="block w-full p-2 rounded-md mt-1 mb-4"
                type="text"
                placeholder="Nhập email của bạn"
              ></input>
              <button className="bg-pink-600 text-white block w-full font-meidum text-base p-2 rounded-md">
                Đăng ký
              </button>
            </div>

            <div>
              <h3 className="font-bold mt-4 mb-1 text-base">
                Theo dõi chúng tôi
              </h3>
              <div className="flex">
                <div className="p-1 w-8">
                  <img
                    className="w-full"
                    src="/assets/images/facebook.png"
                  ></img>
                </div>
                <div className="p-1 w-8">
                  <img
                    className="w-full"
                    src="/assets/images/instagram.png"
                  ></img>
                </div>
                <div className="p-1 w-8">
                  <img
                    className="w-full"
                    src="/assets/images/youtube.png"
                  ></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-3" style={{ borderTop: "1px solid #DDDDDD" }}>
            <h3 className="text-xs p-1 opacity-60">Bản quyền thuộc về <span className="text-pink-600 font-medium">@NTH</span></h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
