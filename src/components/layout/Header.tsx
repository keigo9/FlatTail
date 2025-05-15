
import { Phone } from 'lucide-react';
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full p-4 flex justify-between items-center bg-white">
      <div className="logo">
        <img 
          src="/logo.png" 
          alt="FlatTail" 
          className="h-8" 
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              const textNode = document.createElement('span');
              textNode.textContent = "FLATTAIL";
              textNode.className = "text-2xl font-bold";
              parent.appendChild(textNode);
            }
          }}
        />
      </div>
      <Button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white flex items-center gap-2 rounded-full px-6">
        <Phone size={18} />
        <span>電話で相談</span>
      </Button>
    </header>
  );
};

export default Header;
