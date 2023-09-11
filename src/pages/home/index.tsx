import { useEffect } from "react";
import { getAllProduct } from "src/services/product.service";
import HomeCarousel from "./home-carousel";
import ProductFeature from "./product-feature";

// useSelector: lấy store từ trên redux về
// useDispatch: set lại state trên redux
import { useDispatch } from "react-redux";
import { useAppSelector } from "src/redux/config-store";
import { setListProduct } from "src/redux/slices/product.slice";

function Home() {
  const listProduct = useAppSelector((state) => {
    return state.productReducer.listProduct;
  });

  const dispatch = useDispatch();

  // useEffect không cho sử dụng async trực tiếp.
  useEffect(() => {
    // getAllProduct().then((resp) => {
    //   console.log("resp", resp);
    // });

    // Cách 1: mong muốn sử dụng async await - Tạo function
    // const get = async () => {
    //   const resp = await getAllProduct();

    //   console.log(resp);
    // };
    // getAllProduct là function async nên giá trị trả về luôn là một promise;

    // get();

    // Cách 2: mong muốn sử dụng async await - IIFE
    (async () => {
      const resp = await getAllProduct();

      const action = setListProduct(resp.content);

      dispatch(action);
    })();
  }, []);

  return (
    <div>
      <HomeCarousel />
      <ProductFeature />
    </div>
  );
}

export default Home;
