import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "src/services/product.service";
import { IProduct } from "./detail.type";
import ListCard from "src/components/list-card";

type TParams = {
  productId: string;
};

function Detail() {
  const params = useParams<TParams>();
  const [productItem, setProductItem] = useState<IProduct>();

  useEffect(() => {
    if (!params.productId) return;

    getProductById(params.productId)
      .then((resp) => {
        setProductItem(resp.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.productId]);

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="image">
          <img
            style={{
              width: 400,
              height: 400,
            }}
            src={productItem?.image}
          />
        </div>
        <div className="content">
          <p>{productItem?.name}</p>
          <p>{productItem?.shortDescription}</p>
        </div>
      </div>
      <div>
        <h2>- Relate Product -</h2>

        {productItem?.relatedProducts && (
          <ListCard list={productItem.relatedProducts} />
        )}
      </div>
    </div>
  );
}

export default Detail;
