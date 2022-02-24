export default function Category() {
  let categoryList = [
    {
      imgUrl:
        "http://happyeaster.shop/assets/images/thumbs/61a2f24fb318ca1cbde1f23e_smaccessoriesartphones_450.jpeg",
      title: "Others",
    },
    {
      imgUrl:
        "http://happyeaster.shop/assets/images/thumbs/61a2f24fb318ca1cbde1f240_sport_450.jpeg",
      title: "Sport",
    },
    {
      imgUrl:
        "http://happyeaster.shop/assets/images/thumbs/61a2f24fb318ca1cbde1f24a_lego_450.jpeg",
      title: "Lego",
    },
  ];

  return (
    <div className="Category">
      <div className="grid wide">
        <h1>Welcome to our store</h1>
        <p style={{ textAlign: "Left", fontSize: "18px", marginTop: "30px",lineHeight:"50px" }}>
          Online shopping is the process consumers go through to purchase
          products or services over the Internet. You can edit this in the admin
          site. If you have questions, see the Documentation, or post in the
          Forums at grandnode.com
        </p>
        <div className="containerCategory">
          <div className="row">
            {categoryList.map((item, index) => (
                <div key={index} className="col l-4 c-12 m-6 ">
                  <div className="boderItem">
                  <img src={item.imgUrl} alt="itemImg" width="100%"/>
                   <p className='title' >{item.title}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
