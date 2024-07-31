import React from "react";
import logos from "../../assets/images/logos.svg";
import digicert from "../../assets/images/digicert.svg";

const Footer = () => {
  const footerLinks = [
    { text: "Home", url: "#" },
    { text: "All products", url: "#" },
    { text: "Featured products", url: "#" },
    { text: "About Us", url: "#" },
    { text: "Contact", url: "#" },
  ];
  return (
    <>
      <div className="p-12 bg-black text-white">
        <h1 className="text-[18px] font-extrabold">
          <span className="text-gray-600">RIGHT</span>FIT.COM
        </h1>
        <div className="grid grid-cols-3 mt-4">
          <div className="col-span-2 flex text-sm font-normal">
            <div className="flex gap-2">
              <ul>
                {footerLinks.map((item, index) => {
                  return (
                    <li className="mb-2" key={index}>
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="ml-24">
              We are a registered E-Commerce seller and we support a variety of
              Local and International payment modes
              <img src={logos} alt="logo" />
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center text-sm font-normal">
            Website protected by
            <img src={digicert} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
