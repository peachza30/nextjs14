"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/src/store/store";
import { addCart, userSelector } from "@/src/store/slices/userSlice";
import { Button } from "@mui/material";
type Props = {};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const userReducer = useSelector(userSelector);

  const handleClick = () => {
    dispatch(addCart(1));
  };

  return (
    <div>
      <h1>{userReducer.cart}</h1>
      <Button variant="contained" onClick={handleClick}>
        +
      </Button>
    </div>
  );
};

export default Login;
