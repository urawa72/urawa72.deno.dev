import { serve } from "https://deno.land/x/sift@0.1.6/mod.ts";

serve({
  "/": () =>
    new Response("ううううううううううううう", {
      headers: { "content-type": "text/html; charset=utf8" },
    }),
});
