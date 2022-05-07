var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.ts
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.ts
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
var import_styled_components = require("styled-components");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components.ServerStyleSheet();
  let markup = (0, import_server.renderToString)(sheet.collectStyles(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const styles = sheet.getStyleTags();
  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/pavelpocho/Projects/reserveroo_web_app/Reserveroo/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/components/app-header.tsx
var import_styled_components2 = __toESM(require("styled-components"));
var Text = import_styled_components2.default.h6`
  color: red;
`;
var AppHeader = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "app-header"
  }, /* @__PURE__ */ React.createElement(Text, null, children));
};

// route:/Users/pavelpocho/Projects/reserveroo_web_app/Reserveroo/app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "Reserveroo",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement(AppHeader, null, "Reserveroo"), /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/pavelpocho/Projects/reserveroo_web_app/Reserveroo/app/routes/$placeId.tsx
var placeId_exports = {};
__export(placeId_exports, {
  default: () => PlaceDetail,
  loader: () => loader
});
var import_react3 = require("@remix-run/react");

// app/db.server.ts
var import_client = require("@prisma/client");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var prisma;
if (false) {
  prisma = getClient();
} else {
  if (!global.__db__) {
    global.__db__ = getClient();
  }
  prisma = global.__db__;
}
function getClient() {
  const { DATABASE_URL } = process.env;
  (0, import_tiny_invariant.default)(typeof DATABASE_URL === "string", "DATABASE_URL env var not set");
  const databaseUrl = new URL(DATABASE_URL);
  console.log(`\u{1F50C} setting up prisma client to ${databaseUrl.host}`);
  const client = new import_client.PrismaClient({
    datasources: {
      db: {
        url: DATABASE_URL
      }
    }
  });
  client.$connect();
  return client;
}

// app/models/place.server.ts
var getPlace = ({ id }) => prisma.place.findFirst({
  where: { id }
});
var getPlaceList = async () => {
  return await prisma.place.findMany({
    select: { id: true, name: true },
    orderBy: { name: "desc" }
  });
};

// route:/Users/pavelpocho/Projects/reserveroo_web_app/Reserveroo/app/routes/$placeId.tsx
var loader = async ({ params }) => {
  return getPlace({ id: parseInt(params.placeId ?? "") });
};
function PlaceDetail() {
  const place = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, place.id, place.name);
}

// route:/Users/pavelpocho/Projects/reserveroo_web_app/Reserveroo/app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
var import_react4 = require("@remix-run/react");
function About() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to the best place in the world."), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/"
  }, "See place list."));
}

// route:/Users/pavelpocho/Projects/reserveroo_web_app/Reserveroo/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react");
var loader2 = async ({ request }) => {
  return await getPlaceList();
};
function Index() {
  const places = (0, import_react5.useLoaderData)();
  console.log(places);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h6", null, "Hello. See places here:"), places.map((place) => /* @__PURE__ */ React.createElement("div", {
    key: place.id
  }, /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: `/${place.id}`
  }, place.name))), /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "/about"
  }, "About us"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "3f3794be", "entry": { "module": "/build/entry.client-LR2JYNNE.js", "imports": ["/build/_shared/chunk-HDUZ7ZCG.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-XTYHR3RZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$placeId": { "id": "routes/$placeId", "parentId": "root", "path": ":placeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$placeId-P6W2VV2T.js", "imports": ["/build/_shared/chunk-ORVGFXRW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-XNYVUVD2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-JSMQMO2X.js", "imports": ["/build/_shared/chunk-ORVGFXRW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3F3794BE.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$placeId": {
    id: "routes/$placeId",
    parentId: "root",
    path: ":placeId",
    index: void 0,
    caseSensitive: void 0,
    module: placeId_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.ts
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map
