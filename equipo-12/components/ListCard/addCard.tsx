import styles from "./addCard.module.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Card, CardContent, Snackbar, Typography } from "@mui/material"
import { useRouter } from "next/router";
import MuiAlert from '@mui/material/Alert';
import { useState } from "react";
import useDeviceSize from "../../hooks/useDeviceSize";
const AddCard = () => {

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [width] = useDeviceSize();
    const handleClick = () => {
        if (9 < 10) {
            router.push('/agregar-tarjeta');
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
            < Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
            }
            }>
            {width > 768 ?
                width<=1024 ? 
                <Card sx={{
                    minWidth: "100%",
                    background: "#201F22",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "20px"
                }}>
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }
                    }>
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            width: "100%",
                            color: "#C1FD35",
                        }
                        }>
                            <Button onClick={handleClick}
                                style={{
                                    textTransform: 'none',
                                    color: '#C1FD35'
                                }}
                            >
                                <AddCircleOutlineIcon className={styles.icon} sx={{ fontSize: "24px", }} />
                                <Typography
                                    sx={{
                                        paddingLeft: "10px"
                                    }} variant="h6"
                                    style={{ textTransform: 'none' }}
                                    >
                                    Nueva tarjeta
                                </Typography>
                            </Button>
                        </CardContent>
                        <Button onClick={handleClick}
                        style={{
                                textTransform: 'none',
                                color: '#C1FD35'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#C1FD35",
                                }} variant="h6"
                                style={{ textTransform: 'none' }}
                                >
                                <ArrowForwardIcon sx={{ fontSize: "24px" }} />
                            </Typography>
                        </Button>
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                            <MuiAlert onClose={handleClose} severity="warning" elevation={6} variant="filled">
                                No se pueden Agregar mas de 10 Tarjetas
                            </MuiAlert>
                        </Snackbar>
                    </CardContent>
                </Card>
                :
                <Card sx={{
                    minWidth: "100%",
                    background: "#201F22",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "20px"
                }}>
                    <CardContent>
                        <Typography sx={{
                            color: "#FFFFFF",
                            paddingLeft: "15px"
                        }} variant="h6">
                            Agregá tu tarjeta de débito o crédito
                        </Typography>
                    </CardContent>
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }
                    }>
                        <CardContent sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            width: "100%",
                            color: "#C1FD35",
                        }
                        }>
                            <Button onClick={handleClick}
                                style={{
                                    textTransform: 'none',
                                    color: '#C1FD35'
                                }}
                            >
                                <AddCircleOutlineIcon className={styles.icon} sx={{ fontSize: "24px", }} />
                                <Typography
                                    sx={{
                                        paddingLeft: "10px"
                                    }} variant="h6"
                                    style={{ textTransform: 'none' }}
                                    >
                                    Nueva tarjeta
                                </Typography>
                            </Button>
                        </CardContent>
                        <Button onClick={handleClick}
                        style={{
                                textTransform: 'none',
                                color: '#C1FD35'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#C1FD35",
                                }} variant="h6"
                                style={{ textTransform: 'none' }}
                                >
                                <ArrowForwardIcon sx={{ fontSize: "24px" }} />
                            </Typography>
                        </Button>
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                            <MuiAlert onClose={handleClose} severity="warning" elevation={6} variant="filled">
                                No se pueden Agregar mas de 10 Tarjetas
                            </MuiAlert>
                        </Snackbar>
                    </CardContent>
                </Card>
            : <Card sx={{
                minWidth: "100%",
                background: "#201F22",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "20px"
            }}>
                  <CardContent>
                        <Typography sx={{
                            color: "#FFFFFF",
                            paddingLeft: "15px"
                        }} variant="h6">
                            Agregá tu tarjeta de débito o crédito
                        </Typography>
                    </CardContent>
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }
                }>
                    <CardContent sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: "100%",
                        color: "#C1FD35",
                    }
                    }>
                        <Button onClick={handleClick}
                            style={{
                                textTransform: 'none',
                                color: '#C1FD35'
                            }}
                        >
                            <AddCircleOutlineIcon className={styles.icon} sx={{ fontSize: "24px", }} />
                            <Typography
                                sx={{
                                    paddingLeft: "10px"
                                }} variant="h6"
                                style={{ textTransform: 'none' }}
                                >
                                Nueva tarjeta
                            </Typography>
                        </Button>
                    </CardContent>
                    <Button onClick={handleClick}
                    style={{
                            textTransform: 'none',
                            color: '#C1FD35'
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#C1FD35",
                            }} variant="h6"
                            style={{ textTransform: 'none' }}
                            >
                            <ArrowForwardIcon sx={{ fontSize: "24px" }} />
                        </Typography>
                    </Button>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <MuiAlert onClose={handleClose} severity="warning" elevation={6} variant="filled">
                            No se pueden Agregar mas de 10 Tarjetas
                        </MuiAlert>
                    </Snackbar>
                </CardContent>
            </Card>}
            </Box>
    )
}

export default AddCard;