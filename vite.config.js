import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Mantieni il percorso relativo
  build: {
    outDir: "dist", // Directory di output per la build
  },
  server: {
    open: true, // Apre il browser automaticamente
    port: 3000, // Imposta la porta del server di sviluppo
    // Importante per gestire le rotte di React Router durante lo sviluppo
    historyApiFallback: true,
  },
  preview: {
    port: 5000, // Porta per il server di anteprima
    historyApiFallback: true, // Gestisce correttamente le rotte durante l'anteprima
  },
});
