import Sidebar from "@/components/common/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="container flex flex-col items-center w-full max-w-screen-2xl">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-screen-2xl rounded-lg border"
      >
        <ResizablePanel defaultSize={20}>
          <ScrollArea className="h-[90vh]">
            <Sidebar role="admin" />
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <ScrollArea className="h-[90vh]">
            <div className="flex flex-col flex-1 h-full p-8 space-y-8">
              <Outlet />
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default AdminLayout;
