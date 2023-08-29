# MyPostsApp💬

¡Bienvenido a MyPostsApp! Esta es una aplicación móvil construida utilizando React Native y Expo.

## Resumen

MyPostsApp te permite explorar y buscar a través de una lista de publicaciones. Puedes filtrar las publicaciones por ID de usuario y cargar más publicaciones al desplazarte. Además, puedes ver los detalles de cada publicación, incluido el título, el contenido del cuerpo de la publicación y el ID del usuario que lo creó.
Se utilizó la API pública de JSONPlaceholder para obtener una lista de posts de prueba, para visualizar en la app: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

## Comenzando

### Requisitos previos

- Node.js (v14 o superior)
- npm 
- Expo CLI

### Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone [https://github.com/SofiDubrowsky/MyPostsApp.git](https://github.com/SofiDubrowsky/MyPostsApp.git)
```

2. Ve al directorio del proyecto:
   
```bash
cd MyPostsApp
```

3. Instala las dependencias del proyecto:
   
```bash
npm install
```

### Ejecutar la Aplicación Localmente

1. Inicia el servidor de desarrollo:
   
```bash
npm start
```

2. Utiliza la aplicación [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) en tu dispositivo móvil para escanear el código QR que se muestra en la terminal. Esto abrirá la aplicación en tu dispositivo.

### Acceso a la Aplicación Desplegada

Alternativamente, puedes escanear el código QR a continuación utilizando la aplicación [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) en tu dispositivo móvil para abrir la aplicación deployada:

![image](https://github.com/SofiDubrowsky/MyPostsApp/assets/94505828/e9d0b8b5-15b6-4c5d-9f66-d7997782fcbc)

[Expo Deploy QR Code](https://expo.dev/@sofidubrowsky/mypostsapp?serviceType=classic&distribution=expo-go)

## Uso

- Abre la aplicación y explora la lista de publicaciones.
<p align="center">
  <img src="https://github.com/SofiDubrowsky/MyPostsApp/assets/94505828/68efcb03-b611-4ec5-868e-dfb19b0edde7" alt="Lista">
</p>

- Utiliza la barra de búsqueda para filtrar las publicaciones por ID de usuario.
<p align="center">
  <img src="https://github.com/SofiDubrowsky/MyPostsApp/assets/94505828/13046e0c-47d3-4870-b526-8f9788c2624a" alt="Busqueda 1">
  <img src="https://github.com/SofiDubrowsky/MyPostsApp/assets/94505828/6943df1a-873e-4164-a0d0-b0612d0687e8" alt="Busqueda 2">
</p>
 
- Carga más publicaciones al desplazarte hasta el final de la lista.
<p align="center">
  <img src="https://github.com/SofiDubrowsky/MyPostsApp/assets/94505828/3496c9ce-4399-49a0-aa72-14fce676b5d3" alt="Ver mas">
</p>

- Toca una publicación para ver sus detalles.
<p align="center">
  <img src="https://github.com/SofiDubrowsky/MyPostsApp/assets/94505828/cac3106c-3744-4125-a01d-5660de5d12c8" alt="Detalle">
</p>

## Pantallas de Error 

- En el caso de buscar un ID de usuario inexistente, se vera la siguiente respuesta:
<p align="center">
  <img src="https://github.com/SofiDubrowsky/MyPostsApp/assets/94505828/b73504a3-a95b-49db-abd9-c55feb22a75a" alt="Not Found">
</p>

- En situaciones donde pueda haber errores, como una mala respuesta de la API, se vera la siguiente respuesta:
<p align="center">
  <img src="https://github.com/SofiDubrowsky/MyPostsApp/assets/94505828/ad31dd94-d5aa-41e9-ac9d-cce288f2cc23" alt="Error">
</p>

¡Disfruta explorando y descubriendo publicaciones con MyPostsApp! 🚀

