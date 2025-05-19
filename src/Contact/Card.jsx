import React from 'react';

const Card = ({
  title,
  description,
  buttonText,
  buttonLink,
  bgClass,
  icon
}) => {
  return (
    <div className={`${bgClass} rounded-xl p-6 flex flex-col justify-between relative overflow-hidden`}>
      {/* Content */}
      <div className="z-10">
        <h2 className="md:text-2xl text-lg font-semibold text-white mb-2">{title}</h2>
        <p className="text-white/90 mb-6 text-sm">{description}</p>
        
        <div className='flex items-center justify-between'>

          <a 
            href={buttonLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white 
                      px-4 py-2 rounded-md transition duration-300 backdrop-blur-sm text-sm md:text-[16px]"
          >
            {buttonText}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >

              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>

      {/* Icon */}
      <div className="">{icon}</div>
        </div>
      </div>
      
      
      {/* Background shapes/patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-black/10 -ml-24 -mb-24"></div>
    </div>
  );
};

export default Card;