import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-widht:1000px)");
  return (
    <Box>
      <Box width="100%" p="1rem 6%" backgroundColor={theme.palette.background.alt} >
      <Typography
        fontWeight="bold"
        fontSize="32px"
        color="primary"
      >
        SocioPedia
      </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to SocioPedia, the Social Media for Socio Paths
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}

export default LoginPage