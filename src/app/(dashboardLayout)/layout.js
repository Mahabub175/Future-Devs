import { Layout } from "antd";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import { Content } from "antd/es/layout/layout";

const DashboardLayout = ({ children }) => {
  return (
    <Layout>
      <Layout className="relative container mx-auto">
        <Sidebar />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            marginTop: 90,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
