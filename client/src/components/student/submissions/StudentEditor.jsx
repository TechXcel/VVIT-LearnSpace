import { useEffect, useState } from "react";
import { problems } from "@/data/assignments";
import { Loader2 } from "lucide-react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import ThemeDropdown from "./editor/ThemeDropdown";
import { languageOptions } from "@/data/languageOptions";

import { Button } from "@/components/ui/button";

import Play from "@/components/icons/Play";
import Save from "@/components/icons/Save";
import useKeyPress from "@/components/resources/assignments/editor/useKeyPress";
import { defineTheme } from "@/components/resources/assignments/editor/defineTheme";
import LanguagesDropdown from "@/components/resources/assignments/editor/LanguageDropdown";
import EditorWindow from "@/components/resources/assignments/editor/EditorWindow";
import OutputWindow from "@/components/resources/assignments/editor/OutputWindow";
import { classnames } from "@/components/resources/assignments/editor/general";
import OutputDetails from "@/components/resources/assignments/editor/OutputDetails";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSubmissionById } from "@/redux/submissionSlice";

const StudentEditor = () => {
  const { submissionId } = useParams();
  const dispatch = useDispatch();
  const { submission } = useSelector((state) => state.submission);
  const javascriptDefault = `// start practicing your code here!`;
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  useEffect(() => {
    dispatch(getSubmissionById(submissionId));
  }, [dispatch, submissionId]);

  console.log("submission", submission);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: import.meta.env.VITE_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: import.meta.env.VITE_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSave = () => {
    console.log(typeof code);
    console.log("Saving code:", code);
    // Add logic to save the code to your backend or storage if needed
  };

  return (
    <section className="flex flex-col w-full max-w-screen-2xl">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {problems[0].title}
            </h2>
            <p className="text-muted-foreground">{problems[0].description}</p>
          </div>
        </div>

        <div>
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
      </div>

      <div className="flex flex-row gap-x-4">
        {/* <div className="py-2 ">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div> */}
      </div>
      <div className="flex flex-row items-start py-4 space-x-4">
        <div className="flex flex-col items-end justify-start w-full h-full border rounded-md">
          <EditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>

        <div className="right-container gap-y-4 flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails} />
          <div className="flex items-end justify-between">
            {/* <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            /> */}
            <Button
              onClick={handleCompile}
              disabled={!code}
              className={classnames("", !code ? "opacity-50" : "")}
            >
              {processing ? (
                <>
                  Processing <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                </>
              ) : (
                <>
                  <Play /> Compile and Execute
                </>
              )}
            </Button>
            <Button
              onClick={handleSave}
              disabled={!code || processing}
              className={classnames(
                "",
                !code || processing ? "opacity-50" : ""
              )}
            >
              <>
                <Save /> Save
              </>
            </Button>
          </div>
          <div>
            {outputDetails && <OutputDetails outputDetails={outputDetails} />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default StudentEditor;
