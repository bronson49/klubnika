import slickCarousel from 'slick-carousel/slick/slick.min';
import Inputmask from 'inputmask/dist/jquery.inputmask.bundle';

import {menuFunc} from '../components/menu/menu';
import {vacancyFunc} from '../components/vacancy/vacancy';
import {headerFunc} from '../components/header/header';
import {certFunc} from '../components/certif/certif';
import {eatFunc} from '../components/toeat/toeat';
import {testimonialFunc} from '../components/testimonials/testimonials';
import {faqFunc} from '../components/faq/faq';
import {infoFunc} from '../components/info/info';
import {popupFunc} from '../components/vacancyPopup/vacancyPopup';

menuFunc();
headerFunc();
vacancyFunc();
eatFunc();
certFunc();
testimonialFunc();
faqFunc();
infoFunc();
popupFunc();

