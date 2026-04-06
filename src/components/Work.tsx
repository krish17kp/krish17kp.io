import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.png";
import Picture3 from "../assets/Picture3.png";
import Picture4 from "../assets/Picture4.png";

const projects = [
  {
    title: "Auto Generate Promo Videos",
    category:
      "Built a CNN-based pipeline that converts long videos into short promotional clips using scene detection and automated segment scoring.",
    tools:
      "Automates editing by ranking and stitching high-impact segments into scalable video outputs.",
    image: Picture1,
    imageClass: "project-image-1",
  },
  {
    title: "The Unwind (SIH Project)",
    category:
      "Built a privacy-first AI platform for student wellbeing using clustering and time-series forecasting to generate personalized study and mood insights.",
    tools:
      "Combined FastAPI, real-time analytics, and WebRTC features into a full-stack system.",
    image: Picture2,
    imageClass: "project-image-2",
  },
  {
    title: "Real-Time Emotion Recognition",
    category:
      "Developed a real-time facial emotion detection system using CNNs with webcam input and low-latency browser inference.",
    tools:
      "Integrated end-to-end pipeline from model training to React-based deployment.",
    image: Picture3,
    imageClass: "project-image-3",
  },
  {
    title: "AI Money Mentor",
    category:
      "Developed an AI-driven portfolio analysis tool that processes financial statements and generates actionable investment insights.",
    tools:
      "Automates portfolio health evaluation using data extraction and intelligent analytics.",
    image: Picture4,
    imageClass: "project-image-4",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        imageClass={project.imageClass}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
