import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Pricing", path: "/pricing" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-[1400px] mx-auto flex items-center px-5 py-2">

        {/* Logo */}
        <img
          className="w-[180px] h-auto cursor-pointer"
          alt="Salespro logo"
          src="/salespro-copy-4-1.png"
          onClick={() => navigate("/")}
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 ml-10 items-center relative">
  
  {/* Centered Navigation Links */}
  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
    {navigationItems.map((item, index) => (
      <span
        key={index}
        onClick={() => navigate(item.path)}
        className="font-medium text-black text-lg cursor-pointer transition-opacity hover:opacity-70"
      >
        {item.label}
      </span>
    ))}
  </div>

  {/* Contact Button on right side */}
  <div className="ml-auto">
    <Button
      onClick={() => navigate("/contact")}
      className="h-[50px] px-6 bg-[#04558F] rounded-xl font-semibold text-white text-lg hover:opacity-90"
    >
      Contact Us
    </Button>
  </div>

</nav>


        {/* Mobile Menu Icon */}
        <div className="ml-auto md:hidden">
          {open ? (
            <X className="w-7 h-7 cursor-pointer" onClick={() => setOpen(false)} />
          ) : (
            <Menu className="w-7 h-7 cursor-pointer" onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md w-full px-6 py-4 space-y-6 animate-slideDown">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              className="font-medium text-black text-lg cursor-pointer"
            >
              {item.label}
            </div>
          ))}

          <Button
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
            className="w-full h-[50px] bg-[#04558F] rounded-xl text-white text-lg"
          >
            Contact Us
          </Button>
        </div>
      )}
    </header>
  );
};
