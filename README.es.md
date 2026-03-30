# personal-lap-template

> **[Read in English →](README.md)**

---

Hola 👋

Este repositorio es una **plantilla** — es decir, un punto de partida listo
para usar. No tienes que construir todo desde cero.

Con esta plantilla puedes crear tu propio sitio web personal con:

- Una **página de inicio**
- Una **página de CV** (solo tienes que rellenar tus datos)
- Un **laboratorio** donde publicar pequeñas herramientas o experimentos
- Una **API** (un servidor) en Python para cuando necesites procesar datos

Ya viene con una aplicación de ejemplo funcionando: un **contador de palabras**
en el que puedes fijarte para aprender cómo agregar las tuyas.

---

## ¿Qué es todo esto?

Si estás empezando, aquí va una explicación rápida de las piezas:

| Término | Qué significa en la práctica |
|---------|------------------------------|
| **Frontend** | Lo que el usuario ve en el navegador (el sitio web) |
| **Backend** | Un programa que corre en un servidor y responde preguntas (la API) |
| **Next.js** | El framework con el que está hecho el frontend |
| **FastAPI** | El framework con el que está hecha la API |
| **Tailwind CSS** | La forma en que se aplican los estilos visuales |
| **TypeScript** | JavaScript con tipos — ayuda a detectar errores antes de tiempo |
| **Git** | La herramienta para guardar versiones de tu código |
| **GitHub** | La plataforma donde se guarda el código en la nube |
| **Vercel** | El servicio que publica tu frontend en internet |
| **Render** | El servicio que publica tu backend en internet |

No necesitas entender todo esto a fondo antes de empezar.
Empieza, rómpelo, arréglalo — así es como se aprende.

---

## Antes de empezar

Necesitas instalar estas herramientas en tu computador:

| Herramienta | Para qué sirve | Dónde bajarla |
|-------------|---------------|---------------|
| **Node.js** (versión 18 o mayor) | Ejecutar el frontend | [nodejs.org](https://nodejs.org) |
| **Python** (versión 3.11 o mayor) | Ejecutar el backend | [python.org](https://www.python.org/downloads/) |
| **Git** | Guardar y subir tu código | [git-scm.com](https://git-scm.com) |
| **Cursor** o **VS Code** | Editar el código | [cursor.sh](https://cursor.sh) |

Para verificar que están instalados, abre una terminal y escribe:

```bash
node --version    # debe mostrar algo como v20.x.x
python --version  # debe mostrar algo como Python 3.11.x
git --version     # debe mostrar algo como git version 2.x.x
```

---

## Paso 1 — Descarga el proyecto

"Clonar" significa descargar una copia del proyecto a tu computador.
Abre una terminal y escribe:

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

> Reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con tu nombre de usuario de
> GitHub y el nombre de tu repositorio.

---

## Paso 2 — Inicia el backend (la API)

El backend es el programa en Python que responde a las solicitudes de tu sitio.

Abre una terminal y escribe estos comandos uno por uno:

```bash
cd backend
python -m venv .venv
```

Activa el entorno virtual (un espacio aislado para las dependencias de Python):

```bash
# En Windows:
.venv\Scripts\activate

# En macOS o Linux:
source .venv/bin/activate
```

Instala las dependencias e inicia el servidor:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Cuando veas este mensaje, el backend está funcionando:

```
INFO:     Uvicorn running on http://127.0.0.1:8000
```

**Deja esta terminal abierta.** Si la cierras, el backend se detiene.

Puedes comprobar que funciona abriendo este enlace en tu navegador:
[http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health)

Deberías ver: `{"status":"ok"}`

---

## Paso 3 — Inicia el frontend (el sitio web)

Abre una **segunda terminal** (necesitas dos al mismo tiempo) y escribe:

```bash
cd frontend
```

Copia el archivo de configuración de ejemplo:

```bash
# En macOS o Linux:
cp .env.example .env.local

# En Windows (PowerShell):
Copy-Item .env.example .env.local
```

Instala las dependencias e inicia el servidor:

```bash
npm install
npm run dev
```

Cuando veas este mensaje, el frontend está funcionando:

```
▲ Next.js ready on http://localhost:3000
```

**Deja esta terminal abierta también.**

> **Dos terminales a la vez.** Este es el error más común: si cierras una
> terminal, esa parte del proyecto deja de funcionar. Necesitas el backend y
> el frontend corriendo al mismo tiempo.

---

## Paso 4 — Abre el sitio

Ve a [http://localhost:3000](http://localhost:3000) en tu navegador.

Deberías ver el sitio con la barra de navegación arriba con **Home**, **CV**
y **Lab**. ¡Ya está funcionando en tu computador!

---

## ¿Y ahora qué?

### Hazlo tuyo (empieza aquí)

1. **Cambia el título** del sitio en `frontend/app/layout.tsx`
2. **Actualiza la página de inicio** en `frontend/app/page.tsx`
3. **Llena tu CV** en `frontend/components/cv/CVContent.tsx` — reemplaza el
   texto de ejemplo con tu nombre, experiencia y habilidades reales

### Agrega tu primera aplicación al lab

El lab es tu espacio de experimentos. Mira el ejemplo incluido
(`frontend/app/lab/word-count/`) y crea el tuyo:

1. Crea una carpeta en `frontend/app/lab/mi-app/`
2. Dentro crea `meta.ts` (información sobre la app) y `page.tsx` (la pantalla)
3. Regístrala en `frontend/lib/labApps.ts`

Aparecerá automáticamente en la página del lab.

---

## Guías paso a paso

Si algo no está claro, tenemos guías completas en español:

| Guía | Enlace |
|------|--------|
| Cómo ejecutarlo en tu computador | [docs/es/01\_LOCAL\_SETUP.md](docs/es/01_LOCAL_SETUP.md) |
| Cómo guardar tu trabajo con Git | [docs/es/02\_GIT\_BASICS.md](docs/es/02_GIT_BASICS.md) |
| Cómo publicar el frontend en Vercel | [docs/es/03\_DEPLOY\_FRONTEND.md](docs/es/03_DEPLOY_FRONTEND.md) |
| Cómo publicar el backend en Render | [docs/es/04\_DEPLOY\_BACKEND.md](docs/es/04_DEPLOY_BACKEND.md) |
| Desafíos para practicar | [docs/es/CHALLENGE.md](docs/es/CHALLENGE.md) |

---

## Tecnologías que usa este proyecto

| Capa | Tecnología | Dónde se despliega |
|------|-----------|-------------------|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4 | Vercel |
| Backend | FastAPI, Python 3.11+ | Render |

---

## ¿Tienes preguntas?

Lo mejor que puedes hacer es preguntar directamente al asistente de IA en
Cursor. Los archivos `CLAUDE.md` en cada carpeta le dan contexto para
ayudarte de forma más precisa con este proyecto.

Mucha suerte, y que disfrutes construyendo. 🚀
