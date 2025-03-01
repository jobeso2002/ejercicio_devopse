import api from "../axios";
import { Persona } from "../interface/persona.interface";


export const RegistrarPersona = (data: Persona) => {
    return api.post("/persona", data) //corregir url
};

export const actualizarPersona = (data: Persona) => {
    return api.patch(`/persona/${data.id}`, data) //corregir url
};

