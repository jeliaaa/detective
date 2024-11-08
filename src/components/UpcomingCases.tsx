import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const UpcomingCases = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="w-full h-full">
            {[0, 1, 2, 3].map((id) => (
                <SwiperSlide key={id} className='!flex justify-center'>
                    <div className='h-[80%] w-[90%] bg-white rounded-lg'>
                        <img src="https://picsum.photos/50" alt="" />
                        <h1>casecasecase</h1>
                        <p>blablablablabl</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default UpcomingCases