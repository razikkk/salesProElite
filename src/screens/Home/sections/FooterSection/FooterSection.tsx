import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Contact Us" },
];

const legalLinks = [{ label: "Terms Of Service" }, { label: "Privacy Policy" }];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full flex flex-col gap-16 overflow-hidden 
  bg-[linear-gradient(180deg,rgba(4,85,143,0.5)_0%,rgba(4,85,143,1)_62%,rgba(4,85,143,1)_100%)] 
  py-16">

  <img
    className="w-full h-16 object-cover"
    alt="Top container"
    src="/top-container.svg"
  />

  {/* CONTENT */}
  <div className="w-full px-5 sm:px-10 lg:px-[60px]">
    <div className="
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      gap-10 sm:gap-12 lg:gap-8
    ">

      {/* QUICK LINKS */}
      <nav className="flex flex-col gap-5">
        <h3 className="font-medium text-[#ffffff80] text-xl">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-3">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="font-medium text-white text-lg hover:text-[#ffffff80] transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* LEGAL LINKS */}
      <nav className="flex flex-col gap-5">
        <h3 className="font-medium text-[#ffffff80] text-xl">
          Legal Links
        </h3>
        <ul className="flex flex-col gap-3">
          {legalLinks.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="font-medium text-white text-lg hover:text-[#ffffff80] transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* SOCIAL */}
      <div className="flex flex-col gap-5">
        <h3 className="font-medium text-[#ffffff80] text-xl">
          Stay connect
        </h3>

        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/salesproelite?igsh=OGYwaWZxdmxjOTF2&utm_source=qr" target="_blank">
            <FaInstagram className="text-white w-6 h-6 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/share/17iE8MjQnL/?mibextid=wwXIfr" target="_blank">
            <FaFacebook className="text-white w-6 h-6 cursor-pointer" />
          </a>
          <a href="https://m.youtube.com/@DillonSmithSales" target="_blank">
            <FaYoutube className="text-white w-6 h-6 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/dillon-smith-sales?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
            <FaLinkedin className="text-white w-6 h-6 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="flex flex-col gap-5 max-w-[400px]">
        <h3 className="font-medium text-[#ffffff80] text-xl">
          Newsletter
        </h3>

        <p className="font-medium text-white text-2xl sm:text-[26px] leading-tight">
          You Read This Far, <br /> Might As Well Sign Up.
        </p>

        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Sample@gmail.com"
            className="flex-1 h-[50px] bg-[#ffffff40] border-0 rounded-xl 
              text-white placeholder:text-[#ffffff99] font-medium text-lg"
          />
          <Button className="h-[50px] px-6 bg-[#ffffff40] hover:bg-[#ffffff60] 
            text-white font-semibold text-lg rounded-xl">
            Submit
          </Button>
        </div>
      </div>

    </div>
  </div>

  {/* BIG TEXT */}
  <div className="w-full flex justify-center mt-10 px-4">
    <div className="
      font-semibold text-center
      bg-[linear-gradient(0deg,rgba(255,255,255,0.6)_0%,rgba(255,223,128,1)_100%)]
      bg-clip-text text-transparent
      text-[100px] sm:text-[200px] md:text-[300px] lg:text-[444px]
      leading-none
    ">
      ELITE..
    </div>
  </div>

</footer>

  );
};
