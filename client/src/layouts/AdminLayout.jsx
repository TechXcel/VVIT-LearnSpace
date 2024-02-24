import Sidebar from "@/components/common/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="container flex flex-col items-center w-full max-w-screen-2xl">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-screen-2xl rounded-lg border"
      >
        <ResizablePanel defaultSize={20}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <div className="flex h-full flex-1 flex-col space-y-8 p-8">
          <Outlet/>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default AdminLayout;
