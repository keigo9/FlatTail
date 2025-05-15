import { useState } from 'react';
import Header from './components/layout/Header';
import FormContainer from './components/form/FormContainer';
import './App.css';

function App() {
  const [startDiagnosis, setStartDiagnosis] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {!startDiagnosis ? (
        <main className="flex-1 container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  電気料金、<span className="text-orange-500">もっと安く</span>できるかも！
                </h1>
                
                <p className="text-lg mb-6">
                  たった<span className="text-orange-500 font-bold">1分</span>、<span className="text-orange-500 font-bold">6ステップ</span>で
                  電気料金が<span className="text-orange-500 font-bold">どれだけ安く</span>なるか
                  診断できます
                </p>
                
                <p className="text-sm text-gray-500 mb-8">
                  ※お客様の情報が一般に公開されることはありません
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center mb-8">
                  <div className="bg-orange-100 p-4 rounded-lg text-center">
                    <p className="text-sm">4/27</p>
                    <p className="font-semibold">東京都港区で</p>
                    <p>年間 <span className="text-2xl font-bold text-orange-500">50,000</span>円</p>
                  </div>
                  
                  <div className="bg-orange-100 p-4 rounded-lg text-center">
                    <p className="text-sm">4/27</p>
                    <p className="font-semibold">東京都渋谷区で</p>
                    <p>年間 <span className="text-2xl font-bold text-orange-500">50,000</span>円</p>
                  </div>
                  
                  <div className="bg-green-200 p-4 rounded-lg text-center">
                    <p className="font-semibold">たった<span className="text-orange-500">1分</span>、かんたん入力で診断</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={() => setStartDiagnosis(true)}
                    className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg flex items-center justify-center gap-2 mx-auto"
                  >
                    <span className="mr-2">🔍</span>
                    診断スタート
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="flex-1 container mx-auto px-4 py-10">
          <FormContainer />
        </main>
      )}
      
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © 2025 株式会社フラットTAIL All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
