import React from "react";
import { companyLogos } from "../constants";

interface Props {
  className?: string;
}

const CompanyLogos: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={logo.id}
          >
            <img src={logo.imageUrl} width={134} height={28} alt={logo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
