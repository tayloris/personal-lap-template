# 02 — Guarda tu trabajo con Git

Git es un **sistema de control de versiones** — registra cada cambio que haces
y te permite retroceder si algo se rompe.

**Modelo mental:** Git es como el sistema de guardado de un videojuego.
- Cada **commit** es un punto de guardado con una descripción de lo que hiciste.
- **GitHub** es la nube donde se guardan tus puntos.
- Siempre puedes volver a cualquier guardado anterior.

Eso es todo lo que necesitas saber para empezar.

---

## Los 5 comandos que usarás en realidad

```bash
git status           # ¿Qué cambió desde el último guardado?
git add .            # Preparar todo (marcarlo para guardar)
git commit -m "..."  # Guardar un snapshot con una descripción
git push             # Subir los guardados a GitHub
git pull             # Descargar los últimos cambios de GitHub
```

### Flujo de trabajo típico

```bash
# 1. Ver qué cambió
git status

# 2. Preparar todo
git add .

# 3. Guardar un snapshot (escribe una descripción breve de lo que hiciste)
git commit -m "Agregar aplicación de contador de palabras al lab"

# 4. Subir a GitHub
git push
```

> **Escribe los mensajes de commit en lenguaje sencillo.** Piensa: "¿Qué hice?"
> Bien: `"Corregir enlace activo en el navbar"`, `"Agregar placeholder del CV"`
> Mal: `"fix"`, `"cambios"`, `"asdfgh"`

---

## ¿Vas a probar algo nuevo? Usa una rama.

Una **rama** es una copia separada de tu código donde puedes experimentar sin
afectar la versión que funciona.

```bash
# Crear una rama nueva y cambiarse a ella
git checkout -b mi-experimento

# ... haz tus cambios, haz commits ...

# Cuando estés satisfecho, vuelve a main
git checkout main

# Fusionar tu experimento en main
git merge mi-experimento
```

Si el experimento no funcionó, simplemente elimina la rama:

```bash
git branch -d mi-experimento
```

---

## Deshacer cambios en un archivo que rompiste

Si editaste un archivo y quieres descartar todos los cambios que le hiciste:

```bash
git checkout -- ruta/al/archivo.tsx
```

> Esto solo funciona si aún no has hecho commit del cambio.
> Una vez que está en un commit, usa `git revert` — pero eso es un tema avanzado.

---

## Tarjeta de referencia rápida

| Comando | Qué hace |
|---------|---------|
| `git status` | Muestra archivos modificados |
| `git add .` | Prepara todos los cambios |
| `git add ruta/al/archivo` | Prepara un archivo |
| `git commit -m "..."` | Guarda un snapshot |
| `git push` | Sube a GitHub |
| `git pull` | Descarga de GitHub |
| `git log --oneline` | Ver commits recientes |
| `git checkout -b nombre` | Crear y cambiar a una rama |
| `git checkout main` | Volver a la rama main |
| `git checkout -- archivo` | Deshacer cambios en un archivo |

---

Siguiente: [03 — Despliega el frontend en Vercel →](03_DEPLOY_FRONTEND.md)
