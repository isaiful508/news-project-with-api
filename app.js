const loadCategory= async() =>{
    const response = await fetch(' https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();

    // console.log(data.data.news_category
    //     );

    const categoryContainer = document.getElementById('category-bar-container');

        data.data.news_category.forEach((item) => {
            const div = document.createElement("div");
            div.innerHTML = `
            <button onclick="loadNews('${item.category_id}')"> ${item.category_name}</button>
            `;
            categoryContainer.appendChild(div);


        });  

}






const loadNews = async (catId) => {
    console.log(catId);

    const response = await fetch(` https://openapi.programming-hero.com/api/news/category/${catId}`);
    const data = await response .json();

    const newsContainer =document.getElementById('news-container');
    newsContainer.innerHTML ='';
  data.data.forEach((news) => {
    // console.log(news);
  const div = document.createElement('div');
  div.classList.add('singleNews');

    div.innerHTML=`
    <div class="news-photo">
    <img
      src=
      alt=""
    />
  </div>
  <div class="news-info">
    <div class="news-header">
      <h4>${news.title}</h4>
      <p class="news-badge">
      ${news.rating.badge
      }
      <sup> 
      <h6 class="news-rating"> 
      ${news.rating.number
      }
      </h6>
</sup>
      </p>
    </div>
    <p>
   ${news.details.slice(0,200)}
    </p>

    <div class="news-footer">
      <div class="author">
        <div class="">
          <img
            class="author-img"
            src=
            alt=""
          />
        </div>
        <div class="author-info">
          <h6> </h6>
          <p>Date:</p>
        </div>
      </div>
      <div class="Views author">
        <img
          class="view-img"
          src="https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"
          alt=""
        />
        <p>450</p>
      </div>
      <div class="details-btn-container">
        <button  class="details-btn">
        Details
        </button>
      </div>
  </div>
</div>
    `
newsContainer.appendChild(div);

  })
}






loadNews("01");

loadCategory();