import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className='mb-12'>
            <section>
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"From Our Menu"}
                >
                </SectionTitle>
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        popular.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                    }
                </div>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>View All Menu</button>
            </section>

        </div>
    );
};

export default PopularMenu;