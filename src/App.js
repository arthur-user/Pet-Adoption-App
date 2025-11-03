import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from './components/root';
import SignUp from "./components/signup/SignUp.js";
import EditProfileForm from "./components/EditProfileForm";
import Profile from "./components/Profile";

// Add react-router-dom imports
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// create router with JSX Route elements; wrapped with createRoutesFromElements since RouterProvider only accepts route objects
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/*  Index route — renders when the URL is exactly "/" */}
      <Route index element={<HomePage />} />
      {/* Dynamic route — renders when the URL is like "/dogs", "/cats", etc. */}
      <Route path=":type" element={<HomePage />} />
      <Route path=":type/:id" element={<PetDetailsPage />} />
      <Route path="sign-up" element={ <SignUp/>} />
      <Route path="search" element={<SearchPage />} />
      <Route path="pet-details-not-found" element={<PetDetailsNotFound />} />
     <Route path="profile" element={<Profile />}>
        <Route path="edit" element={<EditProfileForm />} />
      </Route>

    </Route>
  )
);

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter} />
  );
}

export default App;
