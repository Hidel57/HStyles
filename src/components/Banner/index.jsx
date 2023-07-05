import './banner.css'

const Banner = (props) => {
    const {title, subtitle, alingItems} = props
    return (
        <div
          className='banner banner-hero'
          >
            <img
            src="https://media.istockphoto.com/id/855535872/photo/webdesigner-sketching-responsive-website-wireframe-with-laptop-smartphone-and-tablet.jpg?s=612x612&w=0&k=20&c=3TOuMdg5E4YzR8SzJf_TihoKApOyle8dLv3xIFGPfbE="
            alt='banner imagen' 
            className='banner__hero-img'
            />
            <div
              className="banner-container"
              style={{alignItems: alingItems}}
              >
                <div className='banner__title'>{title}</div>
                <div className='banner__subtitle'>
                    {subtitle}
                </div>
            </div>
        </div>
    );
}
 
export default Banner;