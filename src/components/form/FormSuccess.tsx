
import { Button } from "../ui/button";

const FormSuccess = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <div className="my-8">
        <h2 className="text-2xl font-bold text-green-600">診断が完了しました！</h2>
        <p className="mt-4 text-gray-600">担当者より結果についてご連絡いたします。</p>
      </div>
      
      <Button 
        className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-2"
        onClick={() => window.location.reload()}
      >
        ホームに戻る
      </Button>
    </div>
  );
};

export default FormSuccess;
