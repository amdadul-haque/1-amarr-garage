import React from 'react';
import SectionTitle from './SectionTitle';

const GarageDoors = () => {
  const garageDoorData = [
    { model: "Lincoln 1000", size: "8x7", cost: "$900-$1200", hp: "1/2" },
    { model: "Lincoln 1000", size: "10x7", cost: "$1000-$1300", hp: "1/2" },
    { model: "Lincoln 1000", size: "16x7", cost: "$1600-$2000", hp: "3/4" },
    { model: "Lincoln 1000", size: "18x7", cost: "$1800-$2200", hp: "3/4" }
  ];

  return (
    <div className="my-20 mb-28">
      <SectionTitle title="Garage Doors" />
      <table className="border-collapse border border-gray-400 mx-auto">
        <thead>
          <tr className="bg-brand-main text-white">
            <th className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2">Model</th>
            <th className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2">Size</th>
            <th className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2">Typical Installed Cost</th>
            <th className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2">Recommended Opener HP</th>
          </tr>
        </thead>
        
        <tbody>
          {garageDoorData.map((door, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white hover:bg-gray-200'}>
              <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2">{door.model}</td>
              <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2">{door.size}</td>
              <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2">{door.cost}</td>
              <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2">{door.hp}</td>
            </tr>
          ))}
        </tbody>
      </table >
    </div>
  );
};

export default GarageDoors;
