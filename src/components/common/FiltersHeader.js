import React from "react";
import { styled } from '@mui/material/styles'
import { Grid, Box, MenuItem } from "@mui/material";
import CustomButtonWithSelect from "./CustomButtonWithSelect";
import useHeaderSearch from "../../hooks/useHeaderSearch";


const MatBox = styled(Box)`
    background-color: #204FB6 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0; 
`


const FiltersHeader = () => {
    const {
        salary,
        handleChangeSalary,
        date,
        handleChangeDate,
        category,
        handleChangeCategory,
        remote,
        handleChangeRemote,
        contracting,
        handleChangeContracting,
        education,
        handleChangeEducation,
    } = useHeaderSearch();

    return (
        <MatBox sx={{ flexGrow: 1, backgroundColor: '#083cae', paddingBottom: 2 }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <CustomButtonWithSelect
                        title="Salario"
                        background="#204FB6"
                        color="#fff"
                        value={salary}
                        onChange={handleChangeSalary}
                    >
                        <MenuItem value={11}>$5,000 MXN</MenuItem>
                        <MenuItem value={213}>$5,000 - $10,000 MXN</MenuItem>
                        <MenuItem value={213}>$10,000 - $15,000 MXN</MenuItem>
                        <MenuItem value={213}>$15,000 - $20,000 MXN</MenuItem>
                        <MenuItem value={213}>$20,000 - $30,000 MXN</MenuItem>
                        <MenuItem value={213}>$30,000 - $40,000 MXN</MenuItem>
                        <MenuItem value={213}>$40,000 - $50,000 MXN</MenuItem>
                    </CustomButtonWithSelect>
                </Grid>
                <Grid item>
                    <CustomButtonWithSelect
                        title="Fecha"
                        background="#204FB6"
                        color="#fff"
                        value={date}
                        onChange={handleChangeDate}
                    >
                        <MenuItem value={11}>Hace 1 semanas</MenuItem>
                        <MenuItem value={11}>Hace 2 semanas</MenuItem>
                        <MenuItem value={11}>Hace 3 semanas</MenuItem>
                        <MenuItem value={213}>Hace 1 mes</MenuItem>
                        <MenuItem value={213}>Hace 2 mes</MenuItem>
                    </CustomButtonWithSelect>
                </Grid>
                <Grid item>
                    <CustomButtonWithSelect
                        title="Categoría"
                        background="#204FB6"
                        color="#fff"
                        value={category}
                        onChange={handleChangeCategory}
                    >
                        <MenuItem value={11}>Tecnologías de la Información - Sistemas</MenuItem>
                        <MenuItem value={213}>Ventas</MenuItem>
                        <MenuItem value={213}>Ingeniería</MenuItem>
                        <MenuItem value={213}>Atención a clientes</MenuItem>
                    </CustomButtonWithSelect>
                </Grid>
                <Grid item>
                    <CustomButtonWithSelect
                        title="Remoto"
                        background="#204FB6"
                        color="#fff"
                        value={remote}
                        onChange={handleChangeRemote}
                    >
                        <MenuItem value={11}>Desde casa</MenuItem>
                        <MenuItem value={213}>Presencial</MenuItem>
                    </CustomButtonWithSelect>
                </Grid>
                <Grid item>
                    <CustomButtonWithSelect
                        title="Contratación"
                        background="#204FB6"
                        color="#fff"
                        value={contracting}
                        onChange={handleChangeContracting}
                    >
                        <MenuItem value={11}>Tiempo completo</MenuItem>
                        <MenuItem value={213}>Indeterminado</MenuItem>
                        <MenuItem value={213}>Honorarios</MenuItem>
                    </CustomButtonWithSelect>
                </Grid>
                <Grid item>
                    <CustomButtonWithSelect
                        title="Educación"
                        background="#204FB6"
                        color="#fff"
                        value={education}
                        onChange={handleChangeEducation}
                    >
                        <MenuItem value={11}>Universitario titulado</MenuItem>
                        <MenuItem value={213}>Universitario sin titulo</MenuItem>
                        <MenuItem value={213}>Bachillerato</MenuItem>
                        <MenuItem value={213}>Técnico</MenuItem>
                        <MenuItem value={213}>Posgrado</MenuItem>
                        <MenuItem value={213}>Secundaria</MenuItem>
                    </CustomButtonWithSelect>
                </Grid>
            </Grid>
        </MatBox>
    )
}

export default FiltersHeader