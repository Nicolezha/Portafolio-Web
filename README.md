# Portafolio Nicole Hernandez - Ingeniera de Sistemas

Portafolio web profesional desarrollado con **HTML5 puro**, **CSS3** y **JavaScript vanilla**. Diseño moderno con paleta de colores violeta/púrpura y cyan, totalmente responsive y con modo claro/oscuro.

## 🚀 Características

- ✅ HTML5 semántico y accesible
- ✅ CSS3 puro (sin frameworks)
- ✅ JavaScript vanilla (sin dependencias)
- ✅ Diseño moderno y profesional
- ✅ Totalmente responsive (mobile-first)
- ✅ Modo claro/oscuro con persistencia
- ✅ Animaciones sutiles con CSS
- ✅ Navegación con smooth scroll
- ✅ Formulario de contacto
- ✅ SEO optimizado
- ✅ Accesibilidad WCAG AA

## 📁 Estructura del Proyecto

```
portfolio-nicole-hernandez/
├── index.html          # Archivo HTML principal
├── css/
│   └── styles.css      # Estilos CSS completos
├── js/
│   └── main.js         # Funcionalidades JavaScript
├── images/             # Carpeta para imágenes (opcional)
└── README.md           # Este archivo
```

## 🎨 Personalización

### Cambiar Colores

Los colores se definen en las variables CSS al inicio de `css/styles.css`:

```css
:root {
    --primary: #8b5cf6;        /* Violeta principal */
    --accent: #06b6d4;         /* Cyan acento */
    /* ... más variables */
}
```

Para cambiar la paleta, modifica estos valores OKLCH o hexadecimales.

### Cambiar Contenido

Edita directamente en `index.html`:

1. **Información personal**: Busca la sección `<!-- Sección Hero -->`
2. **Experiencia laboral**: Busca `<!-- Sección Experiencia -->`
3. **Educación**: Busca `<!-- Sección Educación -->`
4. **Habilidades**: Busca `<!-- Sección Habilidades -->`
5. **Contacto**: Busca `<!-- Sección Contacto -->`

### Cambiar Foto

1. Reemplaza la URL en la sección Hero:
```html
<img src="TU_URL_AQUI" alt="Nicole Hernandez" class="profile-photo">
```

2. O descarga la imagen localmente en la carpeta `images/` y usa:
```html
<img src="images/tu-foto.jpg" alt="Nicole Hernandez" class="profile-photo">
```

### Cambiar Información de Contacto

En la sección `<!-- Sección Contacto -->`, actualiza:

```html
<a href="mailto:TU_EMAIL@ejemplo.com">TU_EMAIL@ejemplo.com</a>
<a href="tel:+34XXXXXXXXX">TU_TELÉFONO</a>
```

## 📧 Configurar Formulario de Contacto

El formulario está configurado para usar `mailto:` por defecto. Para usar **Formspree**:

1. Ve a [https://formspree.io](https://formspree.io)
2. Crea una cuenta y un nuevo formulario
3. Copia tu Form ID
4. Abre `js/main.js` y descomenta las líneas del formulario Formspree (líneas ~80-100)
5. Reemplaza `YOUR_FORM_ID` con tu ID real:

```javascript
const response = await fetch('https://formspree.io/f/TU_FORM_ID_AQUI', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});
```

## 🌐 Uso Local

### Opción 1: Abrir directamente
Simplemente haz doble clic en `index.html` para abrir en el navegador.

### Opción 2: Con servidor local (recomendado)

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (con http-server):**
```bash
npx http-server
```

Luego abre `http://localhost:8000` en tu navegador.

## 🚀 Despliegue

### Opción 1: GitHub Pages (Gratis)

1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages
4. Selecciona "Deploy from a branch"
5. Tu sitio estará en `https://tu-usuario.github.io/nombre-repo`

### Opción 2: Netlify (Gratis)

1. Ve a [https://netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. Tu sitio estará disponible automáticamente

### Opción 3: Vercel (Gratis)

1. Ve a [https://vercel.com](https://vercel.com)
2. Importa tu repositorio
3. Despliega automáticamente

### Opción 4: Hosting tradicional

Sube todos los archivos via FTP a tu servidor web. Asegúrate de que:
- `index.html` esté en la raíz
- Las carpetas `css/` y `js/` estén en el mismo nivel que `index.html`

## 🎯 Características Implementadas

### Navegación
- Menú responsive con hamburguesa en móvil
- Smooth scroll entre secciones
- Navbar que cambia de estilo al hacer scroll

### Tema
- Toggle claro/oscuro
- Persistencia en localStorage
- Detección de preferencia del sistema

### Secciones
- **Hero**: Presentación con foto y CTA
- **Sobre Mí**: Perfil profesional y highlights
- **Experiencia**: Historial laboral detallado
- **Educación**: Formación académica
- **Habilidades**: Lenguajes, aptitudes e idiomas
- **Contacto**: Información y formulario
- **Footer**: Enlaces sociales y copyright

### Interactividad
- Animaciones al scroll
- Hover effects en tarjetas
- Validación de formulario en cliente
- Menú responsive

## ♿ Accesibilidad

- Etiquetas semánticas HTML5
- Atributos ARIA donde aplica
- Textos alternativos en imágenes
- Contraste WCAG AA
- Navegación por teclado
- Focus visible

## 🔍 SEO

- Meta tags descriptivos
- Open Graph para redes sociales
- Estructura HTML semántica
- URLs amigables con hash
- Títulos y encabezados jerárquicos

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints en 480px, 768px
- Flexbox y CSS Grid
- Imágenes escalables
- Tipografía fluida

## 🐛 Troubleshooting

### El formulario no envía mensajes
- Verifica que hayas configurado Formspree correctamente
- Comprueba que el Form ID sea correcto
- Revisa la consola del navegador (F12) para errores

### Los estilos no se cargan
- Asegúrate de que `css/styles.css` esté en la carpeta `css/`
- Verifica que las rutas sean relativas correctas
- Recarga la página con Ctrl+Shift+R (cache limpio)

### El menú móvil no funciona
- Verifica que `js/main.js` esté en la carpeta `js/`
- Comprueba que JavaScript esté habilitado en el navegador
- Abre la consola (F12) para ver errores

## 📝 Notas Importantes

- **Privacidad**: Revisa que la información de contacto sea correcta
- **Imágenes**: Optimiza las imágenes para web (máx 100KB)
- **Performance**: Minimiza CSS y JS para producción
- **Favicon**: Añade un favicon en la raíz del proyecto

## 🔐 Seguridad

- No incluyas información sensible (números de ID, etc.)
- Usa HTTPS en producción
- Valida formularios en servidor también (si usas backend)
- Protege tu email con Formspree o similar

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados a Nicole Hernandez.

## 🤝 Soporte

Para problemas o preguntas:
1. Revisa este README
2. Consulta la documentación de HTML5, CSS3, JavaScript
3. Busca en Stack Overflow
4. Contacta con soporte del hosting

---

**Desarrollado con ❤️ usando HTML5, CSS3 y JavaScript vanilla**

**Última actualización:** Noviembre 2025
