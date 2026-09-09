import foodLemon from '../assets/images/food-lemon.jpg'
import foodTropicalPop from '../assets/images/food-tropical-pop.jpg'
import foodMangoPop from '../assets/images/food-mango-pop.jpg'

// Real photos only — Ayaan is sending more, so several items are still `image: null`
// until a real shot exists. Do not fall back to the earlier AI concept-art crops.
export const menuItems = [
  {
    name: 'Fresh Whole Fruit Ice Cream',
    price: 32,
    flavors: 'Mango, Pineapple, Guava, Orange, Lemon, Watermelon.',
    image: foodLemon,
    accent: 'lab-pink',
  },
  {
    name: 'Matka Kulfi',
    price: 15,
    flavors: 'Ras Malai, Gulab Jamun, Gajar Ka Halwa.',
    image: null,
    accent: 'energy-orange',
  },
  {
    name: 'Fresh Cut Fruit Popsicles',
    price: 15,
    flavors: 'Strawberry / Blueberry / Raspberry — lemon base. Mango / Pineapple / Strawberry — lemon base.',
    image: foodTropicalPop,
    accent: 'chuski-blue',
  },
  {
    name: 'Kulfi Sticks',
    price: 12,
    flavors: 'Malai Delight, Paan Masti, Kesar Mixed Dry Fruit.',
    image: null,
    accent: 'neon-teal',
  },
  {
    name: 'Single Flavored Fruit Popsicles',
    price: 12,
    flavors: 'Orange, Lychee, Mango, Kala Khatta, Kairi Kaccha Aam, Jamun.',
    image: foodMangoPop,
    accent: 'neon-teal',
  },
  {
    name: 'Chuski',
    price: 12,
    flavors: 'Orange, Kala Khatta.',
    image: null,
    accent: 'chuski-blue',
  },
  {
    name: 'Kulfi Bombs',
    price: 10,
    flavors: 'Paan Masti, Green Guava / Chilli, Gulkand, Kesar Mixed Dry Fruit, Jamun, Mango.',
    image: null,
    accent: 'energy-orange',
  },
]
