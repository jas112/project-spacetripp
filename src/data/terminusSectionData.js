import SectionData from "./sectionData";
import ImageData from "./imageData";
import imageThumb_01ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import imageFull_01ref from '../assets/images/siteFeatures_imgs/ST_tripp_figure-head-closeup-75.png';
import avatarImage1Ref from '../assets/images/stEmail_imgs/ST_emAvatarCircleOngwb.png';
import avatarImage2Ref from '../assets/images/stEmail_imgs/ST_emAvatarCircleOngWhtCwb.png';
import avatarImage3Ref from '../assets/images/stEmail_imgs/ST_emAvatarCircleWhtwb.png';

const terminusSectionData = new SectionData(
    'terminus',
    'bottom',
    'Terminus',
    `That's it, folks!`,
    'Nfo',
    `Thanks for visiting my custom corner of the web! I hope you had a positive experience. For more info, send an email, check my resume, or visit my links. See you on the flip side!`,
    'true',
    'Nfo',
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

const avatarImage1 = new ImageData(
    avatarImage1Ref, 
    avatarImage1Ref, 
    'avatar image-1 fullsize', 
    'avatarImage1-full-01', 
    'avatarImage1-full-01'
);

const avatarImage2 = new ImageData(
    avatarImage2Ref, 
    avatarImage2Ref, 
    'avatar image-2 fullsize', 
    'avatarImage1-full-02', 
    'avatarImage1-full-02'
);

const avatarImage3 = new ImageData(
    avatarImage3Ref, 
    avatarImage3Ref, 
    'avatar image-3 fullsize', 
    'avatarImage1-full-03', 
    'avatarImage1-full-03'
);

terminusSectionData.galleryImages.push(avatarImage1);
terminusSectionData.galleryImages.push(avatarImage2);
terminusSectionData.galleryImages.push(avatarImage2);

export default terminusSectionData;