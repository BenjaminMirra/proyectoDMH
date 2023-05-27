import styles from "./addCard.module.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Card, CardContent, Icon, IconButton, Typography } from "@mui/material"
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

                            <AddCircleOutlineIcon className={styles.icon} sx={{ fontSize: "24px", }} />
                            <Typography
                                sx={{
                                    paddingLeft: "10px"
                                }} variant="h6"
                                style={{ textTransform: 'none' }}
                            >
                                Nueva tarjeta
                            </Typography>
                        </CardContent>

                        <Typography
                            sx={{
                                color: "#C1FD35",
                            }} variant="h6"
                            style={{ textTransform: 'none' }}
                        >
                            <ArrowForwardIcon sx={{ fontSize: "24px" }} />
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )

}

export default AddCard