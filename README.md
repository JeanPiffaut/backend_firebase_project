# Backend Firebase Project

Este repositorio contiene un proyecto backend construido con Node.js, Express y una arquitectura hexagonal. El proyecto está configurado para usar ESLint y Prettier para mantener un código limpio y consistente, y utiliza Jest para realizar pruebas unitarias, de integración y end-to-end (E2E).

## Tabla de Contenidos

- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos](#requisitos)
- [Configuración](#configuración)
- [Scripts Disponibles](#scripts-disponibles)
- [Ejecución del Servidor](#ejecución-del-servidor)
- [Pruebas](#pruebas)
- [Contribución](#contribución)
- [Wiki](#wiki)

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```
backend_firebase_project/
├── src/
│   ├── common/
│   │   └── config/
│   │       └── app.js
│   ├── <module-name>/
│   │   ├── application/
│   │   │   └── <UseCase>.js
│   │   ├── domain/
│   │   │   ├── <Entity>.js
│   │   │   └── <RepositoryInterface>.js
│   │   └── infrastructure/
│   │       ├── <RepositoryImplementation>.js
│   │       ├── <Controller>.js
│   │       └── <routes>.js
│   └── index.js
├── test/
│   ├── e2e/
│   │   └── <ModuleE2ETest>.test.js
│   ├── integration/
│   │   └── <ModuleIntegrationTest>.test.js
│   └── unit/
│       ├── <module-name>/
│       │   ├── application/
│       │   │   └── <UseCaseTest>.test.js
│       │   └── domain/
│       │       └── <EntityTest>.test.js
├── .eslintrc.js
├── .prettierrc
├── package.json
├── README.md
└── .env
```

## Requisitos

- Node.js (versión 18.x)
- npm (versión 8.x)

## Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JeanPiffaut/backend_firebase_project.git
   cd backend_firebase_project
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (ajusta los valores según sea necesario):
   ```env
   PORT=3000
   ```

## Scripts Disponibles

En el archivo `package.json` se han definido los siguientes scripts:

- `start`: Inicia el servidor en modo producción.
  ```bash
  npm start
  ```

- `dev`: Inicia el servidor en modo desarrollo con reinicio automático usando `nodemon`.
  ```bash
  npm run dev
  ```

- `lint`: Ejecuta ESLint para analizar el código.
  ```bash
  npm run lint
  ```

- `format:check`: Verifica el formato del código usando Prettier.
  ```bash
  npm run format:check
  ```

- `format:fix`: Formatea automáticamente el código usando Prettier.
  ```bash
  npm run format:fix
  ```

- `test`: Ejecuta todas las pruebas.
  ```bash
  npm test
  ```

- `test:e2e`: Ejecuta las pruebas E2E.
  ```bash
  npm run test:e2e
  ```

- `test:unit`: Ejecuta las pruebas unitarias.
  ```bash
  npm run test:unit
  ```

- `test:integration`: Ejecuta las pruebas de integración.
  ```bash
  npm run test:integration
  ```

## Ejecución del Servidor

Para iniciar el servidor en modo desarrollo, utiliza:
```bash
npm run dev
```
El servidor se ejecutará en el puerto definido en el archivo `.env` (por defecto, `3000`).

## Pruebas

El proyecto utiliza Jest para realizar pruebas unitarias, de integración y E2E.

- Para ejecutar todas las pruebas:
  ```bash
  npm test
  ```

- Para ejecutar pruebas específicas:
    - Unitarias:
      ```bash
      npm run test:unit
      ```
    - Integración:
      ```bash
      npm run test:integration
      ```
    - E2E:
      ```bash
      npm run test:e2e
      ```

## Contribución

Las contribuciones son bienvenidas. Para contribuir, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Empuja tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un pull request en GitHub.

## Wiki

Para obtener más información detallada sobre el proyecto, visita la [wiki del proyecto](https://github.com/JeanPiffaut/backend_firebase_project/wiki).