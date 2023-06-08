import styles from "./addCard.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import MuiAlert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import useDeviceSize from "../../hooks/useDeviceSize";
import axios from "axios";
import ListCards from "./listCard";
const SelectCard = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [width] = useDeviceSize();
  const [listCard, setListCard] = useState<ListItemData[]>([]);
  const isDelete = false;
  useEffect(() => {
    if (localStorage.getItem("userId") !== null) {
      const token = localStorage.getItem("token");
      const account = localStorage.getItem("accountId");
      const config = {
        method: "get",
        url: `https://digitalmoney.ctd.academy/api/accounts/${account}/cards`,
        headers: {
          Authorization: token,
        },
        data: "",
      };
      axios
        .request(config)
        .then((response) => {
          setListCard(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleClick = () => {
    console.log("error" + listCard?.length);
    if (listCard?.length < 10) {
      router.push("/agregar-tarjeta");
    } else {
      setOpen(true);
    }
  };
  const handleContinuarClick = () => {
    router.push("/ingresar-dinero");
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        "@media (max-width: 768px)": {
          paddingTop: "10px",
        },
      }}
    >
      {width > 768 ? (
        width <= 1024 ? (
          <Card
            sx={{
              minWidth: "100%",
              background: "#201F22",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "20px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: "#C1FD35",
                  paddingLeft: "15px",
                }}
                variant="h6"
              >
                Seleccionar tarjeta
              </Typography>
            </CardContent>            
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  color: "#C1FD35",
                }}
              >

                <Button
                  onClick={handleClick}
                  style={{
                    textTransform: "none",
                    color: "#C1FD35",
                  }}
                >
                  <AddCircleOutlineIcon
                    className={styles.icon}
                    sx={{ fontSize: "24px" }}
                  />
                  <Typography
                    sx={{
                      paddingLeft: "10px",
                    }}
                    variant="h6"
                    style={{ textTransform: "none" }}
                  >
                    Nueva tarjeta
                  </Typography>
                </Button>
              </CardContent>
              <Button
                onClick={handleContinuarClick}  
                variant="primary"
                color="secondary"
                size="large"
                type="submit"
                sx={{
                  marginTop: "10px",
                }}
              >
              Continuar
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card
            sx={{
              minWidth: "100%",
              background: "#201F22",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "10px",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingTop: "20px",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: "#C1FD35",
                  paddingLeft: "15px",
                }}
                variant="h6"
              >
                Seleccionar tarjeta
              </Typography>
            </CardContent>
            <Box sx={{
              marginBottom: "1rem",
            }} >
              <ListCards deleteCard={isDelete} />
            </Box>         
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  color: "#C1FD35",
                }}
              >
                <Button
                  onClick={handleClick}
                  style={{
                    textTransform: "none",
                    color: "#C1FD35",
                  }}
                >
                  <AddCircleOutlineIcon
                    className={styles.icon}
                    sx={{ fontSize: "24px" }}
                  />
                  <Typography
                    sx={{
                      paddingLeft: "10px",
                    }}
                    variant="h6"
                    style={{ textTransform: "none" }}
                  >
                    Nueva tarjeta
                  </Typography>
                </Button>
              </CardContent>
              <Button
                onClick={handleContinuarClick}
                variant="primary"
                color="secondary"
                size="large"
                type="submit"
                sx={{
                  marginTop: "10px",
                }}
              >
              Continuar
              </Button>

            </CardContent>
          </Card>
        )
      ) : (
        <Card
          sx={{
            minWidth: "100%",
            background: "#201F22",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "20px",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                color: "#C1FD35",
                paddingLeft: "15px",
              }}
              variant="h6"
              
            >
              Seleccionar tarjeta
            </Typography>
          </CardContent>
          <Box sx={{
            marginBottom: "1rem",
          }} >
            <ListCards deleteCard={isDelete} />
          </Box>          
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                color: "#C1FD35",
              }}
            >
              <Button
                onClick={handleClick}
                style={{
                  textTransform: "none",
                  color: "#C1FD35",
                }}
              >
                <AddCircleOutlineIcon
                  className={styles.icon}
                  sx={{ fontSize: "24px" }}
                />
                <Typography
                  sx={{
                    paddingLeft: "10px",
                  }}
                  variant="h6"
                  style={{ textTransform: "none" }}
                >
                  Nueva tarjeta
                </Typography>
              </Button>
            </CardContent>
            <Button
              onClick={handleContinuarClick}
              variant="primary"
              color="secondary"
              size="large"
              type="submit"
              sx={{
                marginTop: "10px",
              }}
            >
              Continuar
            </Button>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default SelectCard;

