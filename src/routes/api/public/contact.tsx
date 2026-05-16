import { createFileRoute } from "@tanstack/react-router";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => ({}));
          const { name, email, message } = body ?? {};
          if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return new Response(
              JSON.stringify({ success: false, message: "Name, email, and message are required." }),
              { status: 400, headers: { "Content-Type": "application/json", ...CORS } },
            );
          }
          console.log("[contact] new message:", { name, email, subject: body.subject });
          return new Response(
            JSON.stringify({ success: true, message: "Message sent. We'll respond within one working day." }),
            { status: 200, headers: { "Content-Type": "application/json", ...CORS } },
          );
        } catch (err) {
          console.error("[contact] error:", err);
          return new Response(
            JSON.stringify({ success: false, message: "Server error. Please try again." }),
            { status: 500, headers: { "Content-Type": "application/json", ...CORS } },
          );
        }
      },
    },
  },
});
