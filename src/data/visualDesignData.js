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
import imageThumb_07ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_07ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageThumb_08ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_08ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';

const visualDesignSectionData = new SectionData(
    'visualDesign',
    'visualDesign',
    'Visual Design',
    'Crafting Compelling Visuals',
    'designWork',
    `I specialize in creating captivating and cohesive visual identities 
    across various media. My portfolio includes premium packaging, book 
    covers, posters, NFTs, and detailed concept art. Using tools like 
    Illustrator and Photoshop, I bring creativity and precision to each 
    project, crafting designs that are both visually appealing and 
    conceptually strong. I excel in logo and brand design, ensuring each 
    piece aligns with the overall brand vision. Passionate about innovation 
    and collaboration, I strive to deliver impactful visual solutions that 
    resonate and engage.`,
    'true',
    'designWork',
    'visDsnGallery',
    [],
    [],
    []     
);

// ImageData fields:
// image
// thumbnail
// imageAlt
// imageDescription
// imageId
// thumbId

const imageFull_01 = new ImageData(
    imageFull_01ref, 
    imageThumb_01ref, 
    'visDsn image-1 fullsize', 
    'visDsn visualDesign-full-01', 
    'visDsn visualDesign-full-01'
);

const imageFull_02 = new ImageData(
    imageFull_02ref, 
    imageThumb_02ref, 
    'visDsn image-2 fullsize', 
    'visDsn visualDesign-full-01', 
    'visDsn visualDesign-full-01'
);

const imageFull_03 = new ImageData(
    imageFull_03ref, 
    imageThumb_03ref, 
    'visDsn image-3 fullsize', 
    'visDsn visualDesign-full-01', 
    'visDsn visualDesign-full-01'
);

const imageFull_04 = new ImageData(
    imageFull_04ref, 
    imageThumb_04ref, 
    'visDsn image-4 fullsize', 
    'visDsn visualDesign-full-01', 
    'visDsn visualDesign-full-01'
);
const imageFull_05 = new ImageData(
    imageFull_05ref, 
    imageThumb_05ref, 
    'visDsn image-5 fullsize', 
    'visDsn visualDesign-full-01', 
    'visDsn visualDesign-full-01'
);

const imageFull_06 = new ImageData(
    imageFull_06ref, 
    imageThumb_06ref, 
    'visDsn image-6 fullsize', 
    'visDsn visualDesign-full-01', 
    'visDsn visualDesign-full-01'
);

const imageFull_07 = new ImageData(
    imageFull_07ref, 
    imageThumb_07ref, 
    'visDsn image-7 fullsize', 
    'visDsn visualDesign-full-01', 
    'visDsn visualDesign-full-01'
);

const imageFull_08 = new ImageData(
    imageFull_08ref, 
    imageThumb_08ref, 
    'visDsn image-8 fullsize', 
    'visDsn visualDesign-full-01', 
    'visDsn visualDesign-full-01'
);

visualDesignSectionData.galleryImages.push(imageFull_01);
visualDesignSectionData.galleryImages.push(imageFull_02);
visualDesignSectionData.galleryImages.push(imageFull_03);
visualDesignSectionData.galleryImages.push(imageFull_04);
visualDesignSectionData.galleryImages.push(imageFull_05);
visualDesignSectionData.galleryImages.push(imageFull_06);
visualDesignSectionData.galleryImages.push(imageFull_07);
visualDesignSectionData.galleryImages.push(imageFull_08);

export default visualDesignSectionData;