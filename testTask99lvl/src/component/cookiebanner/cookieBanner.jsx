import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import Cookies from "js-cookie";

export default function CookieBanner(props) {
  const style = {
    position: "absolute",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    boxShadow: 24,
    borderRadius: "20px",
    color: "#fefefe",
    p: 2,
  };

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAccept = () => {
    // Зберігаємо куки з позначкою "accepted" на 365 днів
    Cookies.set("cookieAccepted", true, { expires: 365 });
    handleClose();
  };

  if (props.show && !Cookies.get("cookieAccepted")) {
    // Перевіряємо, чи користувач ще не погодився з куками
    return (
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              By continuing to use this website, you agree to the use of cookies
              in accordance with our Privacy Policy, contributing to improving
              your browsing experience on the website.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                m: 2,
              }}>
              <button className="cookie-btn accept-btn" onClick={handleAccept}>
                accept
              </button>
              <button className="cookie-btn reject-btn" onClick={handleClose}>
                reject
              </button>
            </Box>
          </Box>
        </Modal>
      </Box>
    );
  } else {
    return null;
  }
}
