import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import config from './config';

const isGitHubPages = config.VITE_BASE_CI === true  && (config.VITE_GITHUB_REPO === "manjitsingh2022/portfolio")
const base = isGitHubPages ? '/portfolio/' : '/'; 

console.log(base, 'basebasebase');

export default defineConfig({
  plugins: [react()],
  base: base,
  build: {
    outDir: 'dist',
  },
});

  // base: 'https://github.com/manjitsingh2022/portfolio.git', 

  // only git 
  // https://manjitsingh2022.github.io/portfolio/
