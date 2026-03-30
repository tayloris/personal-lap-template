# 01 — Ejecutarlo en tu computador

Esta guía pone el proyecto en funcionamiento en tu máquina.
Al terminar tendrás dos servidores corriendo al mismo tiempo:
el **backend** en el puerto 8000 y el **frontend** en el puerto 3000.

---

## Lo que necesitas instalar

Instala estas herramientas antes de comenzar.
Haz clic en los enlaces para ir a las páginas de descarga oficiales.

| Herramienta | Versión | Descarga |
|-------------|---------|----------|
| **Node.js** | 18 o superior | [nodejs.org](https://nodejs.org) |
| **Python** | 3.11 o superior | [python.org](https://www.python.org/downloads/) |
| **Git** | cualquier versión reciente | [git-scm.com](https://git-scm.com) |
| **Editor** | — | [Cursor](https://cursor.sh) o [VS Code](https://code.visualstudio.com) |

Para verificar si algo ya está instalado, abre una terminal y ejecuta:

```bash
node --version
python --version
git --version
```

---

## Paso 1 — Clonar el repositorio

"Clonar" descarga una copia del proyecto en tu computador y configura la
conexión con Git para que puedas guardar y compartir tus cambios después.

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

> Reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con tu nombre de usuario de GitHub
> y el nombre de tu repositorio.

---

## Paso 2 — Iniciar el backend

El backend es un servidor API en Python. Procesa datos y expone
rutas que el frontend puede consultar.

Abre una ventana de terminal y ejecuta:

```bash
cd backend
python -m venv .venv
```

Activa el entorno virtual:

```bash
# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate
```

Instala las dependencias e inicia el servidor:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Deberías ver algo como:

```
INFO:     Uvicorn running on http://127.0.0.1:8000
```

**Deja esta terminal abierta.** Tu API ya está corriendo en el puerto 8000.
Puedes verificarlo abriendo [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health)
en tu navegador — debería mostrar `{"status":"ok"}`.

---

## Paso 3 — Iniciar el frontend

El frontend es la aplicación Next.js — el sitio que ves en el navegador.

Abre una **segunda ventana de terminal** (mantén la del backend abierta) y ejecuta:

```bash
cd frontend
npm install
npm run dev
```

Deberías ver:

```
▲ Next.js ready on http://localhost:3000
```

**Deja esta terminal abierta también.**

---

## Paso 4 — Abrir el sitio

Ve a [http://localhost:3000](http://localhost:3000) en tu navegador.
Deberías ver la página de inicio con la barra de navegación.

> **Dos terminales al mismo tiempo.** Este es el momento de "¿por qué no funciona?"
> más común. Necesitas una terminal para el backend y otra para el frontend,
> ambas ejecutándose al mismo tiempo. Si cierras una, esa parte deja de funcionar.

---

## Paso 5 — Configurar las variables de entorno

Las variables de entorno son configuraciones que tu app lee en tiempo de
ejecución — cosas como URLs o claves secretas — que no quieres poner en el
código ni compartir públicamente.

Copia los archivos de ejemplo:

```bash
# En la carpeta frontend/
cp frontend/.env.example frontend/.env.local

# En la carpeta backend/
cp backend/.env.example backend/.env
```

> En Windows PowerShell usa `Copy-Item` en lugar de `cp`:
> ```powershell
> Copy-Item frontend\.env.example frontend\.env.local
> Copy-Item backend\.env.example backend\.env
> ```

Los valores por defecto en los archivos de ejemplo funcionan para el desarrollo
local — no necesitas cambiar nada todavía. Los actualizarás cuando despliegues
(ver [03_DEPLOY_FRONTEND.md](03_DEPLOY_FRONTEND.md) y [04_DEPLOY_BACKEND.md](04_DEPLOY_BACKEND.md)).

> **Nunca hagas commit de `.env` o `.env.local` a Git.** Ya están en el
> `.gitignore` para protegerte de compartir secretos accidentalmente.

---

## Listo

| URL | Qué es |
|-----|--------|
| [http://localhost:3000](http://localhost:3000) | Tu frontend |
| [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health) | Health check del backend |

Siguiente: [02 — Guarda tu trabajo con Git →](02_GIT_BASICS.md)
