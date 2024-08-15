"use client";
import { useState } from "react";
import { Button } from "./mt-components";

export default function PatientForm({ tabs, title }) {
  const [activeTab, setActiveTab] = useState(0);
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    gender: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setPatientData({ ...patientData, image: file });
    setPreviewImage(URL.createObjectURL(file));
    await handleImageUpload(file);
  };

  const handleDeleteImage = () => {
    setPatientData({ ...patientData, image: null });
    setPreviewImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage(""); // Clear previous messages

    // Simular el tiempo de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionMessage("Envío confirmado");

      // Restablecer los datos del formulario
      setPatientData({
        name: "",
        age: "",
        gender: "",
        image: null,
      });
      setPreviewImage(null);
    }, 3000);

    // Aquí puedes enviar los datos del paciente junto con la imagen, si es necesario.
    console.log("Patient Data:", patientData);
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', patientData.name);
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload/`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Image uploaded successfully:', result);
        setPatientData({ ...patientData, image: result.image });
        // Actualizar la URL de la imagen para que apunte al backend
        setPreviewImage(`http://localhost:8000${result.image}`);
      } else {
        console.error('Image upload failed:', response.status, response.statusText);
        // Mostrar error en el frontend
        alert('Error al cargar la imagen. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      // Mostrar error en el frontend
      alert('Error al cargar la imagen. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F5F2]">
      <div className="w-full max-w-3xl bg-white p-10 rounded-xl shadow-lg">
        <div className="border-b border-gray-200 mb-1">
          <h1 className="text-black text-center text-lg mb-2">{title}</h1>
          <nav className="-mb-px flex">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-1/${tabs.length} py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === index
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex min-h-[255px] mt-2">
          {activeTab === 0 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-4">
                <div>
                  <label className="block text-gray-700 text-md">Nombre:</label>
                  <input
                    type="text"
                    name="name"
                    value={patientData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Nombre del paciente"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-md">Edad:</label>
                  <input
                    type="number"
                    name="age"
                    value={patientData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Edad del paciente"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-md">Género:</label>
                  <select
                    name="gender"
                    value={patientData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Seleccione género</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
              <Button
                size="sm"
                type="submit"
                className="py-3 mt-4 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Guardar Paciente
              </Button>
              {isSubmitting && (
                <div className="flex items-center justify-center mt-4">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v1m0 0V4m0 1v11m0 0v1m0-12a9 9 0 110 18 9 9 0 010-18z"
                    />
                  </svg>
                  <span>Enviando...</span>
                </div>
              )}
              {submissionMessage && (
                <div className="text-green-600 text-center mt-4">{submissionMessage}</div>
              )}
            </form>
          )}
          {activeTab === 0 && (
            <div className="flex flex-col items-center ml-8">
              <div className="w-full">
                <label className="block text-center text-gray-700 text-lg">
                  Cargar Imagen:
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                  id="upload"
                />
                <Button
                  variant="gradient"
                  className="flex items-center gap-3"
                  onClick={() => document.getElementById("upload").click()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  Upload Files
                </Button>
              </div>
              {previewImage && (
                <div className="relative mt-4">
                  <img
                    src={previewImage}
                    alt="Vista previa"
                    className="w-48 h-48 object-cover rounded-lg shadow-md"
                  />
                  <button
                    onClick={handleDeleteImage}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        {activeTab > 0 && (
          <div className="text-gray-600 text-center mt-4">Contenido de la pestaña {tabs[activeTab].label}</div>
        )}
      </div>
    </div>
  );
}