import SectionData from "./sectionData";
import ImageData from "./imageData";
import imageThumb_01ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageFull_01ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageThumb_02ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageFull_02ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageThumb_03ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageFull_03ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageThumb_04ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageFull_04ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageThumb_05ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageFull_05ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageThumb_06ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';
import imageFull_06ref from '../assets/images/webIcons_imgs/ST_icon-N2.png';


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

const imageFull_01 = new ImageData(
    imageFull_01ref, 
    imageThumb_01ref, 
    'emailDev image-1 fullsize', 
    'emailDev-full-01', 
    'emailDev-full-01'
);

const imageFull_02 = new ImageData(
    imageFull_02ref, 
    imageThumb_02ref, 
    'emailDev image-1 fullsize', 
    'emailDev-full-01', 
    'emailDev-full-01'
);

const imageFull_03 = new ImageData(
    imageFull_03ref, 
    imageThumb_03ref, 
    'emailDev image-1 fullsize', 
    'emailDev-full-01', 
    'emailDev-full-01'
);

const imageFull_04 = new ImageData(
    imageFull_04ref, 
    imageThumb_04ref, 
    'emailDev image-1 fullsize', 
    'emailDev-full-01', 
    'emailDev-full-01'
);

const imageFull_05 = new ImageData(
    imageFull_05ref, 
    imageThumb_05ref, 
    'emailDev image-1 fullsize', 
    'emailDev-full-01', 
    'emailDev-full-01'
);

const imageFull_06 = new ImageData(
    imageFull_06ref, 
    imageThumb_06ref, 
    'emailDev image-1 fullsize', 
    'emailDev-full-01', 
    'emailDev-full-01'
);

emailDevelopmentSectionData.galleryImages.push(imageFull_01);
emailDevelopmentSectionData.galleryImages.push(imageFull_02);
emailDevelopmentSectionData.galleryImages.push(imageFull_03);
emailDevelopmentSectionData.galleryImages.push(imageFull_04);
emailDevelopmentSectionData.galleryImages.push(imageFull_05);
emailDevelopmentSectionData.galleryImages.push(imageFull_06);

export default emailDevelopmentSectionData;