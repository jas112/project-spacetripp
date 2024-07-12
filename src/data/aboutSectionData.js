import SectionData from "./sectionData";
import ImageData from "./imageData";
import aboutSectionHeroImage from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png'
import defaultThumbImgRef from '../assets/images/webIcons_imgs/ST_icon-N2.png'

const aboutSectionData = new SectionData(
    'about',
    'about',
    'About Me',
    'A blurb about myself.',
    'nfo',
    `People say I am soft-spoken and contemplative, but I see myself as thoughtful, inquisitive, and deeply analytical. 
    With over seven years of experience in design solutions, from architectural principles to web development, I believe 
    curiosity, adaptability, and continuous learning are key to effective problem-solving and happiness.\n\nI love 
    activities that spark my imagination, like drawing, sci-fi/fantasy, comics, animation, classic samurai films, 
    architecture, and art. I aim to be a great collaborator and connect with like-minded tech creatives.`,
    'true',
    'hero',
    'aboutGallery', 
    [],
    [],
    []   
);

const heroImage = new ImageData(aboutSectionHeroImage, aboutSectionHeroImage, 'my avatar closeup.', 'closeup illustration of my face centering on my eyes.', 'myHero');
aboutSectionData.galleryImages.push(heroImage);

export default aboutSectionData;