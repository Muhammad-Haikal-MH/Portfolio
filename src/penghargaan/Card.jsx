// import React from 'react'

// export default function Card ({
//   imageUrl,
//   title,
//   organization,
//   issueDate,
//   onClick,
// }) {
//   return (
//     <div className=''>
        
//       <div className="relative">
//         <img 
//           src={imageUrl} 
//           alt={title}
//           className="w-full aspect-[4/3] object-cover"
//         />
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
//           <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-20px] group-hover:translate-x-0">
//             <ChevronRight className="w-8 h-8 text-white" />
//           </div>
//         </div>
//       </div>
//       <div className="p-5">
//         <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>
//         <p className="text-gray-600 mt-1">{organization}</p>
//         <p className="text-gray-500 text-sm mt-2">Issued on</p>
//         <p className="text-gray-700">{issueDate}</p>
//       </div>
//     </div>
//   )
// }
