import portfolio from "../assets/img/portfolio.png";
import videoCapturing from "../assets/img/video.png";
import nutritionApp from "../assets/img/nutrition.png";
import footer from "../assets/img/footer-bg.png";

export const Projects = () => {

  return (
    <div className="work-container" id="projects">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={portfolio} alt='project' />
                <h2 className="project-title">Online Portfolio</h2>
                <div className="pro-details">
                    <p>This was my very first approach at an online portfolio without any prior knowledge to html and css. <br />Although I wasn't experienced in html or css, It was a wonderful experience which introduced me to a tool such as Vercel in order to publish it online. </p>
                </div>
            </div>
            <div className="project-card">
                <img src={videoCapturing} alt='project' />
                <h2 className="project-title">Video Capturing</h2>
                <div className="pro-details">
                    <p>Here I got to showcase the skills I learnt at my Udemy:"Building 10 real world Applications with python" <br /> I took advantage of pythons cv2 and pandas library in order to create this simple video capturing application</p>
                </div>
            </div>
            <div className="project-card">
                <img src={nutritionApp} alt='project' />
                <h2 className="project-title">Nutrition Matching Game</h2>
                <div className="pro-details">
                    <p>Group project in which my team and I created an html and css based nutrition game, along with the full version created using React <br /> We created this project during the first ever Global Hackerthon </p>
                </div>
            </div>
        </div>
        <img src={footer} alt="footer" />
    </div>            
  );
}