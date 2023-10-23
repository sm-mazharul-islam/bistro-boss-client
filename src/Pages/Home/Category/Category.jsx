import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import pic1 from "../../../assets/home/slide1.jpg"
import pic2 from "../../../assets/home/slide2.jpg"
import pic3 from "../../../assets/home/slide3.jpg"
import pic4 from "../../../assets/home/slide4.jpg"
import pic5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <>
        <section>
            <SectionTitle 
            subHeading={"From 11:00am to 10:pm"}
            heading={"Order Online"}>
            </SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={pic1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
          </SwiperSlide>
          <SwiperSlide>
          <img src={pic2} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>
          </SwiperSlide>
          <SwiperSlide>
          <img src={pic3} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
          </SwiperSlide>
          <SwiperSlide>
          <img src={pic4} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h3>
          </SwiperSlide>
          <SwiperSlide>
          <img src={pic5} alt="" />
          <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
          </SwiperSlide>
        </Swiper>
        </section>
      </>
    );
};

export default Category;