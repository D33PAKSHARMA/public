import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import axios from "axios";
// import { logDOM } from "@testing-library/react";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const token = localStorage.getItem("data");
// console.log(token);
const authAxios = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
});

const user = jwtDecode(token);
// console.log(user);

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    discription: "",
    sku: "",
    cost: "",
    salePrice: "",
    capacity: "",
    stock: "",
    variations: [],
  });
  const [unit, setUnit] = useState("");
  const [isVariation, setIsVariation] = useState("");
  const [image, setImage] = useState([]);

  const handleImage = (e) => {
    // const img =
    setImage(e.target.files[0]);
  };

  // console.log(image);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // console.log(user.company_id, unit, isVariation);

    const callAPI = async () => {
      try {
        const res = await authAxios.post("/api/add_product", {
          name: product.name,
          description: product.discription,
          sku: product.sku,
          unit: unit,
          cost: product.cost,
          sale_price: product.salePrice,
          is_have_variation: 0,
          factory_id: user.factory_id,
          capacity: product.capacity,
          stock: 0,
          variations: 0,
          image: JSON.stringify(image),
        });
        if (res.data.status_code === 200) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    callAPI();
  };

  return (
    <div>
      <div id="wrapper">
        <Navbar />
        <Leftbar />
        <div className="content-page" id="content-page-Overview">
          <form className="content" onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="page-title-box">&nbsp;</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12 mb-2">
                          <label>
                            Product Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control product_name"
                            placeholder="Enter Product Name..."
                            required
                            name="name"
                            value={product.name}
                            onChange={(e) =>
                              setProduct({ ...product, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-lg-12 mb-2">
                          <label>
                            Product Description
                            <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            required
                            name="discription"
                            // defaultValue={""}
                            value={product.discription}
                            onChange={(e) =>
                              setProduct({
                                ...product,
                                discription: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-lg-4 mb-2">
                          <label>
                            Product SKU <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control product_sku"
                            placeholder="Enter Product SKU..."
                            required
                            name="sku"
                            value={product.sku}
                            onChange={(e) =>
                              setProduct({ ...product, sku: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-lg-4 mb-2">
                          <label>
                            Product Unit <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-select"
                            // name="unit"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                          >
                            <option value="KG">KG</option>
                            <option value="GM">GM</option>
                            <option value="Lit">Lit</option>
                            <option value="Piece">Piece</option>
                          </select>
                        </div>
                        <div className="col-lg-4 mb-2">
                          <label>
                            Cost <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control product_sku"
                            required
                            placeholder="Enter Product SKU..."
                            name="cost"
                            value={product.cost}
                            onChange={(e) =>
                              setProduct({ ...product, cost: e.target.value })
                            }
                          />
                        </div>
                        <div className="col-lg-4 mb-2">
                          <label>
                            Sale Price <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control product_sku"
                            required
                            placeholder="Enter Product SKU..."
                            name="salePrice"
                            value={product.salePrice}
                            onChange={(e) =>
                              setProduct({
                                ...product,
                                salePrice: e.target.value,
                              })
                            }
                          />
                        </div>
                        {/* <div className="col-lg-4 mb-2">
                          <label>
                            Is Have Variation{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-select"
                            // name="isVariation"
                            value={isVariation}
                            onChange={(e) => setIsVariation(e.target.value)}
                          >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </div> */}
                        <div className="col-lg-4 mb-2">
                          <label>
                            Capacity <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control product_sku"
                            required
                            placeholder="Enter Product SKU..."
                            name="capacity"
                            value={product.capacity}
                            onChange={(e) =>
                              setProduct({
                                ...product,
                                capacity: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-lg-4 mb-2">
                          <label>
                            Stock <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control product_sku"
                            required
                            placeholder="Enter Product SKU..."
                            name="stock"
                            value={product.stock}
                            onChange={(e) =>
                              setProduct({ ...product, stock: e.target.value })
                            }
                          />
                        </div>
                        {/* <div className="col-lg-4 mb-2">
                          <label>
                            Variations <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control product_sku"
                            placeholder="Enter Product SKU..."
                            name="variations"
                            value={product.variations}
                            onChange={(e) =>
                              setProduct({
                                ...product,
                                variations: e.target.value,
                              })
                            }
                          />
                        </div> */}

                        {/* <div className="col-lg-4 mb-3">
                          <label>
                            Upload Product Images{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="file"
                            className="form-control product_brand"
                            value=""
                            onChange={(e) => handleImage(e)}
                          />
                        </div> */}
                      </div>
                      {/* <h5 className="mb-0">Variations</h5> */}
                      {/* <hr /> */}
                      {/* <div className="row">
                        <div className="col-lg-4 mb-3">
                          <label>
                            Attributes <span className="text-danger">*</span>
                          </label>
                          <select className="form-select">
                            <option value>Select Attributes</option>
                            <option value="Colour">Colour</option>
                            <option value="Size">Size</option>
                          </select>
                        </div>
                        <div className="col-lg-8 mb-3" />
                        <div className="col-lg-12">
                          <table className="table table-bordered">
                            <thead className="bg-light">
                              <tr>
                                <th>Variant</th>
                                <th>Variant Price</th>
                                <th>SKU</th>
                                <th>Quantity</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Medium</td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control product_brand"
                                    placeholder="Enter Product Brand..."
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control product_brand"
                                    placeholder="Enter Product Brand..."
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control product_brand"
                                    placeholder="Enter Product Brand..."
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>XL</td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control product_brand"
                                    placeholder="Enter Product Brand..."
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control product_brand"
                                    placeholder="Enter Product Brand..."
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control product_brand"
                                    placeholder="Enter Product Brand..."
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div> */}
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-lg-3 mx-auto">
                                <button
                                  className="btn btn-primary w-100"
                                  type="submit"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6"> </div>
                <div className="col-md-6">
                  © <a href>Direct Factory Marketplace</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="rightbar-overlay" />
    </div>
  );
};

export default CreateProduct;
