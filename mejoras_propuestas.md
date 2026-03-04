# Propuestas de Mejora - Proyecto Pygmalion

Este documento detalla las mejoras identificadas para el proyecto, clasificadas por su nivel de importancia: 
- 🔴 **CRÍTICA**: Requiere atención inmediata (errores, inconsistencias graves).
- 🟠 **PRIORITARIA**: Importante para la arquitectura, rendimiento o mantenimiento a largo plazo.
- 🔵 **NORMAL**: Refactorizaciones o mejoras de calidad de vida.

## 1. Refactorización y Limpieza de Código

### 📁 Corrección de Nombres
- [x] **Directorio `src/utilis`** [🔴 **CRÍTICA**]: Corregido a `src/utils`.
- [x] **Archivo `src/components/sections/contact.tsx`** [🟠 **PRIORITARIA**]: Corregido a `Contact.tsx` (PascalCase).

### 🏗️ Arquitectura Atómica
- [x] **Atomic Design** [🔴 **CRÍTICA**]: Implementación de estructura de carpetas `atoms`, `molecules`, `organisms`, `templates` y `pages`.
- [x] **`ProductCard.tsx`** [🟠 **PRIORITARIA**]: Refactorizado como **Molécula** con sus átomos base (`Badge`, `Typography`, `CardImage`).
- **`Hero.tsx`** [🟠 **PRIORITARIA**]: Organismo masivo (6.5KB). Debe dividirse en moléculas como `HeroInfo`, `HeroGallery` y átomos de animación.
- **`Footer.tsx`** [🟠 **PRIORITARIA**]: Organismo complejo. Debe dividirse en moléculas de `FooterLinks`, `SocialLinks` y el átomo `Copyright`.
- **`Stats.tsx`** [🔵 **NORMAL**]: Extraer la lógica de cada estadística a una molécula `StatCounter`.

### ✂️ División de Componentes Extensos
- **`AboutUs.tsx`** [🔵 **NORMAL**]: Dividir en sub-componentes dentro de una carpeta dedicada.
- **`MenuItem.tsx`** [🔵 **NORMAL**]: Extraer la lógica de interacción a un hook personalizado.

## 2. Arquitectura y Estado

### 🔄 Gestión de Estado (Context API / Zustand) [🟠 **PRIORITARIA**]
- Implementar un estado global para eliminar el *Prop Drilling* de variables como `activeTab` y `scrolled`. Mejora significativamente la escalabilidad.

### 🍱 Patrón de Composición Avanzado [🔵 **NORMAL**]
- Utilizar *Compound Components* para componentes complejos como `Tabs`.

## 3. Calidad de Software y Testing

### 🧪 Pruebas Automatizadas [🟠 **PRIORITARIA**]
- Configurar **Vitest** y **React Testing Library**. Una base de código sin pruebas es difícil de mantener sin introducir errores.

## 4. Rendimiento y SEO

### ⚡ Carga Perezosa (Lazy Loading) [🟠 **PRIORITARIA**]
- Implementar `React.lazy` para reducir el bundle inicial. Vital para la experiencia del usuario.

### 🔍 SEO Dinámico [🔵 **NORMAL**]
- Integrar `react-helmet-async` para metadatos dinámicos.

## 5. Accesibilidad (a11y)

### ♿ Mejoras de Navegación [🟠 **PRIORITARIA**]
- Asegurar navegación completa por teclado en menús y dropdowns. Es fundamental para una plataforma educativa inclusiva.

---
> [!TIP]
> Empieza por las tareas marcadas como 🔴 **CRÍTICA** y 🟠 **PRIORITARIA** para obtener el mayor impacto con el menor esfuerzo inicial.
