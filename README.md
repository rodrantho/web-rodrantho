# rodrantho - Portfolio Personal

Página web personal one-page para la marca **rodrantho**. Sitio oficial que muestra servicios, proyectos y información de contacto con diseño minimalista y moderno.

## 🚀 Características

- **Diseño One-Page**: Navegación fluida entre secciones
- **Responsive**: Optimizado para todos los dispositivos
- **GitHub Integration**: Muestra proyectos automáticamente desde GitHub API
- **Performance**: Optimizado para Lighthouse 90+
- **SEO Ready**: Meta tags y Open Graph configurados
- **Minimalista**: Diseño limpio y profesional

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 con Flexbox y Grid
- JavaScript vanilla (ES6+)
- GitHub API
- Font Awesome Icons
- Google Fonts (Inter)

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/rodrantho/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias** (opcional, para desarrollo):
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```
   O simplemente abrir `index.html` en el navegador.

## 🎨 Estructura del Proyecto

```
rodrantho-portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── package.json        # Configuración del proyecto
└── README.md          # Documentación
```

## 🔧 Configuración

### GitHub API
El sitio se conecta automáticamente a las cuentas:
- `github.com/rodrantho`
- `github.com/rodranthonst`

Si la API falla, se muestran proyectos de ejemplo como fallback.

### Personalización
1. **Colores**: Modificar variables CSS en `styles.css`
2. **Contenido**: Editar textos en `index.html`
3. **Proyectos Fallback**: Actualizar array en `script.js`
4. **Enlaces Sociales**: Modificar URLs en la sección de contacto

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run deploy:vercel
```

### Netlify
1. Conectar repositorio en Netlify
2. Build command: `echo 'Static site'`
3. Publish directory: `/`

### GitHub Pages
1. Subir código a GitHub
2. Activar GitHub Pages en configuración del repo
3. Seleccionar rama `main`

### Google Cloud Run
1. Crear `Dockerfile`:
   ```dockerfile
   FROM nginx:alpine
   COPY . /usr/share/nginx/html
   EXPOSE 80
   ```
2. Desplegar con Cloud Run

## 📊 Performance

- **Lighthouse Score**: 90+ en todas las métricas
- **Optimizaciones**:
  - Lazy loading de imágenes
  - CSS y JS minificados
  - Fuentes optimizadas
  - Animaciones con CSS

## 🎯 Secciones

1. **Hero**: Presentación principal con CTA
2. **Servicios**: 4 servicios principales
   - Desarrollo Web
   - Automatización
   - Integraciones
   - Infraestructura & Redes
3. **Proyectos**: Grid dinámico con GitHub API
4. **Contacto**: Formulario y enlaces sociales
5. **Footer**: Copyright y enlaces

## 🔍 SEO

- Title y meta description optimizados
- Open Graph tags para redes sociales
- Estructura semántica HTML5
- URLs amigables con anclas

## 📱 Responsive Design

- **Desktop**: Grid completo y navegación horizontal
- **Tablet**: Adaptación de columnas
- **Mobile**: Menú hamburguesa y layout vertical

## 🤝 Contribuir

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

MIT License - ver archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

- **Email**: contact@rodrantho.com
- **GitHub**: [@rodrantho](https://github.com/rodrantho)
- **LinkedIn**: [rodrantho](https://linkedin.com/in/rodrantho)

---

**Desarrollado por rodrantho** - Soluciones digitales a medida