import ReactDom from "react-dom/client";
import { App } from "../src/App.jsx"

const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(<App />);
