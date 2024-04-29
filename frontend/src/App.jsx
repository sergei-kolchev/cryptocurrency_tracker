import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import {routes} from "./router/routes.js";
import Container from "./components/Container.jsx";

function App() {
  return (
        <BrowserRouter>
            <Container>
                <Routes>
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                    <Route path = "/*" element = {<Navigate to = "/cryptocurrencies" replace/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
  )
}

export default App
