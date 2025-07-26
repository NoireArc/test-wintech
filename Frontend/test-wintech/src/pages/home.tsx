import React from "react";
import Navbar from "../components/Navbar";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar />
      <div className="flex flex-col w-screen min-h-screen items-center justify-center text-center">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          fontWeight={"bold"}
        >
          Welcome to the Picture Gallery
        </Typography>
        <Typography variant="h6" component="p" style={{ color: "#555" }}>
          Discover and explore beautiful images from arount the world. Browse
          our <br />
          curated colection of stunning photographs
        </Typography>
        <div className="flex flex-row w-full items-center justify-center mt-4">
          <Link to="/gallery" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "20px", backgroundColor: "#000000" }}
            >
              View Gallery
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="primary"
            style={{ margin: "20px", borderColor: "#000000", color: "#000000" }}
            onClick={() => alert("Explore Pictures Clicked!")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
