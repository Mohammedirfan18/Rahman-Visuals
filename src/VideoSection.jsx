

// import React, { useEffect, useRef } from "react";


// const VideoSection = () => {
//   const videoRefs = useRef([]);

//   const cloudName = "dsusspkru";
 
//   const videos = [
//     `https://res.cloudinary.com/${cloudName}/video/upload/v1736866154/rahmanVisuals/Ad.mp4`,
//     `https://res.cloudinary.com/${cloudName}/video/upload/v1736866154/rahmanVisuals/Gym.mp4`,
//     `https://res.cloudinary.com/${cloudName}/video/upload/v1736866154/rahmanVisuals/Car.mp4`,
//     `https://res.cloudinary.com/${cloudName}/video/upload/v1736866154/rahmanVisuals/MotionGraphics1.mp4`,
//     `https://res.cloudinary.com/${cloudName}/video/upload/v1736866154/rahmanVisuals/MotionGraphics2.mp4`,
//     `https://res.cloudinary.com/${cloudName}/video/upload/v1736866154/rahmanVisuals/Movie.mp4`
//   ];
 
//   const handleVideoError = (e, index) => {
//     console.error(`Error loading video ${index}:`, e.target.error);
//     console.log(`Video source: ${e.target.src}`);
//   };
//   const videoTitles = [
//     "Ad Edits",
//     "Gym Edits",
//     "Car Edits",
//     "Motion Graphics",
//     "Motion Graphics",
//     "Movie Edits"
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const video = entry.target;
//           if (entry.isIntersecting) {
//             video.play();
//           } else {
//             video.pause();
//           }
//         });
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     videoRefs.current.forEach((video) => {
//       if (video) {
//         observer.observe(video);
//       }
//     });

//     return () => {
//       videoRefs.current.forEach((video) => {
//         if (video) {
//           observer.unobserve(video);
//         }
//       });
//     };
//   }, []);

//   return (
//     <section className="py-20 bg-black">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
//           Recent Work of My Clients
//         </h2>
//         <div className="max-w-5xl mx-auto">
//           {videos
//             .reduce((rows, src, index) => {
//               if (index % 3 === 0) {
//                 rows.push([]);
//               }
//               rows[rows.length - 1].push({ src, title: videoTitles[index] });
//               return rows;
//             }, [])
//             .map((row, rowIndex, allRows) => (
//               <React.Fragment key={rowIndex}>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//                   {row.map(({ src, title }, index) => (
//                     <div key={index} className="flex flex-col">
//                       <div className="rounded-2xl overflow-hidden relative border-2 border-customTeal2 h-full">
//                         <video
//                           ref={(el) => (videoRefs.current[rowIndex * 3 + index] = el)}
//                           src={src}
//                           muted
//                           playsInline
//                           className="w-full h-full object-cover"
//                           controls
//                           disablePictureInPicture
//                           controlsList="nodownload noplaybackrate"
//                           onError={(e) => handleVideoError(e, rowIndex * 3 + index)}
//                         >
//                           <source src={src} type="video/mp4" />
//                           Your browser does not support the video tag.
//                         </video>
//                       </div>
//                       <h3 className="text-customTeal2 text-2xl font-extrabold text-stroke mt-2 text-center">
//                         {title}
//                       </h3>
//                     </div>
//                   ))}
//                 </div>
//                 {rowIndex !== allRows.length - 1 && (
//                   <hr className="border-t-4 border-white my-8" />
//                 )}
//               </React.Fragment>
//             ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoSection;
import React, { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const videoRefs = useRef([]);
  const [isLoading, setIsLoading] = useState(Array(6).fill(true));
  
  const cloudName = "dsusspkru";
  
  // Add Cloudinary optimization parameters
  const videos = [
    `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto,w_800/v1736866154/rahmanVisuals/Ad.mp4`,
    `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto,w_800/v1736866154/rahmanVisuals/Gym.mp4`,
    `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto,w_800/v1736866154/rahmanVisuals/Car.mp4`,
    `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto,w_800/v1736866154/rahmanVisuals/MotionGraphics1.mp4`,
    `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto,w_800/v1736866154/rahmanVisuals/MotionGraphics2.mp4`,
    `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto,w_800/v1736866154/rahmanVisuals/Movie.mp4`
  ];

  const videoTitles = [
    "Ad Edits", "Gym Edits", "Car Edits",
    "Motion Graphics", "Motion Graphics", "Movie Edits"
  ];

  // Preload videos
  useEffect(() => {
    videos.forEach((src, index) => {
      const preloadLink = document.createElement('link');
      preloadLink.href = src;
      preloadLink.rel = 'preload';
      preloadLink.as = 'video';
      document.head.appendChild(preloadLink);
    });
  }, []);

  const handleVideoLoaded = (index) => {
    setIsLoading(prev => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  const handleVideoError = (e, index) => {
    console.error(`Error loading video ${index}:`, e.target.error);
    console.log(`Video source: ${e.target.src}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Handle autoplay failure silently
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '50px', // Start loading slightly before the video comes into view
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
          Recent Work of My Clients
        </h2>
        <div className="max-w-5xl mx-auto">
          {videos
            .reduce((rows, src, index) => {
              if (index % 3 === 0) rows.push([]);
              rows[rows.length - 1].push({ src, title: videoTitles[index] });
              return rows;
            }, [])
            .map((row, rowIndex, allRows) => (
              <React.Fragment key={rowIndex}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {row.map(({ src, title }, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="rounded-2xl overflow-hidden relative border-2 border-customTeal2 h-full">
                        {isLoading[rowIndex * 3 + index] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-customTeal2"></div>
                          </div>
                        )}
                        <video
                          ref={(el) => (videoRefs.current[rowIndex * 3 + index] = el)}
                          src={src}
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          controls
                          preload="metadata"
                          disablePictureInPicture
                          controlsList="nodownload noplaybackrate"
                          onLoadedData={() => handleVideoLoaded(rowIndex * 3 + index)}
                          onError={(e) => handleVideoError(e, rowIndex * 3 + index)}
                        >
                          <source src={src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <h3 className="text-customTeal2 text-2xl font-extrabold text-stroke mt-2 text-center">
                        {title}
                      </h3>
                    </div>
                  ))}
                </div>
                {rowIndex !== allRows.length - 1 && (
                  <hr className="border-t-4 border-white my-8" />
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;