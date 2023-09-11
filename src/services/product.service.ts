import { axiosWithoutAuth } from "./config.service";

// async: luôn luôn trả về một promise
export const getAllProduct = async () => {
  try {
    const resp = await axiosWithoutAuth("/product");
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: string | number) => {
  try {
    const resp = await axiosWithoutAuth(`/Product/getbyid?id=${id}`);

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
