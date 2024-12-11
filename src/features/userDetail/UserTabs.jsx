import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserInfo from "./UserInfo";
import UserOrdersTab from "./UserOrdersTab";

function UserTabs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParam = searchParams.get("tab");
  const defaultTab =
    tabParam && ["info", "orders"].includes(tabParam.toLowerCase())
      ? tabParam.toLowerCase()
      : "info";

  function setSelectedTab(value) {
    setSearchParams({
      tab: value,
    });
  }

  return (
    <Tabs defaultValue={defaultTab}>
      <TabsList>
        <TabsTrigger value="info" onClick={() => setSelectedTab("info")}>
          Thông tin
        </TabsTrigger>
        <TabsTrigger value="orders" onClick={() => setSelectedTab("orders")}>
          Đơn hàng
        </TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <UserInfo />
      </TabsContent>
      <TabsContent value="orders">
        <UserOrdersTab />
      </TabsContent>
    </Tabs>
  );
}

export default UserTabs;
