import { createFileRoute } from "@tanstack/react-router";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const Route = createFileRoute("/api/public/inquiries")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      POST: async ({ request }) => {
        try {
          const body = await request.json().catch(() => ({}));
          const { studentName, parentName, email, phone, grade } = body ?? {};
          if (![studentName, parentName, email, phone, grade].every((v) => typeof v === "string" && v.trim())) {
            return new Response(
              JSON.stringify({ success: false, message: "All required fields must be filled." }),
              { status: 400, headers: { "Content-Type": "application/json", ...CORS } },
            );
          }
          console.log("[inquiry] new admission inquiry:", { studentName, grade, email });
          return new Response(
            JSON.stringify({ success: true, message: "Inquiry received. Our team will contact you shortly." }),
            { status: 200, headers: { "Content-Type": "application/json", ...CORS } },
          );
        } catch (err) {
          console.error("[inquiry] error:", err);
          return new Response(
            JSON.stringify({ success: false, message: "Server error. Please try again." }),
            { status: 500, headers: { "Content-Type": "application/json", ...CORS } },
          );
        }
      },
    },
  },
});
