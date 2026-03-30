# 04 — Despliega el backend en Render

Render es una plataforma en la nube donde puedes ejecutar tu API de Python
de forma gratuita. Como Vercel, se conecta a GitHub y redesplega cuando haces push.

> **El problema del huevo y la gallina:** el frontend necesita la URL del backend,
> y el backend necesita la URL del frontend. Despliega ambos primero con valores
> de placeholder y luego actualiza cada uno con la URL real del otro.
> Es una configuración que haces una sola vez.

---

## Paso 1 — Crear una cuenta en Render

1. Ve a [render.com](https://render.com).
2. Haz clic en **Get Started** → elige **GitHub**.
3. Autoriza a Render a acceder a tu cuenta de GitHub.

---

## Paso 2 — Crear un nuevo Web Service

1. En el dashboard de Render, haz clic en **New → Web Service**.
2. Conecta tu repositorio de GitHub.
3. Haz clic en **Connect**.

---

## Paso 3 — Configurar el servicio

Completa estos campos:

| Configuración | Valor |
|---------------|-------|
| **Name** | cualquier nombre, p. ej. `mi-lab-backend` |
| **Root Directory** | `backend` |
| **Runtime** | `Python 3` |
| **Build Command** | `pip install -r requirements.txt` |
| **Start Command** | `uvicorn app.main:app --host 0.0.0.0 --port 8000` |

> El campo **Root Directory** es fácil de pasar por alto. Asegúrate de que
> esté configurado como `backend` — de lo contrario Render buscará una app
> de Python en el lugar equivocado.

---

## Paso 4 — Agregar la variable de entorno

El backend necesita saber qué origen del frontend debe permitir (CORS).

En la sección **Environment Variables**, agrega:

| Clave | Valor |
|-------|-------|
| `CORS_ORIGINS` | *(pega tu URL de Vercel aquí — de [03_DEPLOY_FRONTEND.md](03_DEPLOY_FRONTEND.md))* |

> Si aún no has desplegado el frontend, pon un placeholder como
> `https://placeholder.vercel.app`. Lo actualizarás en el Paso 6.

---

## Paso 5 — Desplegar

Haz clic en **Create Web Service**.

Render instalará tus dependencias e iniciará la API.
Cuando termine, verás una URL en la parte superior de la página como:
`https://mi-lab-backend.onrender.com`

Verifica que funciona visitando:
`https://mi-lab-backend.onrender.com/api/v1/health`

Deberías ver: `{"status":"ok"}`

---

## Paso 6 — Conectar los dos servicios

Ahora que ambos están desplegados, actualiza cada uno con la URL real del otro:

**Actualizar Vercel (frontend):**
1. Ve a tu proyecto en [vercel.com](https://vercel.com).
2. Settings → Environment Variables → establece `NEXT_PUBLIC_API_URL` con tu URL de Render.
3. Redesplega.

**Actualizar Render (backend):**
1. Ve a tu servicio en [render.com](https://render.com).
2. Environment → actualiza `CORS_ORIGINS` con tu URL de Vercel.
3. Render se redesplegará automáticamente.

---

## Nota sobre el plan gratuito

El plan gratuito de Render **suspende** los servicios que no han recibido una
solicitud en 15 minutos. La primera solicitud después de una suspensión puede
tardar ~30 segundos en responder.
Esto es normal en el plan gratuito — no ocurre en un plan de pago.

---

## Estás en vivo

| Qué | Dónde |
|-----|-------|
| Frontend | `https://tu-app.vercel.app` |
| Health check del backend | `https://tu-backend.onrender.com/api/v1/health` |

Siguiente: [★ Desafío — cosas que construir →](CHALLENGE.md)
