import "./App.css";
import { FloatButton } from "antd";
import { Root } from "./apps/modules";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


//Organisms
import { Main } from "./apps/componets/organisms/Main";
import Header from "./apps/componets/organisms/Header";
import Footer from "./apps/componets/organisms/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Main>
            <Root />
          </Main>
          <Footer />
          <FloatButton.BackTop />
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
