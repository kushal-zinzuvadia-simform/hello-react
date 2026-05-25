import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const container = document.getElementById("root");

if (container === null) {
  throw new Error('Root element with id "root" was not found.');
}

const root = createRoot(container);
root.render(<App />);
