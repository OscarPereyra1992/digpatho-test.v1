# Dockerfile para el Backend
FROM python:3.9

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de requirements.txt
COPY requirements.txt .

# Instalar las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto en el que Django estará corriendo
EXPOSE 8000

# Ejecutar las migraciones y luego iniciar el servidor
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]