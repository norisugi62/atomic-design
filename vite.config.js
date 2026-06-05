import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  // reactをviteで使うための公式プラグイン
  plugins: [
    react({
      // styled-jsxを使うための設定
      babel: {
        plugins: ['styled-jsx/babel'],
      },
    }),
  ],

  // パスのエイリアスの設定
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organism': path.resolve(__dirname, 'src/components/organism'),
      '@template': path.resolve(__dirname, 'src/components/template'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@api': path.resolve(__dirname, 'src/api'),
    },
  },

  // minifiyの設定の有無
  build: {
    minify: mode === 'production',
  },
}));
