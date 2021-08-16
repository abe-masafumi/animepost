import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { ChakraProvider } from "@chakra-ui/react"

export const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  );
};