import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { RootState, useAppDispatch } from "../features";
import { GetDetailService } from "../services/productService";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Avatar, Chip, Grid } from "@mui/material";

function Details() {
  const { detail } = useSelector((state: RootState) => state.productList);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const id = location.state;
  
  useEffect(() => {
    dispatch(GetDetailService(id));
  }, [dispatch, id]);


  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={detail?.thumbnail}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detail?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detail?.description}
          </Typography>
        </CardContent>
      </Card>
      <Chip
        sx={{ marginTop: 4 }}
        color="primary"
        variant="filled"
        avatar={<Avatar alt="Natacha" src={detail?.thumbnail} />}
        label="Product Images"
      />
      <Grid container spacing={3} marginTop={2}>
        {detail?.images?.map((itemImg: string, i: number) => (
          <Grid item xs={12} sm={5} md={4}>
            <img key={i} src={itemImg} alt={itemImg} width={300} height={300} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Details;
