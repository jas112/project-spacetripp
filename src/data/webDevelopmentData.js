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
    `This section highlights a few projects that mark the beginning of my 
    journey in web development. The focus of these projects vary between 
    e-commerce, social media, and web game development. These projects were 
    part of a team effort in collaboration with some pretty cool folks.`,
    'true',
    'devWork',
    [],
    []     
);

const imageFull_01 = new ImageData(imageFull_01ref, imageThumb_01ref, 'webDev image-1 fullsize', 'webDev-full-01', 'webDev-full-01');
webDevelopmentSectionData.galleryImages.push(imageFull_01);
webDevelopmentSectionData.galleryImages.push(imageFull_01);
webDevelopmentSectionData.galleryImages.push(imageFull_01);
webDevelopmentSectionData.galleryImages.push(imageFull_01);
webDevelopmentSectionData.galleryImages.push(imageFull_01);

export default webDevelopmentSectionData;
