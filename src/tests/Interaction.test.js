import ProductReducer, { getProducts } from '../redux/home';

test('should return the initial state', () => {
  expect(ProductReducer(undefined, { type: undefined })).toEqual({
    products: [],
    filtered: [],
  });
});

test('should handle a products being added to an empty list', () => {
  const previousState = {
    products: [],
    filtered: [],
  };
  const products = [
    {
      id: 'test',
    },
    {
      id: 'test2',
    },
  ];
  expect(ProductReducer(previousState, getProducts(products))).toEqual({
    products: [
      {
        id: 'test',
      },
      {
        id: 'test2',
      },
    ],
    filtered: [],
  });
});
