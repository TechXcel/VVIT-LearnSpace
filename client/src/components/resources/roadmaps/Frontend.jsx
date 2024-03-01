import Project from "@/components/icons/Project";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const Frontend = () => {
  return (
    <div className="container flex flex-col w-full py-8 gap-y-8 max-w-screen-2xl">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-screen-2xl rounded-lg border"
      >
        <ResizablePanel defaultSize={20}>
          <ScrollArea className="h-[90vh]">
            <div className="flex flex-col p-2 gap-y-1 md:p-6">
              <div className="space-y-2">
                <div className="">
                  <Link>
                    <Button
                      variant="ghost"
                      className="justify-start w-full text-lg font-semibold tracking-tight"
                    >
                      <Project />
                      Frontend
                    </Button>
                  </Link>
                </div>

                <div className="">
                  <div className="space-y-1">
                    <Link to="/admin/students">
                      <Button variant="ghost" className="justify-start w-full">
                        HTML
                      </Button>
                    </Link>

                    <Link to="/admin/faculty">
                      <Button variant="ghost" className="justify-start w-full">
                        CSS
                      </Button>
                    </Link>

                    <Link to="/admin/faculty">
                      <Button variant="ghost" className="justify-start w-full">
                        JavaScript
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <ScrollArea className="h-[90vh]">
            <div className="container flex flex-col w-full py-8 gap-y-8 max-w-screen-2xl">
              <h1 className="text-3xl font-bold tracking-tight">Frontend</h1>

              <section className="flex flex-col">
                <h2 className="text-xl font-semibold">What is Frontend?</h2>
                <p className="text-muted-foreground">
                  Frontend development involves building the user interface of a
                  web application.
                </p>
              </section>

              <section className="flex flex-col space-y-2">
                <div>
                  <h2 className="text-2xl font-semibold">HTML</h2>
                  <p className="text-muted-foreground">
                    HTML is the standard markup language for creating web pages.
                  </p>
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Visit the following resources to master HTML:</p>
                  <div className="flex flex-col">
                    <a
                      className="text-primary hover:underline"
                      href="https://www.w3schools.com/html/html_intro.asp"
                      target="_blank"
                    >
                      W3Schools: Learn HTML
                    </a>
                    <a
                      className="text-primary hover:underline"
                      href="https://youtu.be/kUMe1FH4CHE?si=XjAie-f7_aa3L_NX"
                      target="_blank"
                    >
                      freeCodeCamp.org: HTML Full Course for Beginners
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Basic projects to master HTML:</p>
                  <div className="flex flex-col">
                    <a
                      className="text-primary hover:underline"
                      href="https://youtu.be/T5PD8ofhiug?si=BYb2jkuUDRfZhyXa"
                      target="_blank"
                    >
                      Dave Gray: HTML5 Website Project for Beginners
                    </a>
                  </div>
                </div>
              </section>

              <section className="flex flex-col space-y-2">
                <div>
                  <h2 className="text-2xl font-semibold">CSS</h2>
                  <p className="text-muted-foreground">
                    CSS is used for styling and layout of web pages.
                  </p>
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Visit the following resources to master CSS:</p>
                  <div className="flex flex-col">
                    <a
                      className="text-primary hover:underline"
                      href="https://www.w3schools.com/css/css_intro.asp"
                      target="_blank"
                    >
                      W3Schools: Learn CSS
                    </a>
                    <a
                      className="text-primary hover:underline"
                      href="https://youtu.be/OXGznpKZ_sA?si=8sBAXzLqrFmxz0oD"
                      target="_blank"
                    >
                      freeCodeCamp.org: CSS Full Course for Beginners
                    </a>
                  </div>
                </div>
              </section>

              <section className="flex flex-col space-y-2">
                <div>
                  <h2 className="text-2xl font-semibold">JavaScript</h2>
                  <p className="text-muted-foreground">
                    JavaScript is a programming language that enables
                    interactive web pages.
                  </p>
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Visit the following resources to master JavaScript:</p>
                  <div className="flex flex-col">
                    <a
                      className="text-primary hover:underline"
                      href="https://www.w3schools.com/js/js_intro.asp"
                      target="_blank"
                    >
                      W3Schools: Learn JavaScript
                    </a>
                    <a
                      className="text-primary hover:underline"
                      href="https://youtu.be/EfAl9bwzVZk?si=3PRUq0MQCSjy2wRS"
                      target="_blank"
                    >
                      freeCodeCamp.org: JavaScript Full Course for Beginners
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Frontend;
