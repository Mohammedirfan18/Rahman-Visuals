

import React, { useEffect, useRef } from "react";
import Ad1 from "./assets/Ad1.mp4";
import Ad2 from "./assets/Ad2.mp4";
import Ad3 from "./assets/Ad3.mp4";
import Ad4 from "./assets/Ad4.mp4";
import Ad5 from "./assets/Ad5.mp4";
import Ad6 from "./assets/Ad6.mp4";

const VideoSection = () => {
  const videoRefs = useRef([]);
  
  const videoTitles = [
    "Ad Edits",
    "Gym Edits",
    "Car Edits",
    "Motion Graphics",
    "Motion Graphics",
    "Movie Edits"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
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
          {[Ad1, Ad2, Ad3, Ad4, Ad5, Ad6]
            .reduce((rows, src, index) => {
              if (index % 3 === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push({ src, title: videoTitles[index] });
              return rows;
            }, [])
            .map((row, rowIndex, allRows) => (
              <React.Fragment key={rowIndex}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {row.map(({ src, title }, index) => (
                    <div key={index} className="flex flex-col">
                      {/* Video Container with fixed height */}
                      <div className="rounded-2xl overflow-hidden relative border-2 border-customTeal2 h-full">
                        <video
                          ref={(el) => (videoRefs.current[rowIndex * 3 + index] = el)}
                          src={src}
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          controls
                          disablePictureInPicture
                          controlsList="nodownload noplaybackrate"
                        />
                      </div>
                      {/* Title below video */}
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
