import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Sobre = () => {

    return (

        <div style={{ padding: '20px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container alignContent={'center'} justifyContent={'center'}
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <Card sx={{ minWidth: 50 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Sobre o app
                                </Typography>
                                <Typography variant="h5" component="div">
                                    Gerenciamento de Projetos
                                </Typography>

                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Biblioteca Material UI, Firebase e autenticação com GitHub
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    IFSUL - Passo Fundo
                                </Typography>

                                <Typography variant="h5" component="div">
                                    Gabrielle Brambilla
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    GitHub: @brambillagabrielle
                                </Typography>

                                <Typography variant="h5" component="div">
                                    Entrega
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    13/08/2024
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>

    )

}

export default Sobre;