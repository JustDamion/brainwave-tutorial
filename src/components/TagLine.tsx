import React from "react";
import brackets from "../assets/svg/Brackets";

interface Props {
  className?: string;
  children?: any;
}

const TagLine: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
