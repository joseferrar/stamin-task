import React from "react";
import ResponsiveAppBar from "./AppBar";
import { useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const theme = useTheme();
  return (
    <div
      style={{
        overflowX: "hidden",
        backgroundColor: "#E8E8E8",
        height: "100vh",
      }}
    >
      <ResponsiveAppBar />
      <div
        style={{
          margin: theme.spacing(3),
          marginLeft: theme.spacing(3),
          marginRight: theme.spacing(3),
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
