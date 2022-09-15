import { RemixBrowser, useLocation, useMatches } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import * as Sentry from "@sentry/remix";
import { useEffect } from "react";
import { SENTRY_DNS } from "~/entry.server";


Sentry.init({
  dsn: SENTRY_DNS,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.remixRouterInstrumentation(
        useEffect,
        useLocation,
        useMatches,
      ),
    }),
  ],
});

hydrateRoot(document, <RemixBrowser/>);
