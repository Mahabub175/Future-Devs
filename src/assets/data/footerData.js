import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { ImLocation } from "react-icons/im";

export const footerData = [
  {
    id: 1,
    title: "সকল কোর্স",
    links: [
      { name: "সফটওয়্যার ডেভেলপমেন্ট", to: "/" },
      { name: "ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট", to: "/" },
      { name: "অ্যাপ ডেভেলপমেন্ট", to: "/" },
      { name: "সাইবার সিকিউরিটি", to: "/" },
      { name: "গ্রাফিক্স ডিজাইন", to: "/" },
      { name: "ডিজিটাল মার্কেটিং", to: "/" },
      { name: "ভিডিও এডিটিং", to: "/" },
      { name: "লার্ন ল্যাঙ্গুয়েজ", to: "/" },
      { name: "কম্পিউটার ট্রেনিং", to: "/" },
    ],
  },
  {
    id: 2,
    title: "গুরুত্বপূর্ণ লিংক",
    links: [
      { name: "All Course", to: "/" },
      { name: "Free Seminar", to: "/" },
      { name: "Our Mentors", to: "/" },
      { name: "Career", to: "/" },
      { name: "Job Placement", to: "/" },
      { name: "Campus Ambassador", to: "/" },
      { name: "Success Stories", to: "/" },
      { name: "Terms & Conditions", to: "/" },
      { name: "Privacy Policy", to: "/" },
      { name: "Blogs", to: "/" },
    ],
  },
  {
    id: 4,
    title: "যোগাযোগ করুন",
    links: [
      { name: "+880 1874-989908", to: "tel:+8801874989908", icon: FaPhoneAlt },
      {
        name: "contact@futuresdevs.com",
        to: "mailto:contact@futuresdevs.com",
        icon: MdEmail,
      },
      {
        name: "Road -7, Block - A, Mirpur - 1, Dhaka, Bangladesh",
        to: "/",
        icon: ImLocation,
      },
      {
        name: "Nayapara, Panch Rasta More, Jamalpur Sadar, Bangladesh",
        to: "/",
        icon: ImLocation,
      },
    ],
  },
];
