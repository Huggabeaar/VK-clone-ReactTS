import { Grid } from "@mui/material";
import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} marginX={5}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
