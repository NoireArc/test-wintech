import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

export default function ImageCardPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/images")
      .then((res) => {
        setImages(res.data);
        setLoading(false);
        console.log("Fetched images:", res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch images:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar />
      <div className="flex flex-col w-screen min-h-screen items-center justify-center text-center p-4">
        <Typography variant="h4" component="h1">
          Picture Gallery{" "}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {images.map((image) => (
            <Card key={image.id} className="shadow-lg">
              <CardMedia
                component="img"
                height="200"
                width={300}
                image={image.url}
                alt={`Image ${image.id}`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Image ID: {image.id}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
