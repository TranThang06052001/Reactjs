import StarIcon from "@mui/icons-material/Star";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
export default function Products() {
  let productsList = [
    {
      imgUrl:
        "http://happyeaster.shop/assets/images/thumbs/61a2f250b318ca1cbde1f4da_25-virtual-gift-voucher_415.png",
      title: "$25 Virtual Gift voucher",
      star: "4.00",
      review: 1,
      price: "25.00",
      oldPrice: "",
    },
    {
      imgUrl:
        "http://happyeaster.shop/assets/images/thumbs/61a2f24fb318ca1cbde1f289_build-your-own-computer_415.png",
      title: "Build your own computer",
      star: "4.00",
      review: 1,
      price: "1,200.00",
      oldPrice: "",
    },
    {
      imgUrl:
        "http://happyeaster.shop/assets/images/thumbs/61a2f24fb318ca1cbde1f2bf_mi-notebook-14_415.png",
      title: "Mi Notebook 14",
      star: "4.00",
      review: 1,
      price: "1,800.00",
      oldPrice: "2,000.00",
    },
    {
      imgUrl:
        "http://happyeaster.shop/assets/images/thumbs/61a2f24fb318ca1cbde1f3c6_redmi-k30-ultra_415.png",
      title: "Redmi K30 Ultra",
      star: "0.00",
      review: 0,
      price: "199.00",
      oldPrice: "",
    },
  ];

  return (
    <div className="Category">
      <div className="grid wide">
        <h1>Featured products</h1>
        <div className="containerProducts">
          <div className="row">
            {productsList.map((item, index) => (
              <div key={index} className="col l-3 c-6 m-4 ">
                <div className="background">
                  <img src={item.imgUrl} alt="itemImgProduct" width="100%" />
                </div>
                <p className="titleProduct">{item.title}</p>
                <div className="starWrap">
                  <p className="star">
                    {parseInt(item.star) >= 1 ? (
                      <StarIcon sx={{ color: "#ffc107" }} />
                    ) : (
                      <StarOutlineOutlinedIcon sx={{ color: "#ffc107" }} />
                    )}
                    {parseInt(item.star) >= 2 ? (
                      <StarIcon sx={{ color: "#ffc107" }} />
                    ) : (
                      <StarOutlineOutlinedIcon sx={{ color: "#ffc107" }} />
                    )}
                    {parseInt(item.star) >= 3 ? (
                      <StarIcon sx={{ color: "#ffc107" }} />
                    ) : (
                      <StarOutlineOutlinedIcon sx={{ color: "#ffc107" }} />
                    )}
                    {parseInt(item.star) >= 4 ? (
                      <StarIcon sx={{ color: "#ffc107" }} />
                    ) : (
                      <StarOutlineOutlinedIcon sx={{ color: "#ffc107" }} />
                    )}
                    {parseInt(item.star) === 5 ? (
                      <StarIcon sx={{ color: "#ffc107" }} />
                    ) : (
                      <StarOutlineOutlinedIcon sx={{ color: "#ffc107" }} />
                    )}
                  </p>
                  <b>{item.star}</b>
                  <span className="review">/ {item.review} review(s)</span>
                </div>
                <p className="price">
                  $ {item.price}
                  {item.oldPrice && <span className="old-Price">${item.oldPrice}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
