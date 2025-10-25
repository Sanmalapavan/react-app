import React from "react";
import { Typography, Paper, Box, TextField, Stack, Button } from "@mui/material";
import { useState } from "react";

function Login() {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <Box

                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}>


                <Paper elevation={5} sx={{ width: "500px", height: "500px", padding: "10px" }}>
                    <Stack direction={"column"} spacing={3}>

                        <Typography variant="h1">Login</Typography>

                        <TextField
                            required
                            id="email"
                            label="Email"
                            type="text"
                            variant="standard"
                        />

                        <TextField
                            required
                            id="password"
                            label="Password"
                            type="password"
                            variant="standard"
                        />
                        <Button
                            size="small"
                            onClick={() => { setLoading(!loading); }}
                            variant="contained"
                        >
                            {loading ? "Loading..." : "Login"}

                        </Button>

                    </Stack>
                </Paper>
            </Box>
        </>
    );
}

export default Login;