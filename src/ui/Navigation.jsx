import NavItem from "./NavItem";

function Navigation() {
  return (
    <nav className="flex flex-col gap-2 p-2">
      <NavItem to="/app/product" title="Sản phẩm">
        Sản phẩm
      </NavItem>
      <NavItem to="/app/productcategory" title="Loại sản phẩm">
        Loại sản phẩm
      </NavItem>
      <NavItem to="/app/order" title="Đơn hàng">
        Đơn hàng
      </NavItem>
      <NavItem to="/app/user" title="Người dùng">
        Khách hàng
      </NavItem>
    </nav>
  );
}

export default Navigation;
