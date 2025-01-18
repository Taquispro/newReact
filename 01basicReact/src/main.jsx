import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";
function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}
const anotherUser = "Chai or React";
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to visit google",
  anotherUser
);

createRoot(document.getElementById("root")).render(reactElement);
