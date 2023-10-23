import { Helmet } from 'react-helmet-async';
import bgImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>Our | Menu</title>
            </Helmet>
        <Cover bgImg={bgImg} title="Our Menu"></Cover>
        {/* main cover */}
       <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
       {/* offered menu items */}
       <MenuCategory items={offered}></MenuCategory>
        {/* dessert menu items */}
 <MenuCategory items={desserts} title="dessert" Img={dessertImg}></MenuCategory>
{/* pizza menu items */}
<MenuCategory items={pizza} title={"pizza"} Img={pizzaImg}></MenuCategory>
{/* salad menu items */}
<MenuCategory items={salad} title={"salad"} Img={saladImg}></MenuCategory>
{/* soup menu items */}
<MenuCategory items={soup} title={"soup"} Img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;