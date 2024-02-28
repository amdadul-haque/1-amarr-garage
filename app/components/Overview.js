import React from 'react';
import SectionTitle from './SectionTitle';

const Overview = () => {
  const sections = [
    {
      title: "Product Variety",
      description: "Amarr offers a diverse selection of garage door styles, materials, colors, and designs to suit various architectural preferences and home styles. They provide options such as traditional steel doors, carriage house style doors, wood doors, and contemporary aluminum doors."
    },
    {
      title: "Durability and Quality",
      description: "Amarr garage doors are known for their durability and high-quality construction. They use premium materials and innovative manufacturing techniques to ensure long-lasting performance even in harsh weather conditions."
    },
    {
      title: "Insulation Options",
      description: "Many Amarr garage doors come with insulation options, which can help improve energy efficiency and provide better temperature control inside the garage. Insulated doors also offer enhanced noise reduction."
    },
    {
      title: "Safety Features",
      description: "Amarr prioritizes safety by incorporating features such as pinch-resistant panels and tamper-resistant bottom brackets to prevent accidents and injuries during operation."
    },
    {
      title: "Customization",
      description: "Customers have the option to customize their garage doors according to their preferences. This includes choosing different panel designs, window styles, decorative hardware, and various color options to complement their home's exterior."
    },
    {
      title: "Warranty",
      description: "Amarr typically offers warranties on their garage doors, providing customers with peace of mind knowing that their investment is protected against manufacturing defects."
    },
    {
      title: "Professional Installation",
      description: "Amarr garage doors are typically installed by authorized dealers or professional installers to ensure proper fitting and functionality."
    },
    {
      title: "Maintenance",
      description: "While Amarr garage doors are designed for durability, regular maintenance such as lubrication and inspection of hardware is recommended to keep them operating smoothly and to prolong their lifespan."
    }
  ];

  return (
    <div className="py-16 pt-20" id='overview'>
      <SectionTitle title="Overview" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="border border-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <p className="text-text-gray">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
