import React from "react";
import { useState } from "react";
import useForm from "../hooks/useForm";

export default function OrderPage() {
  const { values, setValues } = useForm({
    name: "",
    email: "",
  });
  return (
    <>
      <h1>Order</h1>
      <form>
        <fieldset>
          <legend>Customer Information</legend>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={values.name || ""}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={values.email || ""}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Select Your Wings</legend>
        </fieldset>
        <fieldset>
          <legend>Select Your Sides</legend>
        </fieldset>
        <button type="submit">Place Order</button>
      </form>
    </>
  );
}
