import { CssBaseline, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import RouteWithBoundary from "./layouts/RouteWithBoundary";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SearchRecipe from "./pages/SearchRecipe";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index path="/" element={
          <RouteWithBoundary>
            <Home />
            <Recipes />
          </RouteWithBoundary>}
        />
        <Route path="/:uuid" element={
          <RouteWithBoundary>
            <SearchRecipe />

          </RouteWithBoundary>}
        />
        <Route path="*" element={
          <RouteWithBoundary>
            <Typography variant="h1" textAlign="center">Not Found</Typography>
          </RouteWithBoundary>} />
      </Routes>

    </>
  );
}

export default App;
