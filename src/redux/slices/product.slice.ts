import { createSlice } from "@reduxjs/toolkit";
import { TCardItem } from "src/types";

type TState = {
  listProduct: TCardItem[];
};

const initialState: TState = {
  listProduct: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    // name + reducer: productSlice/setListProduct
    setListProduct: (state, action) => {
      // redux + immer: giúp chúng ta clone object, không cần quan tâm đến địa chỉ.
      // không cần dùng return
      state.listProduct = action.payload;

      // Cách cũ. có return
      // return {
      //   ...state,
      //   listProduct: action.payload,
      // };
    },
  },
});

// action creator
export const { setListProduct } = productSlice.actions;

export default productSlice.reducer;

// ----- Cách tạo ra create slice -----
const __createSlice = () => {
  return {
    reducer: (state = initialState, action: any) => {
      switch (action.type) {
        case "": {
          //
        }
      }
    },
  };
};

const number = 1;

// cham hon, do ton tai nguyen
switch (number) {
  case 1: {
    console.log("so mot");
    break;
  }
  default:
    console.log("....");
}
// nhanh hon, ton tai nguyen
const obj = {
  "1": () => {
    console.log("so mot");
  },
  "2": () => {
    console.log("so hai");
  },
};

obj[1]();

// mapper
