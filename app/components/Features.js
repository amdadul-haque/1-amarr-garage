import React from 'react'

import {
  FaHammer,
  FaThermometerHalf,
  FaPalette,
  FaWindowMaximize,
  FaTools,
  FaShieldAlt,
  FaCloudSunRain,
  FaClipboardCheck
} from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const features = [
  {
    name: "Material Options",
    description: "Amarr offers garage doors made from various materials including steel, wood, and aluminum. Each material has its own unique characteristics and benefits in terms of durability, appearance, and maintenance requirements.",
    icon: FaHammer
  },
  {
    name: "Insulation",
    description: "Many Amarr garage doors come with insulation options to help improve energy efficiency and provide better temperature control inside the garage. Insulated doors also offer enhanced noise reduction, making them quieter during operation.",
    icon: FaThermometerHalf
  },
  {
    name: "Panel Designs",
    description: "Amarr offers a wide range of panel designs and styles to suit different architectural preferences and home aesthetics. Whether you prefer traditional raised panel designs, contemporary flush panels, or carriage house style doors, Amarr has options to match your taste.",
    icon: FaPalette
  },
  {
    name: "Window Inserts",
    description: "Some Amarr garage doors feature window inserts that add natural light to the garage interior and enhance the overall appearance of the door. Window inserts come in various shapes, sizes, and designs to complement different door styles.",
    icon: FaWindowMaximize
  },
  {
    name: "Hardware Options",
    description: "Amarr offers a selection of decorative hardware options such as handles, hinges, and decorative straps to customize the look of your garage door and add visual interest.",
    icon: FaTools
  },
  {
    name: "Safety Features",
    description: "Amarr prioritizes safety by incorporating features such as pinch-resistant panels, tamper-resistant bottom brackets, and safety sensors to prevent accidents and injuries during operation. Safety sensors detect obstructions in the door's path and automatically reverse its direction to avoid collisions.",
    icon: FaShieldAlt
  },
  {
    name: "Weather Seals",
    description: "Amarr garage doors are equipped with weather seals along the bottom edge and sides to help keep out drafts, moisture, and debris, thereby improving the overall comfort and cleanliness of the garage space.",
    icon: FaCloudSunRain
  },
  {
    name: "Warranty",
    description: "Amarr typically offers warranties on their garage doors, providing customers with peace of mind knowing that their investment is protected against manufacturing defects. Warranty terms may vary depending on the specific model and configuration.",
    icon: FaClipboardCheck
  }
];

// Example of accessing the features array
console.log(features[0].name); // Output: Material Options
console.log(features[0].description); // Output: Amarr offers garage doors made from various materials including steel, wood, and aluminum...
console.log(features[0].icon); // Output: [Function: FaHammer]


const Features = () => {

  return (
    <div className='py-20'>
      <SectionTitle
        text='Key Features'
      />
      <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
        {features.map((feature, index) => (
          <div key={index} className='flex flex-col items-center border hover:border-brand-main px-4 py-6 gap-6 hover:shadow-lg  hover:scale-105 transition-all duration-300'>
            <feature.icon className='text-[40px] text-brand-main' />
            <h4 className='text-center text-text-dark font-bold text-2xl'>{feature.name}</h4>
            <p className='text-center text-text-light'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features

// Material Options: Amarr offers garage doors made from various materials including steel, wood, and aluminum. Each material has its own unique characteristics and benefits in terms of durability, appearance, and maintenance requirements.
// Insulation: Many Amarr garage doors come with insulation options to help improve energy efficiency and provide better temperature control inside the garage. Insulated doors also offer enhanced noise reduction, making them quieter during operation.
// Panel Designs: Amarr offers a wide range of panel designs and styles to suit different architectural preferences and home aesthetics. Whether you prefer traditional raised panel designs, contemporary flush panels, or carriage house style doors, Amarr has options to match your taste.
// Window Inserts: Some Amarr garage doors feature window inserts that add natural light to the garage interior and enhance the overall appearance of the door. Window inserts come in various shapes, sizes, and designs to complement different door styles.
// Hardware Options: Amarr offers a selection of decorative hardware options such as handles, hinges, and decorative straps to customize the look of your garage door and add visual interest.
// Safety Features: Amarr prioritizes safety by incorporating features such as pinch-resistant panels, tamper-resistant bottom brackets, and safety sensors to prevent accidents and injuries during operation. Safety sensors detect obstructions in the door's path and automatically reverse its direction to avoid collisions.
// Weather Seals: Amarr garage doors are equipped with weather seals along the bottom edge and sides to help keep out drafts, moisture, and debris, thereby improving the overall comfort and cleanliness of the garage space.
// Warranty: Amarr typically offers warranties on their garage doors, providing customers with peace of mind knowing that their investment is protected against manufacturing defects. Warranty terms may vary depending on the specific model and configuration.
// These are just some of the features commonly found in Amarr garage doors. Depending on the specific model and options chosen, additional features may be available to further enhance performance, convenience, and aesthetics.