# proyecto-pixelmatch-template



## Requisitos Básicos

- Node.js (versión 20 o superior). Recomendamos utilizar la versión `lts/iron`.
- npm o yarn para la gestión de dependencias.

## Instalación

Instala las dependencias necesarias utilizando npm:

```bash
npm install
```

Instalar confoguracion de playwright



## Ejecución de Pruebas VRT

Puedes ejecutar las pruebas en modo headless para Chrome, Firefox y Electron

- Para ejecutar las pruebas en modo headless:

    ```bash
    npx playwright test
    ```

- Para ver los resultados de las pruebas uan vez termine la ejecucion:

    ```bash
    npx playwright show-report
    ```

## Configuración

### Configuración de Playwright

El archivo `jest.config.js` incluye la configuración básica para Jest con Puppeteer:

- **Preset**: Se utiliza `jest-puppeteer` como framework base.
- **Archivos de configuración adicionales**: Se incluye `expect-puppeteer` para extender las funcionalidades de las pruebas.
- **Variables globales**: Puedes agregar y modificar las variables globales de acuerdo a las necesidades de tus pruebas. Variables predefinidas:
    - `baseUrl`: URL base para las pruebas: `https://angular-6-registration-login-example.stackblitz.io`.
    - `screenshotPath`: Ruta para guardar capturas de pantalla: `./test-results`.

