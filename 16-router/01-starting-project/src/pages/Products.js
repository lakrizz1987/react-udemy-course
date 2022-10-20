import { NavLink } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>Products Page</h1>
            <ul>
                <li>
                    <NavLink to='/products/book' >A book</NavLink>
                </li>
                <li>
                    <NavLink to='/products/courses'  >Courses</NavLink>
                </li>
                <li>
                    <NavLink to='/products/tv' >Tv</NavLink>
                </li>
            </ul>
        </section>
    )
}

export default Products;