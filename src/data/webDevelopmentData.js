import SectionData from "./sectionData";
import ImageData from "./imageData";
import imageThumb_01ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_01ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';

const webDevelopmentSectionData = new SectionData(
    'webDevelopment',
    'webDevelopment', 
    'Web Development', 
    'My web dev adventures.',
    'devWork',
    `Some would say that I am soft spoken and contemplative. I would say that I am thoughtful, inquisitive and deeply analytical. A creative problem-solver with more than seven years of delivering design solutions with a breadth of training spanning architectural principles to web development. A personal philosophy revolving around the idea that curiosity, adaptability, continued learning and observation are vital to being an effective problem solver/designer/developer and a happy person./n/n
    My interests gravitate towards activities where my imagination is allowed to lead and discover new paths. I enjoy drawing, scifi/fantasy, comics/bande dessinee, animation, classic chambara samurai films, architecture, and art in all its forms. I strive towards being an effective collaborator and seek to connect and pool skills with fellow like-minded tech creatives.`,
    'true',
    'devWork',
    []   
);

const imageFull_01 = new ImageData(imageFull_01ref, imageThumb_01ref, 'webDev image-1 fullsize', 'webDev-full-01', 'webDev-full-01');
webDevelopmentSectionData.galleryImages.push(imageFull_01);
webDevelopmentSectionData.galleryImages.push(imageFull_01);
webDevelopmentSectionData.galleryImages.push(imageFull_01);
webDevelopmentSectionData.galleryImages.push(imageFull_01);
webDevelopmentSectionData.galleryImages.push(imageFull_01);

export default webDevelopmentSectionData;
