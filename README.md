This is an example app to demonstrate the bug in @sentry/remix 7.11.0 and later which causes server bugs in Remix apps 
with Express adapter not to be reported.

# Instructions

1. Clone repo and run `npm install`
2. Set `SENTRY_DNS` in `entry.server.tsx`
3. Execute `npm run dev`
4. Visit `http://localhost:3000/error` to trigger an issue.
