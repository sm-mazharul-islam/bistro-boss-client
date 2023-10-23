import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-60 justify-center items-center py-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some? </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa soluta sequi voluptatum officia quos illum sunt obcaecati necessitatibus, officiis repellendus omnis dolorem, ex corrupti, facere nostrum perferendis eaque vel fuga. Nobis odit exercitationem necessitatibus hic libero labore molestias nam corrupti, consectetur harum suscipit sunt totam dolor cupiditate soluta similique impedit!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;