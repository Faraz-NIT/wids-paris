// HeroCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
]
function HeroCarousel() {
  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Hero Content */}
              <div className="relative z-10 flex h-full items-center px-12">
                <div className="max-w-xl text-white">
                  <h1 className="text-5xl font-bold leading-tight">
                    Women in Data Science
                  </h1>
                  <p className="mt-4 text-lg opacity-90">
                    Empowering women through data, AI & innovation
                  </p>

                  <button className="mt-6 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-black hover:bg-emerald-400 transition">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default HeroCarousel