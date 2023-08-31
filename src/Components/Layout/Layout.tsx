import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

import theme from "../../common/theme/theme";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
