import ListCard from "src/components/list-card";
import { useAppSelector } from "src/redux/config-store";
import css from "./product-feature.module.scss";

function ProductFeature() {
  const list = useAppSelector((state) => state.productReducer.listProduct);

  return (
    <div>
      <h2 className={css["heading"]}>Product Feature</h2>

      {/* {list.map((item) => {
        return <Card key={item.id} data={item} />;
      })} */}

      <ListCard list={list} />
    </div>
  );
}

export default ProductFeature;
