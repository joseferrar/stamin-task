import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Paper from "@mui/material/Paper";
import { RootState, useAppDispatch } from "../features";
import { GetProductService } from "../services/productService";
import { useSelector } from "react-redux";
import { Avatar, Button, Container } from "@mui/material";
import ReactPaginate from "react-paginate";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { ProductState } from "../types/ProductType";

const styles = {
  table: {
    background: "#000",
  },
  tableCall: {
    color: "#fff",
  },
};

function Home() {
  const { products } = useSelector((state: RootState) => state.productList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const pageCount = Math.ceil(products.length / perPage);

  useEffect(() => {
    dispatch(GetProductService(""));
  }, [dispatch]);

  const handlePageClick = (e: any) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
  };

  const offset1 = offset * perPage;

  //   console.log("products", products);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={styles.table}>
            <TableRow>
              <TableCell style={styles.tableCall}>S.no</TableCell>
              <TableCell style={styles.tableCall}>Product Image</TableCell>
              <TableCell style={styles.tableCall}>Product Name</TableCell>
              <TableCell style={styles.tableCall} align="right">
                Brand
              </TableCell>
              <TableCell style={styles.tableCall} align="right">
                Price
              </TableCell>
              <TableCell style={styles.tableCall} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products
                .slice(offset1, offset1 + perPage)
                .map((product: ProductState) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product?.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Avatar alt={product?.title} src={product?.thumbnail} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product?.title}
                    </TableCell>
                    <TableCell align="right">{product?.brand}</TableCell>
                    <TableCell align="right">{product?.price}</TableCell>
                    <TableCell style={styles.tableCall} align="right">
                      <Button
                        variant="contained"
                        onClick={() =>
                          navigate(`/${product?.id}`, { state: product?.id })
                        }
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginLeft: "auto" }}>
        <ReactPaginate
          previousLabel={
            <ArrowBackIosIcon
              style={{ color: offset === 0 ? "gray" : "#000" }}
            />
          }
          nextLabel={
            <ArrowForwardIosIcon
              style={{ color: offset === products.length ? "gray" : "#000" }}
            />
          }
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={perPage}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </Container>
  );
}

export default Home;
