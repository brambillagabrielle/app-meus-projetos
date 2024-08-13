import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ProjetosContext from "./ProjetosContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from "../../comuns/CampoSelect";
import CampoEntradaTexto from "../../comuns/CampoEntradaTexto";
import Dialogo from "../../comuns/Dialogo";
import { MenuItem } from "@mui/material";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, abreDialogo, setAbreDialogo } =
        useContext(ProjetosContext);

    return (
        <>
            <Dialogo id="modalEdicao" titulo="Organização"
                open={abreDialogo} setOpen={setAbreDialogo}
                acaoCadastrar={acaoCadastrar} idform="formulario"
                maxWidth="sm">
                <Alerta alerta={alerta} />
                <CampoEntrada id="txtID" label="ID"
                    tipo="text" name="id" value={objeto.id}
                    onchange={handleChange} requerido={false}
                    readonly={true} />
                <CampoEntrada id="txtTitulo" label="Título"
                    tipo="text" name="titulo" value={objeto.titulo}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={50}
                    msgvalido="Titulo OK"
                    msginvalido="Informe o título" />
                <CampoEntradaTexto id="txtDescricao" label="Descricao"
                    rows={5}
                    tipo="text" name="descricao"
                    value={objeto.descricao}
                    onchange={handleChange} requerido={true}
                    readonly={false} maxlength={100}
                    msgvalido="Descrição OK"
                    msginvalido="Informe o descrição" />
                <CampoSelect
                    id="selectLinguagem" label="linguagem"
                    idLabel="labelLinguagem"
                    tipo="text" name="linguagem" value={objeto.linguagem}
                    onchange={handleChange} requerido={false}
                    msgvalido="Linguagem OK"
                    msginvalido="Informe a linguagem">
                    <MenuItem value='JavaScript'>JavaScript</MenuItem>
                    <MenuItem value='Python'>Python</MenuItem>
                    <MenuItem value='Java'>Java</MenuItem>
                </CampoSelect>
                <CampoSelect
                    id="selectStatus" label="status"
                    idLabel="labelStatus"
                    tipo="text" name="status" value={objeto.status}
                    onchange={handleChange} requerido={false}
                    msgvalido="Tipo OK"
                    msginvalido="Informe o status">
                    <MenuItem value='Para fazer'>Para fazer</MenuItem>
                    <MenuItem value='Em andamento'>Em andamento</MenuItem>
                    <MenuItem value='Parado'>Parado</MenuItem>
                    <MenuItem value='Finalizado'>Finalizado</MenuItem>
                </CampoSelect>
            </Dialogo>
        </>
    )

}

export default Form;