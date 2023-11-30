import { memo } from "react";
import { get, update, remove, create } from "./https";

const pathUrl = "/products/";

export const getProductsPage = async (data) => {
  const { arrType, page, pageSize, keyWord, category, shopId, sort, top } =
    data;
  let url = `${pathUrl}?`;
 
  if (arrType !== undefined && Object.keys(arrType).length > 0) {
    const { trademark } = arrType;
    url += `populate=${trademark}&`;
  }

  if (page !== undefined && pageSize !== undefined) {
    url += `page=${page}&limit=${pageSize}&`;
  }

  if (keyWord !== undefined) {
    url += `title=${keyWord}&`;
  }

  if (category !== undefined) {
    url += `category=${category}&`;
  }

  if (shopId !== undefined) {
    url += `shop=${shopId}&`;
  }

  if (top !== undefined) {
    url += `limit=${top}&`;
  }

  if (sort !== undefined) {
    url += `sort=${sort}`;
  }
  const result = await get(url);
  return result.data;
};

// export const getProductsById = async (id) => {
//   const result = await get(`${pathUrl}${id}?populate=subcategory,shop`)
//   return result.data.data
// }

// export const getTopSaleProduct = async () => {
//   const result = await get('/products/topsale')
//   return result.data
// }

// export const updateProduct = async (product) => {
//   const { shop, page, pageSize, ...other } = product
//   const result = await update(pathUrl, other)
//   return result.data
// }

// export const deleteProduct = async (id) => {
//   const result = await remove(`${pathUrl}${id}`)
//   return result.data.data
// }

// export const createProduct = async (data) => {
//   const formData = new FormData()

//   // Thêm thông tin sản phẩm vào FormData
//   formData.append('description', data.description)
//   formData.append('discountPercentage', data.discountPercentage)
//   formData.append('price', data.price)
//   formData.append('shop', data.shop)
//   formData.append('stock', data.stock)
//   formData.append('subcategory', data.subcategory)
//   formData.append('title', data.title)

//   // Thêm tệp tin sản phẩm vào FormData
//   formData.append('thumbnail', data.thumbnail)
//   for (let image of data.images) {
//     formData.append('images', image)
//   }

//   // Cấu hình Axios request
//   const config = {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   }
//   const result = await create(pathUrl, formData, config)
//   return result.data.data
// }
