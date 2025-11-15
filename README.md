# Aplicación Node.js y MariaDB con Docker

Este es un proyecto base que ejecuta un servidor web simple con Node.js (Express) conectado a una base de datos MariaDB. Todo el entorno está gestionado por Docker Compose.

## Prerrequisitos

Para ejecutar este proyecto, necesitarás tener instalado:

  * [Git](https://www.google.com/search?q=https://git-scm.com/downloads)
  * [Docker](https://www.docker.com/products/docker-desktop/)
  * [Docker Compose](https://docs.docker.com/compose/install/)

## Instalación y Ejecución

Sigue estos pasos para descargar y ejecutar el proyecto:

1.  **Clonar el Repositorio**

    Abre tu terminal y clona este repositorio de GitHub en tu máquina local:

    ```bash
    git clone https://github.com/bastian221158/Repo
    ```

2.  **Navegar al Directorio**

    Muévete a la carpeta del proyecto que acabas de clonar:

    ```bash
    cd Repo
    ```

3.  **Construir e Iniciar los Contenedores**

    Usa Docker Compose para construir la imagen de la aplicación Node.js e iniciar los servicios de la aplicación y la base de datos:

    ```bash
    docker-compose up --build
    ```

    Este comando también creará un volumen (`db_data`) para la persistencia de los datos de MariaDB y ejecutará el script `init.sql` para poblar la base de datos la primera vez.

## Acceder a la Aplicación

Una vez que los contenedores estén en funcionamiento, puedes acceder a la aplicación web abriendo tu navegador y visitando:

`http://localhost:3000`

Deberías ver una lista de los usuarios de ejemplo extraídos de la base de datos.

## Detener la Aplicación

Para detener y eliminar los contenedores, presiona `Ctrl+C` en la terminal donde se está ejecutando `docker-compose up`, y luego ejecuta:

```bash
docker-compose down
```
