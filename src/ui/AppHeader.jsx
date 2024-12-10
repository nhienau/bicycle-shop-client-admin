import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSidebar } from "@/contexts/SidebarContext";
import ButtonSidebar from "./ButtonSidebar";
import Sidebar from "./Sidebar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function AppHeader() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <header
      className={`sticky top-0 flex min-h-16 items-center bg-slate-50 p-2 ${
        isOpen ? "md:justify-end" : "md:justify-between"
      }`}
    >
      {!isOpen && <ButtonSidebar onClick={toggleSidebar} />}

      {/* Sidebar for mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <ButtonSidebar className="md:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="w-60">
          <VisuallyHidden asChild>
            <SheetHeader>
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Sidebar</SheetDescription>
            </SheetHeader>
          </VisuallyHidden>
          <Sidebar mobile={true} />
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default AppHeader;
