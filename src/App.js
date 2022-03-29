import "./App.css";
import ImageLinkForm from "./components/image-link-form/ImageLinkForm";

import Navigation from "./components/navigation/Navigation.jsx";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Navigation />
      <ImageLinkForm />
    </div>
  );
}

export default App;
