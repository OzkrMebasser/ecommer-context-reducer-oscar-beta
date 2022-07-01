import React, { useReducer, createContext, useContext } from "react";
import { tours } from "../apis/tours";
// import { isEmpty } from "../actions/objectIsEmpty";

export const ProductsContext = createContext();

let initialState = {
  tours: tours,
  category: "",
  price: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PRICE_LOW_HIGH":
      return {
        ...state,
        tours: state.tours.sort((a, b) => a.price - b.price),
      };
    case "PRICE_HIGH_LOW":
      return {
        ...state,
        tours: state.tours.sort((a, b) => b.price - a.price),
      };
    case "NAME":
      return {
        ...state,
        tours: state.tours.sort((a, b) => a.title.localeCompare(b.title)),
      };
      case "FILTER_BY_CATEGORY":
      return {
        ...state,
        tours: state.tours.sort((a, b) => a.category.localeCompare(b.category)),
      };
    case "FILTER_BY_PRICE":
      if (!state.category) {
        return {
          ...state,
          price: { ...action.prices },
          tours: tours.filter((a) => {
            return (
              !(a.price < parseInt(action.prices.a)) &&
              !(a.price > parseInt(action.prices.b))
            );
          }),
        };
      }
      if (state.category) {
        return {
          ...state,
          price: { ...action.prices },
          tours: tours.filter((a) => {
            return (
              !(a.price < parseInt(action.prices.a)) &&
              !(a.price > parseInt(action.prices.b)) &&
              a.category === state.category.toLowerCase()
            );
          }),
        };
      }
      break;
    // case "FILTER_BY_CATEGORY":
    //   if (isEmpty(state.price)) {
    //     return {
    //       ...state,
    //       category: action.cat,
    //       products: products.filter((a) => {
    //         return a.category === action.cat.toLowerCase();
    //       }),
    //     };
    //   } else if (!isEmpty(state.price)) {
    //     return {
    //       ...state,
    //       category: action.cat,
    //       products: products.filter((a) => {
    //         return (
    //           a.category === action.cat.toLowerCase() &&
    //           !(a.price < parseInt(state.price.a)) &&
    //           !(a.price > parseInt(state.price.b))
    //         );
    //       }),
    //     };
    //   }
    //   break;
    case "CLEAR_FILTERS":
      return { ...state, tours, price: "", category: "" };
    default:
      throw new Error();
  }
};

export const ResultsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ dispatch, state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useTours = () => useContext(ProductsContext);
