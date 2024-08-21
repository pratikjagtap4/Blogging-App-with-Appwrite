import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=84c4e5b7"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=84c4e5b7"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=84c4e5b7"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import App from "/src/App.jsx?t=1724119841304";
import "/src/index.css?t=1724119841304";
import authStore from "/src/store/authStore.js";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=84c4e5b7";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=84c4e5b7";
import { AuthLayout } from "/src/components/index.js?t=1724119841304";
import { AddPost, AllPost, Home, Login, Signup } from "/src/pages/index.js?t=1724119841304";
import Post from "/src/pages/Post.jsx?t=1724119841304";
const router = createBrowserRouter(
  createRoutesFromElements(
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
      lineNumber: 15,
      columnNumber: 30
    }, this), children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 16,
        columnNumber: 32
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/allpost", element: /* @__PURE__ */ jsxDEV(AllPost, {}, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 17,
        columnNumber: 39
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/login", element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: false, children: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 19,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/signup", element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: false, children: /* @__PURE__ */ jsxDEV(Signup, {}, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/allpost", element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: true, children: /* @__PURE__ */ jsxDEV(AllPost, {}, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 31,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/addpost", element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: true, children: /* @__PURE__ */ jsxDEV(AddPost, {}, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 38,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/post/:slug", element: /* @__PURE__ */ jsxDEV(AuthLayout, { authentication: true, children: /* @__PURE__ */ jsxDEV(Post, {}, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 45,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  )
);
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(Provider, { store: authStore, children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
    lineNumber: 56,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/fullstack/Blogging App Project/Blogging app with appwrite/src/main.jsx",
    lineNumber: 55,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYzZCO0FBZDdCLFNBQVNBLGtCQUFrQjtBQUMzQixTQUFTQyxrQkFBa0I7QUFDM0IsT0FBT0MsU0FBUztBQUNoQixPQUFPO0FBQ1AsT0FBT0MsZUFBZTtBQUN0QixTQUFTQyxnQkFBZ0I7QUFDekIsU0FBU0MscUJBQXFCQywwQkFBMEJDLE9BQU9DLHNCQUFzQjtBQUNyRixTQUFTQyxrQkFBa0I7QUFDM0IsU0FBU0MsU0FBU0MsU0FBU0MsTUFBTUMsT0FBT0MsY0FBYztBQUN0RCxPQUFPQyxVQUFVO0FBR2pCLE1BQU1DLFNBQVNYO0FBQUFBLEVBQ2JDO0FBQUFBLElBQ0UsdUJBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSSxHQUMzQjtBQUFBLDZCQUFDLFNBQU0sTUFBSyxLQUFJLFNBQVMsdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUssS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFrQztBQUFBLE1BQ2xDLHVCQUFDLFNBQU0sTUFBSyxZQUFXLFNBQVMsdUJBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVEsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE0QztBQUFBLE1BQzVDLHVCQUFDLFNBQU0sTUFBSyxVQUFTLFNBQ25CLHVCQUFDLGNBQVcsZ0JBQWdCLE9BQzFCLGlDQUFFLFdBQUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFPLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUlDO0FBQUEsTUFFRCx1QkFBQyxTQUFNLE1BQUssV0FBVSxTQUNwQix1QkFBQyxjQUFXLGdCQUFnQixPQUMxQixpQ0FBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFJQztBQUFBLE1BRUQsdUJBQUMsU0FBTSxNQUFLLFlBQVcsU0FDckIsdUJBQUMsY0FBVyxnQkFBZ0IsTUFDMUIsaUNBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVEsS0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUEsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSUM7QUFBQSxNQUdELHVCQUFDLFNBQU0sTUFBSyxZQUFXLFNBQ3JCLHVCQUFDLGNBQVcsZ0JBQWdCLE1BQzFCLGlDQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFRLEtBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUlDO0FBQUEsTUFHRCx1QkFBQyxTQUFNLE1BQUssZUFBYyxTQUN4Qix1QkFBQyxjQUFXLGdCQUFnQixNQUMxQixpQ0FBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSyxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFFQSxLQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFJQztBQUFBLFNBakNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FtQ0E7QUFBQSxFQUNGO0FBQ0Q7QUFDREwsV0FBV2dCLFNBQVNDLGVBQWUsTUFBTSxDQUFDLEVBQUVDO0FBQUFBLEVBRTFDLHVCQUFDLFlBQVMsT0FBT2hCLFdBQ2YsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFnQyxLQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFFRiIsIm5hbWVzIjpbIlN0cmljdE1vZGUiLCJjcmVhdGVSb290IiwiQXBwIiwiYXV0aFN0b3JlIiwiUHJvdmlkZXIiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzIiwiUm91dGUiLCJSb3V0ZXJQcm92aWRlciIsIkF1dGhMYXlvdXQiLCJBZGRQb3N0IiwiQWxsUG9zdCIsIkhvbWUiLCJMb2dpbiIsIlNpZ251cCIsIlBvc3QiLCJyb3V0ZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qc3gnXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IGF1dGhTdG9yZSBmcm9tICcuL3N0b3JlL2F1dGhTdG9yZS5qcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBjcmVhdGVSb3V0ZXNGcm9tRWxlbWVudHMsIFJvdXRlLCBSb3V0ZXJQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBBdXRoTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4LmpzJ1xuaW1wb3J0IHsgQWRkUG9zdCwgQWxsUG9zdCwgSG9tZSwgTG9naW4sIFNpZ251cCB9IGZyb20gXCIuL3BhZ2VzL2luZGV4LmpzXCJcbmltcG9ydCBQb3N0IGZyb20gJy4vcGFnZXMvUG9zdC5qc3gnXG5cblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcigoXG4gIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cyhcbiAgICA8Um91dGUgcGF0aD0nLycgZWxlbWVudD17PEFwcCAvPn0gPlxuICAgICAgPFJvdXRlIHBhdGg9Jy8nIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9Jy9hbGxwb3N0JyBlbGVtZW50PXs8QWxsUG9zdCAvPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPScvbG9naW4nIGVsZW1lbnQ9e1xuICAgICAgICA8QXV0aExheW91dCBhdXRoZW50aWNhdGlvbj17ZmFsc2V9PlxuICAgICAgICAgIDwgTG9naW4gLz5cbiAgICAgICAgPC9BdXRoTGF5b3V0PlxuICAgICAgfVxuICAgICAgLz5cbiAgICAgIDxSb3V0ZSBwYXRoPScvc2lnbnVwJyBlbGVtZW50PXtcbiAgICAgICAgPEF1dGhMYXlvdXQgYXV0aGVudGljYXRpb249e2ZhbHNlfT5cbiAgICAgICAgICA8U2lnbnVwIC8+XG4gICAgICAgIDwvQXV0aExheW91dD5cbiAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8Um91dGUgcGF0aD0nL2FsbHBvc3QnIGVsZW1lbnQ9e1xuICAgICAgICA8QXV0aExheW91dCBhdXRoZW50aWNhdGlvbj17dHJ1ZX0+XG4gICAgICAgICAgPEFsbFBvc3QgLz5cbiAgICAgICAgPC9BdXRoTGF5b3V0PlxuICAgICAgfVxuICAgICAgLz5cblxuICAgICAgPFJvdXRlIHBhdGg9Jy9hZGRwb3N0JyBlbGVtZW50PXtcbiAgICAgICAgPEF1dGhMYXlvdXQgYXV0aGVudGljYXRpb249e3RydWV9PlxuICAgICAgICAgIDxBZGRQb3N0IC8+XG4gICAgICAgIDwvQXV0aExheW91dD5cbiAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIDxSb3V0ZSBwYXRoPScvcG9zdC86c2x1ZycgZWxlbWVudD17XG4gICAgICAgIDxBdXRoTGF5b3V0IGF1dGhlbnRpY2F0aW9uPXt0cnVlfT5cbiAgICAgICAgICA8UG9zdCAvPlxuICAgICAgICA8L0F1dGhMYXlvdXQ+XG4gICAgICB9XG4gICAgICAvPlxuICAgIDwvUm91dGU+XG4gIClcbikpXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcblxuICA8UHJvdmlkZXIgc3RvcmU9e2F1dGhTdG9yZX0+XG4gICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfT48L1JvdXRlclByb3ZpZGVyPlxuICA8L1Byb3ZpZGVyPlxuXG4pXG4iXSwiZmlsZSI6IkM6L2Z1bGxzdGFjay9CbG9nZ2luZyBBcHAgUHJvamVjdC9CbG9nZ2luZyBhcHAgd2l0aCBhcHB3cml0ZS9zcmMvbWFpbi5qc3gifQ==