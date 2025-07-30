// import { Card, CardContent } from "@/components/ui/card";
// import { AlertCircle } from "lucide-react";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
//       <Card className="w-full max-w-md mx-4">
//         <CardContent className="pt-6">
//           <div className="flex mb-4 gap-2">
//             <AlertCircle className="h-8 w-8 text-red-500" />
//             <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
//           </div>

//           <p className="mt-4 text-sm text-gray-600">
//             Did you forget to add the page to the router?
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  base: "/base/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
