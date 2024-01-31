/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Container, Grid, Typography, Breadcrumbs, Link } from '@mui/material';

const Sobre: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} xl={{ offset: 1, span: 10 } as any}>
          <div className="content">
            <Typography variant="h1" className="title-page">
              Quem Somos
            </Typography>

            <div className="breadcrumb">
              <span>Você está em: </span>

              <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link href="Default.aspx">Home</Link>
                <Link href="javascript:void(0);">O Magazine Luiza</Link>
                <Link href="/sobre">
                  Quem Somos
                </Link>
              </Breadcrumbs>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sobre;
