import { Box, Typography, Button, TextField} from "@mui/material";




const AddMoneyOption = () => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--main-bg-color)",
                color: "var(--main-text-color)",
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

                "@media (max-width: 768px)": {
                    padding: "18px 45px 18px 25px",
                    gap: "18px",
                },
                "@media (min-width: 768px)": {
                    padding: "40px 45px 40px 35px",
                    gap: "18px",
                },
                "@media (min-width: 1024px)": {
                    padding: "40px 45px 18px 35px",
                    gap: "18px",
                },
            }}
        >
            <form >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        alignContent: "flex-start",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#C1FD35",
                            paddingBottom:"25px"
                        }}
                        variant="h6"
                    >
                        ¿Cuánto querés ingresar a la cuenta?
                    </Typography>
                    <TextField
                        name="dinero"
                        type="number"
                        label=""
                        variant="filled"
                        placeholder="$0"
                        sx={{ }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "right",
                        alignItems: "center",
                    }}
                >
                    <Button
                        variant="primary"
                        color="secondary"
                        size="large"
                        type="submit"
                        sx={{
                        }}
                    >
                        Continuar
                    </Button>
                </Box>

            </form>
        </Box>

    );
};

export default AddMoneyOption;
