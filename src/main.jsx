import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className=' max-w-7xl mx-auto px-4 py-6'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
