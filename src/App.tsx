import { useState } from "react";
import Header from "./components/layout/Header";
import FormContainer from "./components/form/FormContainer";
import Main from "./components/lp/main";

function App() {
  const [startDiagnosis, setStartDiagnosis] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {!startDiagnosis ? (
        <main className="flex-1 py-10 px-4">
          <Main setStartDiagnosis={setStartDiagnosis} />
        </main>
      ) : (
        <main className="flex-1 py-10 px-4 bg-token-main-100">
          <FormContainer />
        </main>
      )}

      <footer className="bg-gray-100 p-4">
        <div className="text-center text-gray-500 text-sm">
          © 2025 株式会社フラットTAIL All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
