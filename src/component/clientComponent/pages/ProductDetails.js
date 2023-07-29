import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Leftbar from "../component/Leftbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toBeInTheDOM } from "@testing-library/jest-dom/matchers";

const token = localStorage.getItem("data");
// console.log(token);
const authAxios = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
});

const ProductDetails = () => {
  const params = useParams();
  // console.log(params._id);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getAllInventory = async () => {
      try {
        const response = await authAxios?.get(
          `api/product_detail/${params._id}`
        );
        console.log(response.data);
        setProduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllInventory();
  }, []);

  // const { data } = product;
  // console.log(typeof data);
  console.log(product);

  return (
    <div>
      <div id="wrapper">
        <Navbar />
        <Leftbar />
        <div className="content-page" id="content-page-Overview">
          <div className="content">
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
                        <div className="col-lg-2">
                          <img
                            src="/assets/images/products/product-1.png"
                            className="img img-thumbnail"
                          />
                        </div>
                        <div className="col-lg-10">
                          <h4>{product.name}</h4>
                          <p className="mb-1">
                            <strong>Product Category: </strong> shirt
                          </p>
                          <p className="mb-1">
                            <strong>Product SKU: </strong> {product.sku}
                          </p>
                          <p className="mb-1">
                            <strong>Product Brand: </strong> AGC
                          </p>
                          <p className="mb-1">
                            <strong>Product Unit : </strong> {product.unit}
                          </p>
                          <p className="mb-1">
                            <strong>Product Variants : </strong> XL, M, L, S
                          </p>
                          <p className="mb-1">
                            <strong>Total Capacity/Available Stock : </strong>{" "}
                            {product.stock}
                          </p>
                        </div>
                        <div className="col-lg-12">
                          <p className="mb-1 mt-2">
                            <strong>Description: </strong>
                            &nbsp;&nbsp;&nbsp;&nbsp; {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default ProductDetails;
