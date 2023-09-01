import '../categories-container/categories-container.styles.scss';
import CategoryItem from '../category-item/category-item.component';

//maps over the categories one by one
const CategoryContainer = ({categories})=>{
    return(
        <div className="categories-container">
            {categories.map((category)=>(
            <CategoryItem key={category.id} category={category} />
      ))}
    </div>
    );
}

export default CategoryContainer;