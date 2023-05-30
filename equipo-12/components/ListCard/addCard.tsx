import styles from "./addCard.module.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Card, CardContent, Icon, IconButton, Typography } from "@mui/material"
import Link from "next/link";
const AddCard = () => {
    return (
        <>
            < Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
            }
            }>

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
                    <Link href="/agregar-tarjeta" style={{
                        textDecoration: "none"
                        , width: "100%"
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

                                <Button
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
                            <Button

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
                        </CardContent>
                    </Link>
                </Card>
            </Box>
        </>
    )

}

export default AddCard