
"use client";

import React from "react";
import { useSelector, UseSelector } from "react-redux";

function CartPage() {
  const cartItem = useSelector((state: any) => state.product || []);
  console.log(cartItem);
  return <div className="mt-36">CartPage</div>;
}
