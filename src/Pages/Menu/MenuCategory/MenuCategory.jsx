import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, Img}) => {
    return (
        <div className="pt-8">
             {title && <Cover bgImg={Img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
             {
                        items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                        >
                        </MenuItem>)
                    }
                    </div>
                   <Link to={`/order/${title}`}>
                   <button className="btn btn-outline border-0 bg-slate-100 border-b-4 border-orange-400 ml-[40%] w-[200px]">Order Now</button>
                   </Link>
        </div>
    );
};

export default MenuCategory;