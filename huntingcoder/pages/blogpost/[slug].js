import React from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css' 

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return <div className={styles.container}>
        <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nulla repudiandae sint facilis, sunt corrupti numquam id illo. Ut deserunt animi iste voluptatum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maxime rem earum repudiandae, cum possimus quae assumenda nulla culpa. Odit architecto repellendus non, unde recusandae placeat nisi perferendis quod nesciunt! Dolorum sapiente et sint consequuntur earum blanditiis iusto reprehenderit molestiae quia eligendi? Exercitationem, officia nobis!
        </div>
        </main>
    </div>;
};

export default slug;
