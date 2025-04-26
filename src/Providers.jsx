import { CartContextProvider } from "./contexts/CartContext";
import {ProductContextProvider} from "./contexts/ProductContext";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function Providers({ children }) {

  return <ThemeProvider>
    <CartContextProvider>
            <ProductContextProvider>
              {children}
            </ProductContextProvider>  
          </CartContextProvider>
    </ThemeProvider>
}