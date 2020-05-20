const initialState = {
  products: [
    {
      category: "sports stuff",
      price: 100,
      stocked: true,
      name: "swimming trunks",
    },
    {
      category: "sports stuff",
      price: 300,
      stocked: true,
      name: "dumbbells",
    },
    {
      category: "sports stuff",
      price: 85,
      stocked: false,
      name: "bike",
    },
    {
      category: "sports stuff",
      price: 45,
      stocked: true,
      name: "baseball bat",
    },
    {
      category: "sports stuff",
      price: 74,
      stocked: false,
      name: "kimono",
    },
    {
      category: "sports stuff",
      price: 132,
      stocked: false,
      name: "shorts",
    },
    {
      category: "home electronics",
      price: 148,
      stocked: true,
      name: "ipod touch",
    },
    {
      category: "home electronics",
      price: 416,
      stocked: false,
      name: "ihone 5",
    },
    {
      category: "home electronics",
      price: 199.9,
      stocked: true,
      name: "nexus 7",
    },
    {
      category: "home electronics",
      price: 96,
      stocked: true,
      name: "samsung",
    },
    {
      category: "home electronics",
      price: 116,
      stocked: true,
      name: "sony z2",
    },
    {
      category: "video games",
      price: 30,
      stocked: true,
      name: "gta 3",
    },
    {
      category: "video games",
      price: 50,
      stocked: true,
      name: "counter strike",
    },
    {
      category: "video games",
      price: 150,
      stocked: false,
      name: "pubg",
    },
    {
      category: "video games",
      price: 150,
      stocked: true,
      name: "mortal kombat",
    },
  ],
  filterName: "",
  filterPrice: 1000,
  filterCategory: "",
  inStockOnly: false,
};
console.log();
const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IN_STOCK_ONLY":
      return {
        ...state,
        inStockOnly: action.inStockOnly,
      };
    case "FILTER_BY_NAME":
      return {
        ...state,
        filterName: action.name,
      };
    case "FILTER_BY_PRICE":
      return {
        ...state,
        filterPrice: action.price,
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filterCategory: action.category,
      };
    default:
      return state;
  }
};

export default tableReducer;
