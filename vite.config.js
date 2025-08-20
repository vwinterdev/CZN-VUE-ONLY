import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'


const manifest = {
  "theme_color":"#8936FF",
  "background_color":
  "#ffffff",
  "icons":[
    {"purpose":"maskable","sizes":"512x512","src":"/icon512_maskable.png","type":"image/png"},
    {"purpose":"any","sizes":"512x512","src":"/icon512_rounded.png","type":"image/png"}
  ],
  "orientation":"any",
  "display":"standalone",
  "dir":"auto",
  "lang":"en-US",
  "name":"Накрутка",
  "short_name":"НК",
  "start_url":"/"
}



// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    registerType: 'autoUpdate',
  workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
    manifest: manifest
  })],
})
