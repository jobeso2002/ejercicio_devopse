import { useState, useEffect } from "react";

export interface FormData {
  tipo_id: string;
  id: string;
  apellido_1: string;
  apellido_2: string;
  nombre_1: string;
  nombre_2: string;
  sexo: string;
  fecha_de_nacimiento: string;
}

interface FormCreateUpdateProps {
  initialData?: FormData; // Datos iniciales opcionales para actualizar
}

export default function FormCreateUpdate({ initialData }: FormCreateUpdateProps) {
  const defaultData: FormData = {
    tipo_id: "Cedula",
    id: "1",
    nombre_1: "Jose",
    nombre_2: "Alfredo",
    apellido_1: "Obeso",
    apellido_2: "Lora",
    sexo: "Masculino",
    fecha_de_nacimiento: "2025-01-28",
  };

  const [formData, setFormData] = useState<FormData>(initialData || defaultData);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(initialData ? "Actualizando registro:" : "Creando nuevo registro:", formData);
    alert(initialData ? "Registro actualizado con éxito" : "Registro creado con éxito");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-center text-xl font-semibold text-gray-700">
        {initialData ? "Actualizar Registro" : "Crear Registro"}
      </h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* Tipo de identificación */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Tipo de Identificación</label>
          <select
            name="tipo_id"
            value={formData.tipo_id}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          >
            <option value="">Seleccione el documento</option>
            <option value="Cedula">Cédula</option>
            <option value="Tarjeta_identidad">Tarjeta de Identidad</option>
          </select>
        </div>

        {/* ID */}
        <div>
          <label className="block text-sm font-medium text-gray-600">ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Nombre y Apellidos */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Primer Nombre</label>
            <input
              type="text"
              name="nombre_1"
              value={formData.nombre_1}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Segundo Nombre</label>
            <input
              type="text"
              name="nombre_2"
              value={formData.nombre_2}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Primer Apellido</label>
            <input
              type="text"
              name="apellido_1"
              value={formData.apellido_1}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Segundo Apellido</label>
            <input
              type="text"
              name="apellido_2"
              value={formData.apellido_2}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
        </div>

        {/* Sexo */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Sexo</label>
          <select
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          >
            <option value="">Seleccione el sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>

        {/* Fecha de Nacimiento */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Fecha de Nacimiento</label>
          <input
            type="date"
            name="fecha_de_nacimiento"
            value={formData.fecha_de_nacimiento}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        <div className="flex gap-4">
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
            Crear
          </button>
          <button type="button" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
}
