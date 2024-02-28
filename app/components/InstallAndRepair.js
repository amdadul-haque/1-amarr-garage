import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

const InstallAndRepair = () => {
  return (

    <div className='installandrepair'>
      <SectionTitle title="Installation & Repair" />
      <div className="flex flex-col md:flex-row md:gap-10 items-center justify-center my-20">
        <div className="md:w-1/2 md:mr-4 mb-4 md:mb-0">
          <Link href="https://installation-link.com" passHref>
            <Image src="/images/install.jpg" alt="Installation" width={600} height={400} />
          </Link>
        </div>
        <div className="md:w-1/2">
          <Link href="https://repair-link.com" passHref>
            <Image src="/images/repair.jpg" alt="Repair" width={600} height={400} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstallAndRepair;