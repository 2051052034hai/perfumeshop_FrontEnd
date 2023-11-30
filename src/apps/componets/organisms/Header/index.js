//Libaries
import React from "react";
import { Col, Row } from "antd";
import {
  RightOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

//Molecules
import ContentImg from "../../molecules/ContentImg/index";

//Queries
import { useGetDataCategory } from "../../../queries/category/useGetDataCategory";
import { useEffect, useState } from "react";

const Header = () => {
  const isRootPath = useLocation().pathname === "/";
  const { data, isLoading } = useGetDataCategory();
  const [cateData, setCateData] = useState();
  const arrTitle = ["Sản phẩm", "Mỹ phẩm", "Hệ thống", "Liên hệ", "Tin tức"];

  useEffect(() => {
    setCateData(data);
  }, [data]);
  return (
    <>
      <header>
        <nav>
          <Row>
            <div>
              <img src="/assets/images/banner_top.webp"></img>
            </div>
          </Row>
          <Row className="items-center w-11/12 m-auto p-0 pl-12">
            <Col lg={7} className="flex">
              <div className="w-8/12 p-2">
                <Link to="/">
                  <img src="/assets/images/logo.png"></img>
                </Link>
              </div>
              <div className="w-8/12 p-3 ml-2">
                <img src="/assets/images/anhDong.webp"></img>
              </div>
            </Col>
            <Col lg={7} className="w-full flex ml-1">
              <input
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full outline-none cursor-pointer rounded-tl-lg rounded-bl-lg py-1 px-2 text-base border-pink-500 border-solid border"
                type="text"
              />
              <span className="text-2xl rounded-tr-lg rounded-br-lg text-white bg-pink-500 py-1 px-3">
                <SearchOutlined />
              </span>
            </Col>
            <Col lg={4} className="flex ml-4 m-auto">
              <div className="mx-2">
                <img
                  className="w-8 mt-2 mr-1"
                  src="/assets/images/ct-time.png"
                ></img>
              </div>
              <div>
                <p className="font-bold uppercase">Thời gian mở cửa</p>
                <span>8h - 21h Từ T2 - CN</span>
              </div>
            </Col>
            <Col lg={4} className="flex ml-3">
              <div>
                <span className="text-3xl text-pink-500">
                  <UsergroupAddOutlined />
                </span>
                <h3>Tài khoản</h3>
              </div>
              <div className="ml-8">
                <Link to="/cart">
                  <span className="text-3xl text-pink-500 relative">
                    <ShoppingCartOutlined />
                    <span className="inline-block w-5 h-5 rounded-full bg-pink-500 absolute top-0 right-0 left-5 flex items-center justify-center text-white text-xs">
                      0
                    </span>
                  </span>
                  <h3>Giỏ hàng </h3>
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="w-11/12 m-auto">
            <Col lg={5} className="ml-12">
              <ul className="styleShadow ">
                <li className="bg-pink-500 text-white text-center py-2 px-5 rounded-tl-lg rounded-tr-lg font-bold text-md uppercase">
                  Danh mục sản phẩm
                </li>
                {isRootPath ? (
                  cateData?.map((item, index) => (
                    <li key={index} className="hover:bg-pink-300 pl-1">
                      <Link
                        to="/product"
                        className="hover:text-white text-black"
                      >
                        <div className="flex items-center py-2">
                          <img
                            className="w-6"
                            src={
                              index === 0
                                ? `/assets/images/favi${index + 1}.png`
                                : `/assets/images/favi${index + 1}.png`
                            }
                            alt={`favi${index}`}
                          />
                          <span className="font-normal ml-1">{item.name}</span>
                          {index === 0 && (
                            <span
                              style={{ fontSize: "13px" }}
                              className="ml-auto pr-1 font-bold"
                            >
                              <RightOutlined />
                            </span>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))
                ) : (
                  <>
                    <div className="w-full hidden absolute z-50 bg-white divHover">
                      {cateData?.map((item, index) => (
                        <li key={index} className="hover:bg-pink-300 pl-1">
                          <Link
                            to="/product"
                            className="hover:text-white text-black"
                          >
                            <div className="flex items-center py-2">
                              <img
                                className="w-6"
                                src={
                                  index === 0
                                    ? `/assets/images/favi${index + 1}.png`
                                    : `/assets/images/favi${index + 1}.png`
                                }
                                alt={`favi${index}`}
                              />
                              <span className="font-normal ml-1">
                                {item.name}
                              </span>
                              {index === 0 && (
                                <span
                                  style={{ fontSize: "13px" }}
                                  className="ml-auto pr-1 font-bold"
                                >
                                  <RightOutlined />
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </div>
                  </>
                )}
              </ul>
            </Col>
            <Col lg={17} className="ml-3">
              <ul className="flex w-9/12">
                <li className="w-full font-bold text-sm bg-pink-100 text-pink-500 mx-2 rounded-lg text-center p-2">
                  <Link>Trang chủ</Link>
                </li>
                {arrTitle.map((title, index) => (
                  <li
                    key={index}
                    className="w-full font-bold text-base mx-2 rounded-lg text-center p-2 "
                  >
                    <Link>{title}</Link>
                  </li>
                ))}
              </ul>
              {isRootPath && (
                <div className="w-full">
                  <ContentImg />
                </div>
              )}
            </Col>
          </Row>
        </nav>
      </header>
       
    </>
  );
};

export default Header;
