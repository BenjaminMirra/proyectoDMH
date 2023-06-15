import { Box, Button, Modal, Typography } from "@mui/material";
import { Cancel } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  width: "354px",
  background: "#EEEAEA",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "0px",
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0",
  p: 4,
};

const FilterModal = ({
  open,
  handleClose,
  children,
  handleCloseModal,
}: any) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Button onClick={handleCloseModal}>
            <CloseIcon
              sx={{
                fontWeight: "500px",
                fontSize: "30px",
                color: "#201F22",
              }}
            />
          </Button>
        </Box>
        {children}
      </Box>
    </Modal>
  );
};

export default FilterModal;
