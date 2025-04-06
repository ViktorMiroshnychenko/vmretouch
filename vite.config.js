import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vmretouch/', // ⚠️ Обов’язково: назва репозиторію!
  plugins: [react()],
});
