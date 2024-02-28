import React from 'react';
import SectionTitle from './SectionTitle';

const Colors = () => {
  const colorOptions = [
    {
      name: "White",
      description: "A classic choice that provides a clean and timeless look, suitable for a wide range of home styles.",
      color: "#FFFFFF"
    },
    {
      name: "Almond",
      description: "A warm, neutral color that adds a touch of elegance and blends well with many exterior color schemes.",
      color: "#FFEBCD"
    },
    {
      name: "Sandtone",
      description: "A sandy beige color that offers a natural and earthy appearance, complementing outdoor surroundings.",
      color: "#F5DEB3"
    },
    {
      name: "Desert Tan",
      description: "A light tan shade with subtle brown undertones, providing a soft and inviting look.",
      color: "#F5DEB3"
    },
    {
      name: "Terratone",
      description: "A rich brown color that adds depth and warmth to the exterior of a home, ideal for traditional or rustic designs.",
      color: "#8B4513"
    },
    {
      name: "Gray",
      description: "A modern and versatile option that can create a sleek and contemporary look.",
      color: "#808080"
    },
    {
      name: "Black",
      description: "A bold and dramatic choice that adds contrast and visual interest to the exterior of a home.",
      color: "#000000"
    },
    {
      name: "Walnut",
      description: "A dark brown color with rich tones, offering a luxurious and upscale appearance.",
      color: "#663300"
    },
    {
      name: "Woodgrain Finishes",
      description: "Amarr also offers garage doors with woodgrain finishes that replicate the natural look of wood, including various shades such as oak, mahogany, and cedar.",
      color: "#663300"
    }
  ];

  return (
    <div className='py-16 pt-20' id='colors'>
      <SectionTitle title="Color Options" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {colorOptions.map((colorOption, index) => (
          <div key={index} className="flex items-center bg-gray-50 p-4 rounded-md shadow-md">
            <div className="rounded-full min-w-12 min-h-12 mr-4 shadow" style={{ backgroundColor: colorOption.color }}></div>
            <div>
              <h3 className="text-xl text-text-dark font-semibold">{colorOption.name}</h3>
              <p className="text-text-light">{colorOption.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
