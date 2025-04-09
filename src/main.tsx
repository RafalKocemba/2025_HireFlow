import "../index.css";
import "./styles/icomoon.css";

import { BrowserRouter, Route, Routes } from "react-router";
import { StrictMode, useLayoutEffect } from "react";

import { CandidateProvider } from "./context/CandidateProvider";
import { ConfigProvider } from "./context/ConfigProvider";
import { Form } from "./pages/CandidateForm/Form";
import { Layout } from "./pages/Layout";
import { createRoot } from "react-dom/client";
import { useLocation } from "react-router";

export const Wrapper = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider>
      <CandidateProvider>
        <BrowserRouter>
          <Wrapper>
            <Routes>
              <Route index element={<Layout />} />
              <Route path="form" element={<Form />}>
                <Route path=":id" element={<Form />} />
              </Route>
              <Route path="*" element={<Layout />} />
            </Routes>
          </Wrapper>
        </BrowserRouter>
      </CandidateProvider>
    </ConfigProvider>
  </StrictMode>,
);
