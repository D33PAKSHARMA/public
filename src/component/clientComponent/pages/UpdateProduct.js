import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import axios from "axios";
// import { logDOM } from "@testing-library/react";
import { useParams } from "react-router-dom";
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

const UpdateProduct = () => {
  const params = useParams();
  // console.log(params._id);

  const [details, setDetails] = useState({});

  useEffect(() => {
    const getproductDetails = async () => {
      try {
        const response = await authAxios?.get(
          `/api/product_detail/${params._id}`
        );
        // console.log(response.data);
        setDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getproductDetails();
  }, []);

  console.log(details);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    sku: "",
    unit: "",
    cost: "",
    salePrice: "",
    isVariation: "",
    capacity: "",
    stock: "",
    variations: [],
  });
  // const [unit, setUnit] = useState("");
  // const [isVariation, setIsVariation] = useState("");
  const [image, setImage] = useState([]);

  const handleImage = (e) => {
    // const img =
    setImage(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // console.log(user.company_id, unit, isVariation);

    const callAPI = async () => {
      try {
        const res = await authAxios.post("/api/update_product", {
          product_id: params._id,
          name: product.name,
          description: product.description,
          sku: product.sku,
          unit: product.unit,
          cost: product.cost,
          sale_price: product.salePrice,
          is_have_variation: product.isVariation,
          factory_id: user.factory_id,
          capacity: product.capacity,
          stock: product.stock,
          variations: product.variations,
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
                            name="name"
                            value={details.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-lg-12 mb-2">
                          <label>
                            Product Description
                            <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            name="description"
                            // defaultValue={""}
                            value={details.description}
                            onChange={handleInputChange}
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
                            name="sku"
                            value={details.sku}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-lg-4 mb-2">
                          <label>
                            Product Unit <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-select"
                            // name="unit"
                            value={details.unit}
                            onChange={handleInputChange}
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
                            placeholder="Enter Product SKU..."
                            name="cost"
                            value={details.cost}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-lg-4 mb-2">
                          <label>
                            Sale Price <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control product_sku"
                            placeholder="Enter Product SKU..."
                            name="salePrice"
                            value={details.sale_price}
                            onChange={handleInputChange}
                          />
                        </div>
                        {/* <div className="col-lg-4 mb-2">
                          <label>
                            Is Have Variation{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-select"
                            name="isVariation"
                            value={details.isVariation}
                            onChange={handleInputChange}
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
                            placeholder="Enter Product SKU..."
                            name="capacity"
                            value={details.capacity}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-lg-4 mb-2">
                          <label>
                            Stock <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control product_sku"
                            placeholder="Enter Product SKU..."
                            name="stock"
                            value={details.stock}
                            onChange={handleInputChange}
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
                            value={details.variations}
                            onChange={handleInputChange}
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
                                  Save Changes
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

export default UpdateProduct;
