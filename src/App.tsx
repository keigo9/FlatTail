import { useState } from "react";
import Header from "./components/layout/Header";
import FormContainer from "./components/form/FormContainer";
import Main from "./components/lp/main";

function App() {
  const [startDiagnosis, setStartDiagnosis] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header setStartDiagnosis={setStartDiagnosis} />

      {!startDiagnosis ? (
        <main className="flex-1 py-10 px-4">
          <Main setStartDiagnosis={setStartDiagnosis} />
        </main>
      ) : (
        <main className="flex-1 py-10 px-4 bg-token-main-100">
          <FormContainer />
        </main>
      )}
    </div>
  );
}

export default App;
