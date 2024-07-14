import SectionData from "./sectionData";
import ImageData from "./imageData";
import imageThumb_01ref from '../assets/images/illoProjects_imgs/illio_thumbs/09152015_Architectural_Drawing_thumb.png';
import imageFull_01ref from '../assets/images/illoProjects_imgs/09152015_Architectural_Drawing.png';
import imageThumb_02ref from '../assets/images/illoProjects_imgs/illio_thumbs/BlockPlex_BlocTek_Buildings_Size_Comparison_3_thumb.jpg';
import imageFull_02ref from '../assets/images/illoProjects_imgs/BlockPlex_BlocTek_Buildings_Size_Comparison_3.jpg';
import imageThumb_03ref from '../assets/images/illoProjects_imgs/illio_thumbs/09162015_Surface_Lab_Interior_Space_Usage_Map_Prime_thumb.jpg';
import imageFull_03ref from '../assets/images/illoProjects_imgs/09162015_Surface_Lab_Interior_Space_Usage_Map_Prime.png';
import imageThumb_04ref from '../assets/images/illoProjects_imgs/illio_thumbs/HCLTV_graphic1_1095_thumb.jpg';
import imageFull_04ref from '../assets/images/illoProjects_imgs/HCLTV_graphic1_1095.jpg';
import imageThumb_05ref from '../assets/images/illoProjects_imgs/illio_thumbs/HCL_PosterComp_Soko_thumb.jpg';
import imageFull_05ref from '../assets/images/illoProjects_imgs/HCL_PosterComp_Soko.jpg';
import imageThumb_06ref from '../assets/images/illoProjects_imgs/illio_thumbs/AfroFuturistic_illio_thumb.jpg';
import imageFull_06ref from '../assets/images/illoProjects_imgs/AfroFuturistic_illio.jpg';
import imageThumb_07ref from '../assets/images/illoProjects_imgs/illio_thumbs/SciFiHero_robots_A_alt_thumb.jpg';
import imageFull_07ref from '../assets/images/illoProjects_imgs/SciFiHero_robots_A_options_comp.jpg';
import imageThumb_08ref from '../assets/images/illoProjects_imgs/illio_thumbs/SciFiHero_robots_RBS_ABCD_color_3_thumb.jpg';
import imageFull_08ref from '../assets/images/illoProjects_imgs/SciFiHero_robots_RBS_ABCD_color_3.jpg';
import imageThumb_09ref from '../assets/images/illoProjects_imgs/illio_thumbs/SciFiHero_stylized_robot_design_color_variations_thumb.jpg';
import imageFull_09ref from '../assets/images/illoProjects_imgs/SciFiHero_stylized_robot_design_color_variations.jpg';

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

const imageFull_09 = new ImageData(
    imageFull_09ref, 
    imageThumb_09ref, 
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
visualDesignSectionData.galleryImages.push(imageFull_09);

export default visualDesignSectionData;