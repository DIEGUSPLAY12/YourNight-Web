<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# 🛠️ INSTRUCCIONES DE TRABAJO — YourNight

Estas reglas son **obligatorias** para cualquier IA que trabaje en este proyecto.
Deben aplicarse en **todo momento**, sin excepción, salvo indicación explícita del usuario.

---

## 1. Verificación de código

Cada vez que generes o modifiques código, **antes de darlo por finalizado**:

1. Ejecuta **React Doctor** (`npm run doctor`) para verificar que el código esté bien estructurado, siga buenas prácticas de React y no tenga errores de implementación.
2. Ejecuta **Security Audit** (`npm audit`) para revisar que no existan vulnerabilidades de seguridad (inyecciones, manejo inseguro de datos, dependencias vulnerables, exposición de claves, etc.).

> ⚠️ **No entregues el código como definitivo** hasta que ambas verificaciones pasen sin errores críticos. Si encuentras problemas, corrígelos y vuelve a verificar antes de continuar.

---

## 2. Paleta de colores (uso obligatorio en todo diseño)

Cuando generes código de diseño/UI, usa **exclusivamente** esta paleta:

| # | Nombre | Hex | Uso | Contraste |
|---|--------|-----|-----|-----------|
| 1 | Fondo | `#0B0014` | Fondo general | — |
| 2 | Texto | `#C9B8E8` | Titulares y texto de cuerpo | 11.2:1 — AAA |
| 3 | Superficie | `#1B0F2E` | Tarjetas, nav, secciones elevadas | — (capa visual) |
| 4 | Acento principal | `#FF3EA5` | Botón CTA, links, elementos clave | 6.3:1 — AA/AAA grande |
| 5 | Acento secundario | `#FFC542` | Detalles, iconos, segundo botón | 13.0:1 — AAA |

**Reglas de uso:**
- ❌ No introduzcas colores fuera de esta paleta salvo indicación explícita del usuario.
- ❌ No uses el acento principal (`#FF3EA5`) como fondo.
- ❌ No uses el fondo (`#0B0014`) como color de texto.
- ✅ Respeta siempre los niveles de contraste indicados.

---

## 3. Animaciones

Para cualquier animación, usa **exclusivamente**:

- **Lenis** — scroll suave
- **GSAP** — animaciones y transiciones generales
- **Motion** (`motion/react`) — animaciones en componentes React/UI

El estilo de animación debe seguir la filosofía de **Emil Kowalski**: animaciones con propósito, físicas naturales, interruptibles y con atención al detalle.

> ❌ No implementes animaciones con otras librerías (ni CSS `@keyframes` complejos, ni React Spring, ni AOS) salvo indicación expresa del usuario.

---

## 4. Diseño y estructura UI/UX

Para todo lo relacionado con diseño y estructura de interfaz, aplica las siguientes skills del proyecto:

- **UIUX Pro Max** — decisiones de layout, jerarquía visual y patrones UX
- **Taste Skill** (`design-taste-frontend`) — evitar diseños genéricos y templados
- **Emil Design Eng** (`emil-design-eng`) — polish de UI, detalles invisibles que hacen que el software se sienta premium

Estas skills deben guiar las decisiones de layout, jerarquía visual, espaciado y consistencia del diseño.

---

## ✅ Resumen del flujo de trabajo esperado

```
Generar código    →  Verificar con React Doctor + Security Audit
Generar diseño    →  Aplicar paleta de colores definida
Generar animaciones → Usar solo Lenis, GSAP, Motion + estilo Emil Kowalski
Estructurar UI/UX →  Aplicar UIUX Pro Max, Taste Skill y Emil Design Eng
```
