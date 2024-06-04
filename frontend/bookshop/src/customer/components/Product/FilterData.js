// MOCK DATA

export const color = [
  'white',
  'Black',
  'Red',
  'marun',
  'Being',
  'Pink',
  'Green',
  'Yellow',
]

export const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
      { value: 'yellow', label: 'Yellow' },
    ],
  },
]

export const singleFilter = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '1000-', label: '1999đ To 2999đ' },
      { value: '3999-5000', label: '3999đ To 5000đ' },
      { value: '5000-10000', label: '5000đ To 10000đ' },
      { value: '12000-50000', label: '12000đ To 50000đ' },
      { value: '50000-200000', label: '50000đ To 200000đ' },
      { value: '200000-1000000', label: '200000đ To 1000000đ' },
    ],
  },
  {
    id: 'discount',
    name: 'Discount Range',
    options: [
      {
        value: '10',
        label: '10% And Above',
      },
      { value: '20', label: '20% And Above' },
      { value: '30', label: '30% And Above' },
      { value: '40', label: '40% And Above' },
      { value: '50', label: '50% And Above' },
      { value: '60', label: '60% And Above' },
      { value: '70', label: '70% And Above' },
      { value: '80', label: '80% And Above' },
    ],
  },
  {
    id: 'stock',
    name: 'Availability',
    options: [
      { value: 'in_stock', label: 'In Stock' },
      { value: 'out_of_stock', label: 'Out Of Stock' },
    ],
  },
]

export const sortOptions = [
  { name: 'Price: Low to High', query: 'price_low', current: false },
  { name: 'Price: High to Low', query: 'price_high', current: false },
]
