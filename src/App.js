import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from './components/ProductList';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen font-sans">
        <Header />
        <div className="px-24 py-28">
          <ProductList />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
