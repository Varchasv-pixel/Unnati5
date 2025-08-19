import React from "react";
import Logo from "../ui/Logo";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";
// import Navtab from "../ui/Navtab";

const navItems = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "Dates",
    id: "#dates",
  },
  {
    name: "FAQs",
    id: "#faq",
  },
  {
    name: "Prizes",
    id: "#prizes",
  },
  {
    name: "Rules",
    id: "#rules",
  },
  {
    name: "Team",
    chevron: true,
    id: "#team",
  },
  {
    name: "Gallery",
    id: "#gallery",
  },
];

const Navbar = () => {
  return (
    <header className="w-[70%] mx-[15%] flex justify-between items-center px-1 py-1 bg-white/80 shadow-none hover:shadow-xl transition-all duration-200 rounded-2xl fixed top-8 z-50 text-sm backdrop-blur-md">
      <div className="flex justify-center items-center gap-4">
        <Logo />
        <div className="h-5 w-[1px] bg-black/10"></div>
        <nav className="flex font-medium gap-8 items-center justify-center text-sm text-black/90">
          {navItems.map((item) => (
            <div
              className="flex items-center gap-2 cursor-pointer"
              key={item.id}
            >
              {item.name}

              {item.chevron && (
                <ChevronDown className="text-slate-400" size={14} />
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="bg-none hover:bg-slate-100 px-4 py-3 rounded-md transition-all duration-300 cursor-pointer font-medium">
          Contact Us
        </div>
        <div className="h-5 w-[1px] bg-black/10"></div>
        <Button label={"Register"} btnbg={"slate-100"} to={""} px={5} py={3} />
        <Button
          label={"Visit I&E Cell"}
          showChevron={true}
          btnbg={"black"}
          textColor="white"
          to={"https://www.aitecell.in/"}
          px={2}
          py={2}
        />
      </div>
    </header>
  );
};

export default Navbar;
