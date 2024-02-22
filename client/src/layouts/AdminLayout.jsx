import Sidebar from "@/components/common/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

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
          <div className="flex items-center justify-center h-full p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default AdminLayout;
