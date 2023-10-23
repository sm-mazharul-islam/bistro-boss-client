import { Parallax } from 'react-parallax';


const Cover = ({bgImg, title}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bgImg}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div>
            <div className="hero min-h-screen">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 h-[300px] lg:w-[80%]">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    
    </div>
  </div>
</div>
        </div>
    </Parallax>
        
    );
};

export default Cover;

/* React Parallax */