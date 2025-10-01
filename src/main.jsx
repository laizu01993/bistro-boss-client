import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
