// import React from 'react'
// import Sidebar from '../Sidebar'

// export default function Layout({ children }) {
//   return (
//     <div className='flex gap-2'>
//         <Sidebar/>
//         <main className='max-w-5xl flex-1 mx-auto py-4'>{children}</main>
//     </div>
//   )
// }

import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className='flex bg-gray-100 dark:bg-[#121212] dark:text-white'>
      <Sidebar />
      <div className='w-full flex-1 h-screen overflow-y-auto hide-scrollbar'>
        <main className=' px-4 py-4 max-w-4xl mx-auto container '>
          <Outlet />
        </main>

      </div>
    </div>
  )
}