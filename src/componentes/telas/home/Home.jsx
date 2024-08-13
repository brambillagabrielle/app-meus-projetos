import { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { getProjetosFirebase } from '../../servicos/ProjetoService';

function Home() {

    const [listaObjetos, setListaObjetos] = useState([]);

    useEffect(() => {
        getProjetosFirebase(setListaObjetos);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h5" component="div">
                Meus Projetos - LPE
            </Typography>

            {listaObjetos.length === 0 && <Typography variant="h5" component="div">
                Nenhum registro encontrado
            </Typography>}

            <Grid container spacing={2}>
                {listaObjetos.length > 0 && (
                    listaObjetos.map(objeto => (
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}
                            key={objeto.id}>
                            <Card sx={{ minWidth: 50 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {objeto.status}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {objeto.titulo}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {objeto.descricao}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {objeto.linguagem}
                                    </Typography>
                                    <Typography variant="h7" component="div">
                                        {objeto.usuario}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {objeto.email}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))

                )}
            </Grid>

        </div>
    )
}

export default Home;