import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#FFFFFF" }}>
      <Toolbar>
        {/* Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "#000000" }}
        >
          Picture Gallery
        </Typography>

        {/* Menu Buttons */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>
              <Typography style={{ color: "#000000" }}> Home </Typography>
            </Button>
          </Link>
          <Link to="/gallery" style={{ textDecoration: "none" }}>
            <Button>
              <Typography style={{ color: "#000000" }}> Pictures</Typography>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
