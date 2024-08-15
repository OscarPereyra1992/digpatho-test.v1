Proyecto DigPatho
Introducción
Este proyecto es una aplicación web desarrollada con Next.js en el frontend y Django en el backend, diseñada para la gestión de datos y análisis de imágenes para estudios de cáncer.

Requisitos
Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

Node.js
npm (Node Package Manager)
Python
pip (Python Package Installer)
Configuración del Proyecto
1. Clonar el Repositorio
Clona el repositorio desde GitHub:

bash
Copiar código
git clone https://github.com/tu-usuario/digpatho-frontend.git
cd digpatho-frontend
2. Instalar Dependencias
Frontend (Next.js)
Instala las dependencias del frontend:

bash
Copiar código
npm install
Backend (Django)
Para instalar las dependencias del backend, navega al directorio del backend y ejecuta:

bash
Copiar código
pip install -r requirements.txt
3. Configurar Variables de Entorno
Crea un archivo .env.local en la raíz del proyecto digpatho-frontend y define las variables de entorno necesarias:

env
Copiar código
NEXT_PUBLIC_API_URL=http://localhost:8000/api
4. Ejecutar el Proyecto
Frontend (Next.js)
Para iniciar el servidor de desarrollo del frontend, ejecuta:

bash
Copiar código
npm run dev
Accede a la aplicación en tu navegador en http://localhost:3000.

Backend (Django)
Para iniciar el servidor de desarrollo del backend, navega al directorio del backend y ejecuta:

bash
Copiar código
python manage.py runserver
Accede al backend en http://localhost:8000.

Uso
Una vez que los servidores estén en funcionamiento, podrás acceder a la aplicación web a través del navegador y empezar a utilizar las funcionalidades proporcionadas.


Licencia
Este proyecto fue creado en base a una entrevista, no se permite su uso comercial.

