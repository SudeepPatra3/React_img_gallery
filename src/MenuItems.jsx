import React from "react";

const MenuItems = (props) => {
  return (
    <>
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {props.items.map((elem) => {
                const { id, name, image, description, price } = elem;
                return (
                  <div
                    className="item1 col-12 col-md-6 g-5 col-lg-6 col-xl-4 my-3"
                    key={id}
                  >
                    <div className="row Item-inside">
                      <div className="img-div col-12 col-md-12 col-lg-4">
                        <img src={image} className="img-fluid" alt={name} />
                      </div>
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h4>{name}</h4>
                          <p>{description}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between">
                            <h6 className="text-success">Price : {price}</h6>
                            <a href="">
                              <button className="btn btn-primary btn-sm">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>*prices may vary accordingly</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
