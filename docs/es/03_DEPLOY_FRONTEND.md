# 03 — Despliega el frontend en Vercel

Vercel es una plataforma de hosting diseñada para Next.js. La conectas a
GitHub y cada vez que haces `git push`, tu sitio se actualiza automáticamente.

> **Prerrequisito:** Tu código debe estar en GitHub.
> Si no lo está todavía, ver [02 — Fundamentos de Git](02_GIT_BASICS.md).

---

## Paso 1 — Sube tu código a GitHub

Asegúrate de que los últimos cambios estén en GitHub:

```bash
git add .
git commit -m "Listo para desplegar"
git push
```

---

## Paso 2 — Crear una cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com).
2. Haz clic en **Sign Up** → elige **Continue with GitHub**.
3. Autoriza a Vercel a acceder a tu cuenta de GitHub.

---

## Paso 3 — Importar tu proyecto

1. En el dashboard de Vercel, haz clic en **Add New → Project**.
2. Encuentra tu repositorio en la lista y haz clic en **Import**.

---

## Paso 4 — Configurar el directorio raíz *(no te saltes este paso)*

Este es el paso que más gente se salta.

El proyecto tiene una carpeta `frontend/` y una `backend/`.
Vercel necesita saber que solo debe construir el frontend.

- En la pantalla **Configure Project**, busca **Root Directory**.
- Haz clic en **Edit** y escribe `frontend`.
- Haz clic en **Continue**.

Vercel detectará Next.js automáticamente y rellenará la configuración de
construcción por ti.

---

## Paso 5 — Agregar la variable de entorno

El frontend necesita saber dónde está la API del backend.

En la sección **Environment Variables**:

| Nombre | Valor |
|--------|-------|
| `NEXT_PUBLIC_API_URL` | *(pega tu URL de Render aquí — ver [04_DEPLOY_BACKEND.md](04_DEPLOY_BACKEND.md))* |

> Si aún no has desplegado el backend, puedes saltarte este paso y
> volver a agregarlo después. El sitio se desplegará igual; solo que
> no podrá llamar a la API hasta que lo configures.

---

## Paso 6 — Desplegar

Haz clic en **Deploy**.

Vercel construirá el sitio y te dará una URL como:
`https://tu-repositorio.vercel.app`

**Ese es tu sitio en vivo.** Comparte el enlace.

---

## Redespliegue automático con cada push

A partir de ahora, cada vez que ejecutes `git push`, Vercel detecta el cambio
y reconstruye tu sitio automáticamente — normalmente en menos de un minuto.

Esa es la magia: código → push → en vivo, siempre.

---

## Agregar o actualizar una variable de entorno después

1. Ve a tu proyecto en [vercel.com](https://vercel.com).
2. Haz clic en **Settings → Environment Variables**.
3. Agrega o edita la variable.
4. **Redesplega** el proyecto (Settings → Deployments → Redeploy) para que
   el cambio tome efecto.

---

Siguiente: [04 — Despliega el backend en Render →](04_DEPLOY_BACKEND.md)
