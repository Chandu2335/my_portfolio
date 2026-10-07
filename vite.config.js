import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'resume-resolver-plugin',
      buildStart() {
        const src = 'C:/Users/DELL/Downloads/CHANDAN_RESUME.pdf';
        const dest = path.resolve(__dirname, 'public/Chandan_Kumar_Reddy_Resume.pdf');
        try {
          if (fs.existsSync(src)) {
            const destDir = path.dirname(dest);
            if (!fs.existsSync(destDir)) {
              fs.mkdirSync(destDir, { recursive: true });
            }
            fs.copyFileSync(src, dest);
            console.log('✅ Resume copied to public folder successfully');
          }
        } catch (err) {
          console.warn('Resume copy note:', err.message);
        }
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/Chandan_Kumar_Reddy_Resume.pdf' || req.url === '/resume.pdf') {
            const src = 'C:/Users/DELL/Downloads/CHANDAN_RESUME.pdf';
            const publicPath = path.resolve(__dirname, 'public/Chandan_Kumar_Reddy_Resume.pdf');
            const targetFile = fs.existsSync(publicPath) ? publicPath : (fs.existsSync(src) ? src : null);
            if (targetFile) {
              res.setHeader('Content-Type', 'application/pdf');
              res.setHeader('Content-Disposition', 'attachment; filename="Chandan_Kumar_Reddy_Resume.pdf"');
              const stream = fs.createReadStream(targetFile);
              return stream.pipe(res);
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    open: false
  }
});
