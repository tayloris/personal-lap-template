# Tu Desafío

Este repositorio es un lienzo en blanco. Aquí tienes algunas ideas para
comenzar, de menor a mayor ambición.

Trabaja los niveles en orden — cada uno se construye sobre el anterior.

---

## Nivel 1 — Hazlo tuyo *(~30 minutos)*

- [ ] Cambia el título y la descripción del sitio en `frontend/app/layout.tsx`
- [ ] Actualiza el texto de la página de inicio en `frontend/app/page.tsx`
- [ ] Llena tu nombre real, biografía y enlaces en `frontend/components/cv/CVContent.tsx`
- [ ] Reemplaza las entradas de experiencia y educación con las tuyas

---

## Nivel 2 — Agrega tu primera app al lab *(unas pocas horas)*

- [ ] Crea `frontend/app/lab/hola-mundo/page.tsx` con cualquier contenido
- [ ] Agrega un archivo `meta.ts` para ella:
  ```ts
  // frontend/app/lab/hola-mundo/meta.ts
  import type { LabApp } from "@/lib/lab/types";

  export const holaMundoMeta: LabApp = {
    href: "/lab/hola-mundo",
    title: "Hola Mundo",
    description: "Mi primer experimento en el lab.",
    status: "live",
  };
  ```
- [ ] Regístrala en `frontend/lib/labApps.ts` y observa cómo aparece en la página del lab
- [ ] Cambia el status a `"building"` y fíjate cómo cambia la apariencia de la tarjeta

---

## Nivel 3 — Conéctalo al backend *(medio día)*

- [ ] Agrega una nueva ruta FastAPI en `backend/app/api/` — por ejemplo, un
      endpoint que devuelva una frase aleatoria
- [ ] Monta el router en `backend/app/main.py` bajo `/api/v1/`
- [ ] Llámalo desde tu página frontend usando el helper `request()` en `lib/api.ts`
- [ ] Muestra el resultado en pantalla

**Consejo:** usa `curl` o [Hoppscotch](https://hoppscotch.io) para probar el
endpoint de la API antes de conectarlo al frontend.

---

## Nivel 4 — Despliégalo *(un día, la primera vez)*

- [ ] Sigue [docs/es/03_DEPLOY_FRONTEND.md](03_DEPLOY_FRONTEND.md) y obtén una URL de Vercel en vivo
- [ ] Sigue [docs/es/04_DEPLOY_BACKEND.md](04_DEPLOY_BACKEND.md) y obtén una URL de Render en vivo
- [ ] Conecta las dos URLs como variables de entorno en cada servicio
- [ ] Comparte el enlace con alguien

---

## Nivel 5 — Ve más lejos

- [ ] Agrega una página sobre ti en `/about`
- [ ] Construye una app en el lab que haga algo que realmente quieras que exista
- [ ] Agrega un conjunto de datos interesante y visualízalo (CSV → gráfico)
- [ ] Pídele a Cursor (o ChatGPT) que te ayude a construir algo — ese es
      el punto de esta plantilla

---

> **El objetivo no es terminar la lista.** Elige lo que suene más interesante
> ahora mismo y empieza por ahí.
