/** @jsxImportSource react */
import React from "react";
import { createRoot } from "react-dom/client";
import { styled, css } from "@linaria/react";

const global = css`
  :global() {
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    }

    a {
      -webkit-tap-highlight-color: transparent;
    }

    html {
      scroll-behavior: smooth;
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }

    body {
      height: 100vh;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      place-content: center;
      overflow: hidden;
      background-color: black;
    }

    @keyframes up_and_down {
      0%, 100% {
        transform: translateZ(-100px);
      }
      50% {
        transform: translateZ(100px);
      }
    }
  }
`;

const LoaderContainer = styled.aside`
  width: 300px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(60deg);

  @media (width <= 1111px) {
    zoom: 0.7;
  }
`;

const Aro = styled.div`
  position: absolute;
  inset: calc(var(--s) * 10px);
  border: 2px solid white;
  clip-path: polygon(0 0, 100% 0, 50% 90%);
  animation: up_and_down 3s infinite ease-in-out both;
  animation-delay: calc(var(--s) * -0.1s);
`;

function App() {
  return (
    <LoaderContainer>
      {Array.from({ length: 15 }, (_, i) => (
        <Aro key={i} style={{ "--s": i }} />
      ))}
    </LoaderContainer>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
