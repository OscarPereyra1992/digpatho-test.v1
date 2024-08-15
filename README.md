# Proyecto DigPatho

## Introducción

Este proyecto es una aplicación web desarrollada con Next.js en el frontend y Django en el backend, diseñada para la gestión de datos y análisis de imágenes para estudios de cáncer.

## Requisitos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js**
- **npm** (Node Package Manager)
- **Python**
- **pip** (Python Package Installer)

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

2. Configurar y Ejecutar el Frontend (Next.js)
2.1. Navegar al Directorio del Frontend
```bash
cd digpatho_frontend
```
2.2. Instalar Dependencias
Instala las dependencias del frontend:

```bash
npm install
```
2.3. Configurar Variables de Entorno
Crea un archivo .env.local en la raíz del directorio frontend y define las variables de entorno necesarias:
```bash
env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```
2.4. Iniciar el Servidor de Desarrollo
Para iniciar el servidor de desarrollo del frontend, ejecuta:

```bash
npm run dev
```
Accede a la aplicación en tu navegador en http://localhost:3000.

3. Configurar y Ejecutar el Backend (Django)
3.1. Navegar al Directorio del Backend
```bash
cd ../digpatho_backend
```
3.2. Crear y Activar un Entorno Virtual (opcional pero recomendado)
Crea y activa un entorno virtual:

```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```
3.3. Instalar Dependencias
Instala las dependencias del backend:

```bash
pip install -r requirements.txt
```
3.4. Ejecutar Migraciones
Aplica las migraciones de la base de datos:

```bash
python manage.py migrate
```
3.5. Iniciar el Servidor de Desarrollo
Para iniciar el servidor de desarrollo del backend, ejecuta:

```bash
python manage.py runserver
```
Accede al backend en http://localhost:8000.
Uso
Una vez que los servidores estén en funcionamiento, podrás acceder a la aplicación web a través del navegador y empezar a utilizar las funcionalidades proporcionadas.

Licencia
Este proyecto fue creado en base a una entrevista, no se permite su uso comercial.
