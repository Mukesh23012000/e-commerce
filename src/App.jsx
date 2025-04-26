import Filters from "./components/Filters";
import Products from "./components/Products";
import Providers from "./Providers";
import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import Layout from "./components/Layout";

const App = () => {

  return (
    <Providers>
      <Layout>
          <div className="flex-1 p-6">
            <Header/>
            <Filters/>
            <Products/>
          </div>
          <CartSidebar />
      </Layout>
    </Providers>
  );
};





export default App;
