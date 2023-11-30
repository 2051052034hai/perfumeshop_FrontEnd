import { Row } from "antd";
import { memo, useMemo } from "react";

import SliceProduct from "../SliceProduct";
import CountDownDisplay from "../CountDownDisplay";

//Queries
import { useGetDataProductPage } from "../../../../queries/product/useGetAllProduct";

const ProductSaleTop = () => {

  const filterDataApi = {
    top: 10,
    sort: "-sold",
    arrType: {
      trademark: 'trademark',
    }
  }
  const { data:productData, isLoading } = useGetDataProductPage(
    filterDataApi
  );

  let saleValue = useMemo(() => 1, []);
  return (
    <>
      <div className="bodyProductSale w-full mt-8 relative">
        <Row className="w-full ">
          <div className="flex p-3 w-full">
            <div className="w-1/2">
              <h3 className="text-2xl uppercase text-white font-bold">
                siêu sale bùng nổ
              </h3>
            </div>

            <div className="w-1/2">
              <CountDownDisplay />
            </div>
          </div>
        </Row>
        <Row>
          <div className="flex w-full">
            <div className="p-3">
              <img
                alt="not found"
                className="w-full"
                src="/assets/images/banner_vertical.png"
              ></img>
            </div>
            <div
              style={{ left: "220px", top: "80px", width: "82%" }}
              className="absolute"
            >
              <SliceProduct data={productData} sale={saleValue} />
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default memo(ProductSaleTop);
