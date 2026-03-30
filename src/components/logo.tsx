// src/components/logo.tsx

import tmklogo from "../assets/tmk.png";

const Logo = () => {
  return (
    <div>
      <img src={tmklogo} alt="TMK Logo" className="w-20 h-10" />
    </div>
  );
};

export default Logo;
