import React from 'react'
import image1 from '../../assets/images/blog1.png'
import image2 from '../../assets/images/blog2.png'
import image3 from '../../assets/images/blog3.png'
import image4 from '../../assets/images/blog4.png'

export default function Blogs() {
    const blogContent = [
        {
            id: 1,
            image: image1,
            header: `Learn about this week's top author`,
            paragraph: `Jump start your book reading by quickly check through the popular book categories...`
        },
        {
            id: 2,
            image: image2,
            header: `Why we celebrate readers`,
            paragraph: `Jump start your book reading by quickly check through the popular book categories...`
        },
        {
            id: 3,
            image: image3,
            header: `Toddlers can also read`,
            paragraph: `Jump start your book reading by quickly check through the popular book categories...`
        },
        {
            id: 4,
            image: image4,
            header: `Get started on your game`,
            paragraph: `Jump start your book reading by quickly check through the popular book categories...`
        }
    ]
  return (
    <div>
        <div className='mt-24'>
            <div className="container">
                <h2 className='font-semibold text-[32px] text-[#444444] tracking-[1.87px] text-center'>Read our many blogs</h2>
                <div className='mt-10 grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-x-11 gap-y-6'>
                    {blogContent.map((blog) => (
                        <div key={blog.id} className='relative w-fit'>
                            <img src={blog.image} alt={blog.header} />
                            <div className='absolute group w-full h-full inset-0 z-20 hover:bg-[#0E0E0E66] rounded-[4.86px]'>
                                <button className='hidden group-hover:flex absolute xs:py-3 py-1 xs:px-11 px-4 text-white font-[OpenSans] font-semibold text-xl tracking-[1.14px] border border-white xs:top-1/2 top-1/4 left-1/2 -translate-x-1/2 xs:-translate-y-1/2 -translate-y-1/4'>Read more</button>
                            </div>
                            <span className='absolute bottom-0 left-0 ps-4 xs:pb-7 text-white font-[OpenSans] tracking-[1.82px] z-30 bg-[linear-gradient(to_bottom,_rgba(157,156,156,0)_24%,_rgba(0,0,0,0.95)_89%)] rounded-[4.86px]'>
                                <h4 className='font-bold xs:text-[22px] text-[18px]'>{blog.header}</h4>
                                <p className='xs:text-[14px] text-xs xs:text-wrap'>{blog.paragraph}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
