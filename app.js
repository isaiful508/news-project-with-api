const loadCategory= async() =>{
    const response = await fetch(' https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    console.log(data.data.news_category
        );
    const categoryContainer = document.getElementById('category-bar-container');

        data.data.news_category.forEach((item) => {
            const div = document.createElement("div");
            div.innerHTML = `
            <button>${item.category_name}</button>
            `;
            categoryContainer.appendChild(div);


        });  

}




loadCategory();