"use client";

import { useState, useEffect } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { Drawer, Menu, Popover, Select } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { menuItems } from "@/assets/data/navData";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setShowNavbar(false);
      } else if (currentScrollTop < lastScrollTop || currentScrollTop <= 100) {
        setShowNavbar(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const renderMenuItems = (items) => {
    return items?.map((item) => {
      if (item?.children) {
        const content = (
          <Menu>
            {item?.children?.map((subItem) => (
              <Menu.Item key={subItem?.key}>
                <Link href={subItem?.href} className="flex items-center gap-4">
                  {/* <Image
                    src={subItem?.image}
                    width={20}
                    height={20}
                    alt="submenu"
                  /> */}
                  <span
                    className={`block font-bold hover:text-primaryLight duration-500 ${
                      pathname === subItem?.href ? "text-primaryLight" : ""
                    }`}
                  >
                    {subItem?.label}
                  </span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        );

        return (
          <Popover key={item?.key} content={content} trigger="hover">
            <span
              className={`text-md cursor-pointer flex items-center font-bold hover:text-primaryLight duration-500 ${
                pathname === item?.href ? "text-primaryLight" : ""
              }`}
            >
              {item?.label} <FaChevronDown className="ml-1 size-4" />
            </span>
          </Popover>
        );
      }

      return (
        <Link key={item?.key} href={item?.href}>
          <span
            className={`text-md font-bold mx-2 hover:text-primaryLight duration-500 ${
              pathname === item?.href
                ? "text-primaryLight border-b-2 border-primaryLight"
                : "text-white"
            }`}
          >
            {item?.label}
          </span>
        </Link>
      );
    });
  };

  const renderDrawerMenuItems = (items) => {
    return items?.map((item) => {
      if (item?.children) {
        return (
          <div key={item?.key} className="mb-2">
            <Popover
              content={
                <Menu>
                  {item?.children?.map((subItem) => (
                    <Menu.Item key={subItem?.key}>
                      <Link
                        href={subItem?.href}
                        className="flex items-center gap-2"
                      >
                        <Image
                          src={subItem?.image}
                          width={20}
                          height={20}
                          alt="submenu"
                        />
                        <span
                          className={`block hover:text-primaryLight duration-200 ${
                            pathname === subItem?.href
                              ? "text-primaryLight"
                              : ""
                          }`}
                        >
                          {subItem?.label}
                        </span>
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger="hover"
            >
              <span className="flex items-center font-bold mb-1 text-base">
                {item?.label} <FaChevronDown className="ml-1 size-4" />
              </span>
            </Popover>
          </div>
        );
      }

      return (
        <div key={item?.key} className="mb-2">
          <Link href={item?.href}>
            <span
              className={`text-md font-bold hover:text-primary duration-200 ${
                pathname === item?.href ? "text-primary" : ""
              }`}
            >
              {item?.label}
            </span>
          </Link>
        </div>
      );
    });
  };

  return (
    <nav
      className={`bg-primary shadow-md z-50 fixed w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center gap-10">
          <div>
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
          </div>
          <div>
            <Select
              style={{ width: "150px" }}
              showSearch
              size="large"
              placeholder="কোর্সসমূহ"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "1", label: "Course1" },
                { value: "2", label: "Course2" },
                { value: "3", label: "Course3" },
              ]}
            />
          </div>
        </div>
        <div className="md:hidden mr-4">
          <FaBars
            onClick={showDrawer}
            className="text-2xl cursor-pointer text-white"
          />
        </div>
        <div className="desktopMenu hidden md:flex space-x-4 items-center">
          {renderMenuItems(menuItems)}
          <div className="px-10">
            <Link href={"/lets-talk"}>
              <button className="bg-primaryLight text-primary font-bold px-10 py-3 rounded-xl hover:bg-transparent duration-300 hover:text-primaryLight border-2 border-primaryLight">
                লগ ইন / সাইন আপ
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={visible}
        className="!bg-primary"
      >
        <Link href="/" className="mb-10">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
        <div className="mb-10">{renderDrawerMenuItems(menuItems)}</div>
        <Link href={"/lets-talk"}>
          <button className="bg-primaryLight text-primary font-bold px-10 py-2 rounded-xl hover:bg-transparent duration-300 hover:text-primaryLight border-2 border-primaryLight">
            লগ ইন / সাইন আপ
          </button>
        </Link>
      </Drawer>
    </nav>
  );
};

export default Navbar;
