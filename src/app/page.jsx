"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStock } from "@/Redux/slices/stockSlice";
import {
  addToCart,
  increAmount,
  decreAmount,
  removeFromCart,
  clearCart,
  CheckOut,
} from "../Redux/slices/cartSlice";
export default function page() {
  const dataProduct = useSelector((state) => state.stock);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.amount * item.price,
      0
    );
  };
  const getTotalAmount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.amount, 0);
  };
  useEffect(() => {
    console.log("dispatch getStock");
    dispatch(getStock());
  }, [dispatch]);

  return (
    <>
      <div style={{ margin: "30px" }}>
        <h1>รายการสินค้า</h1>
        <div className="row">
          <div className="col-7">
            <div className="row">
              {dataProduct.stocks.map((contest, idx) => (
                <div
                  key={idx}
                  className="card col-3"
                  style={{ width: "18rem", margin: "5px" }}
                >
                  <div className="card-body">
                    <h3 className="card-title">{contest.productname}</h3>
                    <p className="card-text">
                      <span className="text-left">
                        ราคา : {contest.price} บาท
                      </span>
                    </p>
                    <p className="card-text">
                      <span className="text-right">
                        จำวนคงเหลือ : {contest.amount} ชิ้น
                      </span>
                    </p>

                    <hr />
                    <div style={{ textAlign: "center" }}>
                      <a
                        href="#"
                        className="btn btn-primary"
                        style={{ margin: "5px" }}
                        onClick={() => dispatch(addToCart(contest))}
                      >
                        เพิ่มลงตะกร้า
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-5">
            <div
              className="col-12 border border-warning"
              style={{ padding: "10px" }}
            >
              <table className="table caption-top">
                <caption>รายการสินค้าในตะกร้า</caption>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">สินค้า</th>
                    <th scope="col">จำนวน</th>
                    <th scope="col">ราคา</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart ? (
                    cart.map((contest, idx) => (
                      <tr key={idx}>
                        <th scope="row">1</th>
                        <td>{contest.productname}</td>
                        <td>{contest.amount}</td>
                        <td>{contest.price}</td>
                        <td>
                          <a
                            className="btn btn-success btn-sm"
                            style={{ marginRight: "5px" }}
                            onClick={() => dispatch(increAmount(contest.id))}
                          >
                            +
                          </a>
                          <a
                            className="btn btn-warning btn-sm"
                            style={{ marginRight: "5px" }}
                            onClick={() => dispatch(decreAmount(contest.id))}
                          >
                            -
                          </a>
                          <a
                            className="btn btn-danger btn-sm"
                            onClick={() => dispatch(removeFromCart(contest.id))}
                          >
                            x
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="text-center" colSpan={4}>
                        ไม่มีรายการ
                      </td>
                    </tr>
                  )}
                </tbody>

                <tfoot>
                  <tr>
                    <th colSpan={2} className="text-end">
                      <span className="text-bold">รวมทั้งสิ้น</span>
                    </th>
                    <th className="text-right">{getTotalAmount()}</th>
                    <th className="text-right">{getTotalPrice()}</th>
                  </tr>
                </tfoot>
              </table>
              <div style={{ textAlign: "center" }}>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ margin: "5px" }}
                  onClick={() => dispatch(CheckOut())}
                >
                  ชำระเงิน
                </a>
                <a
                  href="#"
                  className="btn btn-danger"
                  style={{ margin: "5px" }}
                  onClick={() => dispatch(clearCart())}
                >
                  ล้าง
                </a>
              </div>
            </div>
            {JSON.stringify(cart)}
          </div>
        </div>
      </div>
    </>
  );
}
