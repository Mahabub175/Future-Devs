import React from "react";
import Link from "next/link";
import scrollToTop from "./scrollToTop";

export const sidebarItemsGenerator = (items, pathname, role) => {
  return items.map((item) => {
    if (item.children) {
      return {
        key: item.name,
        icon: React.createElement(item.icon),
        label: <div className="text-base font-semi  bold">{item.name}</div>,
        children: item.children.map((child) => ({
          key: child.name,
          icon: React.createElement(child.icon),
          label: (
            <Link
              href={`/dashboard/${child.path}`}
              onClick={scrollToTop}
              className={`hover:text-primary font-semibold text-base ${
                pathname === `/dashboard/${child?.path}` ? "text-primary" : ""
              }`}
            >
              {child.name}
            </Link>
          ),
        })),
      };
    }

    return {
      key: item.name,
      icon: React.createElement(item.icon),
      label: (
        <Link
          href={`/dashboard/${item.path}`}
          onClick={scrollToTop}
          className={`hover:text-primary font-semibold text-base ${
            pathname === `/dashboard/${item?.path}` ? "text-primary" : ""
          }`}
        >
          {item.name}
        </Link>
      ),
    };
  });
};
