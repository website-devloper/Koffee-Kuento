import BreadCumb from '@/app/Components/Common/BreadCumb';
import FoodItem4 from '@/app/Components/FoodItem/FoodItem4';
import { menuCategories } from '@/data/menu';

export const metadata = {
    title: 'Menu – Cafés, Brunch & Saveurs Maison',
    description: 'Découvrez le menu complet de Koffee Kuento : cafés de spécialité, brunch maison, petit-déjeuner, salades, plats et pâtisseries. Prix en MAD.',
};

const page = async ({ searchParams }) => {
    const params = await searchParams;
    const catParam = params?.category;
    const initialCategory = catParam && menuCategories.find(c => c.id === catParam)
        ? catParam
        : menuCategories[0].id;

    return (
        <div>
            <BreadCumb bgimg="/assets/img/bg/breadcumb-menu.png" titleKey="breadcrumb.menu" />
            <FoodItem4 initialCategory={initialCategory} />
        </div>
    );
};

export default page;
