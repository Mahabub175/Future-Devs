import { Collapse } from "antd";
import React from "react";

const CourseCollapse = ({ data, style }) => {
  const panelStyle = {
    marginBottom: 24,
    border: "none",
    borderRadius: "10px",
    background: "#fff",
    padding: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    border: "0.5px solid #D1EEEA",
  };

  const getItems = (panelStyle) => {
    if (data?.list) {
      return data?.list?.map((listItem) => ({
        key: listItem?.id,
        label: <div className="text-2xl font-bold">{listItem?.title}</div>,
        children: (
          <div className="pl-4">
            {listItem?.items?.map((subItem) => (
              <div
                key={subItem?.id}
                className="text-textColorDark text-base font-semibold"
              >
                {subItem?.title}
              </div>
            ))}
          </div>
        ),
        style: {
          ...panelStyle,
        },
      }));
    } else if (data?.faqs) {
      return data?.faqs?.map((faqItem) => ({
        key: faqItem?.id,
        label: (
          <div className="text-2xl font-bold">
            <div className="text-lg font-semibold">{faqItem?.question}</div>
          </div>
        ),
        children: (
          <div className="mb-4 pl-4">
            <div className="text-textColorDark text-base">
              {faqItem?.answer}
            </div>
          </div>
        ),
        style: {
          ...panelStyle,
        },
      }));
    }
    return null;
  };

  return (
    <section className="container mx-auto mt-10">
      <div className="flex justify-center items-center">
        <h2 className="text-2xl font-bold bg-primaryLight text-primary p-5 rounded my-20">
          {data?.title}
        </h2>
      </div>
      <Collapse
        expandIconPosition={"end"}
        items={getItems(panelStyle)}
        bordered={false}
        className={`grid ${style} gap-6`}
      />
    </section>
  );
};

export default CourseCollapse;
