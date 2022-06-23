type OptionsSelect =
  | {
      value: string | number;
      label: 'Category 1' | 'Category 2' | 'Category 3';
    }
  | {
      value: string | number;
      label: 'In stock' | 'No stock';
    };

export interface FormInput {
  id: number;
  label: string;
  type: string;
  placeholder?: string;
  htmlFor?: string;
  name?: string;
  value?: string;
  options?: OptionsSelect[];
}

export const userInputs: FormInput[] = [
  {
    id: 1,
    label: 'Username',
    type: 'text',
    placeholder: 'john_doe',
    htmlFor: 'username',
  },
  {
    id: 2,
    label: 'Name and surname',
    type: 'text',
    placeholder: 'John Doe',
    htmlFor: 'name_surname',
  },
  {
    id: 3,
    label: 'Email',
    type: 'email',
    placeholder: 'john_doe@gmail.com',
    htmlFor: 'email',
  },
  {
    id: 4,
    label: 'Phone',
    type: 'tel',
    placeholder: '+1 234 567 89',
    htmlFor: 'phone',
  },
  {
    id: 5,
    label: 'Password',
    type: 'password',
    htmlFor: 'password',
  },
  {
    id: 6,
    label: 'Address',
    type: 'text',
    placeholder: 'Elton St. 216 NewYork',
    htmlFor: 'address',
  },
  {
    id: 7,
    label: 'Country',
    type: 'text',
    placeholder: 'USA',
    htmlFor: 'country',
  },
];

export const productInputs: FormInput[] = [
  {
    id: 1,
    label: 'Title',
    type: 'text',
    placeholder: 'Apple Macbook Pro',
    htmlFor: 'title',
  },
  {
    id: 2,
    label: 'Description',
    type: 'text',
    placeholder: 'Description',
    htmlFor: 'description',
  },

  // Select with opts
  {
    id: 3,
    type: 'select',
    name: 'category',
    label: 'Category',
    value: '',
    options: [
      { value: 'category1', label: 'Category 1' },
      { value: 'category2', label: 'Category 2' },
      { value: 'category3', label: 'Category 3' },
    ],
  },
  {
    id: 4,
    label: 'Price',
    type: 'number',
    placeholder: '$ 100',
    htmlFor: 'price',
  },
  {
    id: 5,
    type: 'select',
    name: 'stock',
    label: 'Stock',
    value: '',
    options: [
      { value: 'inStock', label: 'In stock' },
      { value: 'noStock', label: 'No stock' },
    ],
  },
];
