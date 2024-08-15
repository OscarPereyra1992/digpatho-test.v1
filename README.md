# Proyecto DigPatho

## Introducción

Este proyecto es una aplicación web desarrollada con Next.js en el frontend y Django en el backend, diseñada para la gestión de datos y análisis de imágenes para estudios de cáncer.

## Requisitos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

Docker y Docker Compose

## Estructura del Proyecto

Este repositorio contiene dos carpetas principales:

- `digpatho_frontend/` - Contiene el código del frontend desarrollado con Next.js.
- `digpatho_backend/` - Contiene el código del backend desarrollado con Django.

## Configuración del Proyecto

### 1. Clonar el Repositorio

Clona el repositorio desde GitHub:

```bash
git clone https://github.com/OscarPereyra1992/digpatho-test.v1.git
cd digpatho-test.v1
```

2. Configurar y Ejecutar con Docker
Este proyecto incluye Docker para simplificar la configuración y ejecución del entorno de desarrollo. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.

2.1. Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto y define las variables de entorno necesarias para el frontend. Asegúrate de que el archivo .env en la raíz del proyecto tenga el siguiente contenido:

```bash
Copiar código
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```
2.2. Construir y Ejecutar los Contenedores
Construye y ejecuta los contenedores para el frontend y el backend utilizando Docker Compose:

```bash
docker-compose up --build
```

Este comando construye las imágenes de Docker para el frontend y el backend, y luego inicia los contenedores. Los servicios estarán disponibles en los siguientes puertos:

Frontend (Next.js): http://localhost:3000
Backend (Django): http://localhost:8000

2.3. Verificar el Estado de los Contenedores
Puedes verificar el estado de los contenedores con el siguiente comando:

```bash
docker-compose ps
```

2.4. Detener los Contenedores
Para detener los contenedores, puedes usar:

```bash
docker-compose down
```

3. Configuración sin Docker
Si prefieres configurar el proyecto sin Docker, sigue estos pasos:

3.1. Configurar y Ejecutar el Frontend (Next.js)
Navega al directorio del frontend:

```bash
cd digpatho_frontend
```
Instala las dependencias del frontend:

```bash
npm install
```

Configura las variables de entorno:

Crea un archivo .env.local en la raíz del directorio frontend y define las variables de entorno necesarias:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```
Accede a la aplicación en tu navegador en http://localhost:3000.

3.2. Configurar y Ejecutar el Backend (Django)
Navega al directorio del backend:

```bash
cd ../digpatho_backend
```

Crea y activa un entorno virtual (opcional pero recomendado):

```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

Instala las dependencias del backend:

```bash
pip install -r requirements.txt
```

Ejecuta las migraciones de la base de datos:

```bash
python manage.py migrate
```

Inicia el servidor de desarrollo:

```bash
python manage.py runserver
```

Accede al backend en http://localhost:8000.

Uso
Una vez que los servidores estén en funcionamiento, podrás acceder a la aplicación web a través del navegador y empezar a utilizar las funcionalidades proporcionadas.

Licencia
Este proyecto fue creado en base a una entrevista, no se permite su uso comercial.
