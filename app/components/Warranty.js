import React from 'react'
import {
  FaClock,
  FaShieldAlt,
  FaBan,
  FaTools,
  FaHammer,
  FaUserFriends
} from 'react-icons/fa';
import SectionTitle from './SectionTitle';


const Warranty = () => {
  const warrantyFeatures = [
    {
      name: "Duration",
      description: "The duration of the warranty may vary depending on the specific model of the garage door. It's common for Amarr to offer warranties ranging from one year to limited lifetime coverage.",
      icon: FaClock
    },
    {
      name: "Coverage",
      description: "The warranty typically covers defects in materials and workmanship under normal use and service. This may include issues such as rust-through of steel sections, delamination of insulation, and defects in hardware or components.",
      icon: FaShieldAlt
    },
    {
      name: "Exclusions",
      description: "Certain items or conditions may be excluded from the warranty coverage. For example, damage caused by accidents, improper installation, misuse, or alterations to the door may not be covered.",
      icon: FaBan
    },
    {
      name: "Remedies",
      description: "In the event of a valid warranty claim, Amarr may provide remedies such as repair, replacement, or refund of the defective part or product, at their discretion.",
      icon: FaTools
    },
    {
      name: "Registration",
      description: "Some warranties may require registration of the garage door with Amarr within a certain timeframe after purchase to activate the warranty coverage. It's essential to review the warranty terms and follow any registration requirements to ensure coverage.",
      icon: FaHammer
    },
    {
      name: "Authorized Service Providers",
      description: "Warranty service and repairs are typically performed by authorized Amarr dealers or service providers. Attempting to repair or modify the garage door yourself or using unauthorized service providers may void the warranty.",
      icon: FaUserFriends
    }
  ];
  return (
    <div className='py-16 pt-20' id="warranty">
      <SectionTitle title="Warranty" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {warrantyFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-gray-100 rounded-full">
              {<feature.icon className="text-2xl md:text-3xl text-brand-main" />}
            </div>
            <div>
              <h3 className="textlg md:text-xl text-text-dark font-semibold mb-3">{feature.name}</h3>
              <p className="text-base text-text-light">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Warranty