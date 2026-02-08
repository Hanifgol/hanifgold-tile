
import { Service, Review } from './types';

import floorImage from './assets/images/service-floor.jpg';
import wallImage from './assets/images/service-wall.jpg';
import bathroomImage from './assets/images/service-bathroom.jpg';

export const BUSINESS_NAME = "HanifGold Tile & Interior Finishing";
export const PHONE_NUMBER = "+2348063131498";
export const WHATSAPP_LINK = "https://wa.me/2348063131498";
export const EMAIL = "hanofihamod094@gmail.com";

export const SERVICES: Service[] = [
  {
    id: 'floor',
    title: 'Floor Tile Installation',
    description: 'Precision laying for ceramic, porcelain, and marble floor tiles in residential and commercial spaces.',
    icon: 'Layers',
    image: floorImage
  },
  {
    id: 'wall',
    title: 'Wall Tile Installation',
    description: 'Expert wall tiling for aesthetics and durability, ensuring perfectly aligned patterns and joints.',
    icon: 'Home',
    image: wallImage
  },
  {
    id: 'bathroom',
    title: 'Bathroom Tiling',
    description: 'Full wet-room solutions including shower floors, walls, and specialized waterproofing.',
    icon: 'Droplets',
    image: bathroomImage
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Olamide Adeyemi',
    rating: 5,
    comment: 'The finishing is top-notch. They tiled my whole house in Mowe and the alignment is perfect.',
    date: '2 months ago'
  },
  {
    id: '2',
    name: 'Chioma Okeke',
    rating: 5,
    comment: 'Very professional team. They came for inspection first and explained everything clearly.',
    date: '1 month ago'
  }
];

export const BLOG_TOPICS = [
  "5 Things to Consider Before Tiling Your Home in Lagos",
  "The Difference Between Ceramic and Porcelain Tiles",
  "How to Maintain Your Floor Tiles",
  "Tiling a Staircase: Why Professional Installation is Essential"
];
