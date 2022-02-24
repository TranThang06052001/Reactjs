import Buttom from '@mui/material/Button/'


export default function News() {
    let NewsList = [
      {
        introduce:'New online store is open!',
        body: "The new grandnode store is open now! We are very excited to offer our new range of products. We will be constantly adding to our range so please register on our site.",
        time:"Sunday, November 28, 2021"
    },
      {
        introduce:'Grandnode new release!',
        body: "grandnode includes everything you need to begin your e-commerce online store. We have thought of everything and it's all included! grandnode is a fully customizable shopping cart",
        time:"Sunday, November 28, 2021"
    },
      {
        introduce:'About Grandnode',
        body: "It's stable and highly usable. From downloads to documentation, www.grandnode.com offers a comprehensive base of information, resources, and support to the grandnode community.",
        time:"Sunday, November 28, 2021"
    },
    
    ];
  
    return (
      <div className="News">
        <div className="grid wide">
          <h1>News</h1>
          <div className="containerNews">
            <div className="row">
              {NewsList.map((item, index) => (
                  <div key={index} className="col l-4 c-12 m-6 ">
                    <div className="NewsItem">
                        <p  className="NewsIntroduce">{item.introduce}</p>
                        <p  className="NewsBody">{item.body}</p>
                        <p  className="NewsTime">{item.time}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <Buttom  variant="outlined">View News Archive</Buttom>
      </div>
    );
  }
  