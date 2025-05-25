import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/layout/Header";
import FormContainer from "./components/form/FormContainer";
import Main from "./components/lp/main";
import PrivacyPolicy from "./PrivacyPolicy";
import TermOfUse from "./TermOfUse";
import { cn } from "./lib/utils";

function App() {
  const [startDiagnosis, setStartDiagnosis] = useState(false);

  return (
    <div>
      <Header setStartDiagnosis={setStartDiagnosis} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              !startDiagnosis ? (
                <Main setStartDiagnosis={setStartDiagnosis} />
              ) : (
                <div
                  className={cn(
                    "flex-1 py-10 px-4 bg-token-main-100",
                    `min-h-[calc(100vh-var(--header-height-mobile)-var(--footer-height))] sm:min-h-[calc(100vh-var(--header-height-pc)-var(--footer-height))]`
                  )}
                >
                  <FormContainer setStartDiagnosis={setStartDiagnosis} />
                </div>
              )
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-of-use" element={<TermOfUse />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
