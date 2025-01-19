import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase the warning limit if needed (in bytes, default is 500kb)
    chunkSizeWarningLimit: 1700,}
})
// vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
 
    
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           // Group vendor libs by name
//           'vendor-react': ['react', 'react-dom'],
//           'vendor-ui': ['@mui/material', '@mui/icons-material'],
          
//           // Custom chunking function
//           'vendor': (id) => {
//             // Group all node_modules code together except React and MUI
//             if (id.includes('node_modules')) {
//               if (id.includes('react') || id.includes('@mui')) {
//                 return false;
//               }
//               return 'vendor';
//             }
//           },
          
//           // Group features by module
//           'feature-dashboard': [
//             '/src/features/dashboard/',
//             '/src/components/dashboard/'
//           ],
//           'feature-settings': [
//             '/src/features/settings/',
//             '/src/components/settings/'
//           ]
//         }
//       }
//     }
//   }
// })
