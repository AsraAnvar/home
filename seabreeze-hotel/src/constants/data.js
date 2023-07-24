import images from './images';

const ocean = [
  {
    title: 'Grilled Salmon',
    price: 'Rs.500/=',
    tags: 'Grilled | Salmon | Seafood | Healthy',
  },
  {
    title: 'Garlic Shrimp Scampi',
    price: 'Rs.400/=',
    tags: 'Shrimp | Scampi | Garlic | Seafood',
  },
  {
    title: 'Lemon Butter Lobster Tail',
    price: 'Rs.300/=',
    tags: 'Lobster | Lemon Butter | Seafood',
  },
  {
    title: 'Crispy Calamari Rings',
    price: 'Rs.450/=',
    tags: 'Calamari | Rings | Crispy | Seafood',
  },
  {
    title: 'Seafood Paella',
    price: 'Rs.250/=',
    tags: ' Paella | Seafood | Rice | Flavorful',
  },
];

const cocktails = [
  {
    title: 'Grilled Mahi-Mhiz',
    price: 'Rs.350/=',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: 'Coconut Shrimp',
    price: 'Rs.250/=',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Clam Chowder',
    price: 'Rs.150/=',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Lobster Bisque',
    price: 'Rs.350/=',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Steamed Mussels',
    price: 'Rs.450/=',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const features = [
  {
    imgUrl: images.feature01,
    title: 'Receptionist',
    subtitle: 'Your Welcoming Guide: Meet Our Friendly Front Desk Team.',
  },
  {
    imgUrl: images.feature02,
    title: 'Morning Tea',
    subtitle: 'Awaken Your Senses: Enjoy Our Complimentary Morning Tea.',
  },
  {
    imgUrl: images.feature03,
    title: 'Luggage',
    subtitle: 'Travel with Ease: Let Us Handle Your Luggage Hassle.',
  },
  {
    imgUrl: images.feature04,
    title: 'Playground',
    subtitle: 'Fun & Adventure for All Ages: Discover Our Playful Playground.',
  },
];

export default { ocean, cocktails, features };
