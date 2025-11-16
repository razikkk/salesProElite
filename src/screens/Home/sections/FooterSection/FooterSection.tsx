import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <footer className="w-full flex flex-col gap-16 overflow-hidden bg-[linear-gradient(180deg,rgba(4,85,143,0.5)_0%,rgba(4,85,143,1)_62%,rgba(4,85,143,1)_100%)] py-16">
      <img
        className="w-full h-16 object-cover"
        alt="Top container"
        src="/top-container.svg"
      />

      <div className="px-[60px] w-full">
        <div className="flex flex-wrap gap-8 justify-between">
          <nav className="flex flex-col gap-5">
            <h3 className="[font-family:'Geist',Helvetica] font-medium text-[#ffffff80] text-xl tracking-[0] leading-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-[14.1px]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="[font-family:'Geist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[21.6px] hover:text-[#ffffff80] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col gap-5">
            <h3 className="[font-family:'Geist',Helvetica] font-medium text-[#ffffff80] text-xl tracking-[0] leading-6">
              Legal Links
            </h3>
            <ul className="flex flex-col gap-[14.1px]">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="[font-family:'Geist',Helvetica] font-medium text-white text-lg tracking-[0] leading-[21.6px] hover:text-[#ffffff80] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-5">
            <h3 className="[font-family:'Geist',Helvetica] font-medium text-[#ffffff80] text-xl tracking-[0] leading-6">
              Stay connect
            </h3>
            <div className="flex items-center gap-4">
  <a href="https://www.instagram.com/salesproelite?igsh=OGYwaWZxdmxjOTF2&utm_source=qr" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-white w-6 h-6 cursor-pointer" />
  </a>

  <a href=" https://www.facebook.com/share/17iE8MjQnL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
    <FaFacebook className="text-white w-6 h-6 cursor-pointer" />
  </a>

  <a href="https://m.youtube.com/@DillonSmithSales" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="text-white w-6 h-6 cursor-pointer" />
  </a>

  <a href="https://www.linkedin.com/in/dillon-smith-sales?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-white w-6 h-6 cursor-pointer" />
  </a>
</div>


          </div>

          <div className="flex flex-col gap-5 max-w-[400px]">
            <h3 className="[font-family:'Geist',Helvetica] font-medium text-[#ffffff80] text-xl tracking-[0] leading-6">
              Newsletter
            </h3>
            <p className="[font-family:'Geist',Helvetica] font-medium text-white text-[26px] tracking-[0] leading-[33.8px]">
              You Read This Far, Might As Well <br />
              sign Up.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Sample@gmail.com"
                className="flex-1 h-[50px] bg-[#ffffff40] border-0 rounded-xl text-white placeholder:text-[#ffffff99] [font-family:'Geist',Helvetica] font-medium text-lg"
              />
              <Button className="h-[50px] px-6 bg-[#ffffff40] hover:bg-[#ffffff60] text-white [font-family:'Geist',Helvetica] font-semibold text-lg tracking-[-0.36px] rounded-xl">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden flex justify-center">
        <div className="[font-family:'Geist',Helvetica] font-semibold text-[444.1px] text-center tracking-[-8.88px] leading-[355.3px] bg-[linear-gradient(0deg,rgba(255,255,255,0.6)_0%,rgba(255,223,128,1)_100%)]
 [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
          ELITE..
        </div>
      </div>
    </footer>
  );
};
