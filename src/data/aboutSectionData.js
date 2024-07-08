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
    `Some would say that I am soft spoken and contemplative. I would say that I am thoughtful, inquisitive and deeply analytical. A creative problem-solver with more than seven years of delivering design solutions with a breadth of training spanning architectural principles to web development. A personal philosophy revolving around the idea that curiosity, adaptability, continued learning and observation are vital to being an effective problem solver/designer/developer and a happy person./n/n
    My interests gravitate towards activities where my imagination is allowed to lead and discover new paths. I enjoy drawing, scifi/fantasy, comics/bande dessinee, animation, classic chambara samurai films, architecture, and art in all its forms. I strive towards being an effective collaborator and seek to connect and pool skills with fellow like-minded tech creatives.`,
    'true',
    'hero', 
    []   
);

const heroImage = new ImageData(aboutSectionHeroImage, aboutSectionHeroImage, 'my avatar closeup.', 'closeup illustration of my face centering on my eyes.', 'myHero');
aboutSectionData.galleryImages.push(heroImage);

export default aboutSectionData;