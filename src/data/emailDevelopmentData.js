import SectionData from "./sectionData";
import ImageData from "./imageData";
import imageThumb_01ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_01ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageThumb_02ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_02ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageThumb_03ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_03ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageThumb_04ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_04ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageThumb_05ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_05ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageThumb_06ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_06ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';


const emailDevelopmentSectionData = new SectionData(
    'emailDevelopment',
    'emailDevelopment',
    'Email Development',
    'Developing Engaging Email Layouts',
    'devWork',
    `I specialize in designing and constructing responsive, interactive HTML emails 
    that enhance digital marketing efforts. My expertise includes creating reusable 
    email templates, optimizing assets for efficient delivery, and ensuring functionality 
    across various browsers and clients. I am skilled in building engaging HTML newsletters 
    and landing pages, adhering to best practices for quality control. Passionate about 
    precision and collaboration, I strive to deliver impactful email solutions that drive 
    customer engagement and satisfaction.`,
    'true',
    'devWork',
    'emailDevGallery',
    [],
    [],
    []     
);

const imageFull_01 = new ImageData(imageFull_01ref, imageThumb_01ref, 'emailDev image-1 fullsize', 'emailDev-full-01', 'emailDev-full-01');
emailDevelopmentSectionData.galleryImages.push(imageFull_01);
emailDevelopmentSectionData.galleryImages.push(imageFull_01);
emailDevelopmentSectionData.galleryImages.push(imageFull_01);
emailDevelopmentSectionData.galleryImages.push(imageFull_01);

export default emailDevelopmentSectionData;