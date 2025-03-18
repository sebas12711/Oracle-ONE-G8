# Amigo Secreto

Este proyecto es una aplicación web simple que permite a los usuarios organizar un sorteo de "Amigo Secreto". La aplicación permite agregar nombres de participantes, realizar un sorteo aleatorio para asignar amigos secretos, y reiniciar el juego para comenzar de nuevo una vez se sorteen todos los participantes.

Está construido con tecnologías web básicas: **HTML**, **CSS** y **JavaScript**.

---

## Estructura del Proyecto

El proyecto está organizado en tres archivos principales:

1. **`index.html`**:
   - Contiene la estructura HTML de la aplicación.
   - Define los elementos de la interfaz de usuario, como el campo de entrada de texto, los botones y las listas de nombres y resultados.

2. **`style.css`**:
   - Define los estilos CSS para la aplicación.
   - Incluye estilos para los botones, listas, y la disposición general de la página.

3. **`app.js`**:
   - Implementa la lógica de la aplicación.
   - Contiene funciones para agregar nombres, eliminar nombres, realizar el sorteo y reiniciar el juego.

---

## Características Principales

1. **Agregar Participantes**:
   - Los usuarios pueden agregar nombres de amigos o participantes a una lista.
   - Los nombres se validan para evitar duplicados o entradas vacías.

2. **Eliminar Participantes**:
   - Los nombres pueden ser eliminados de la lista en cualquier momento.
   - Al eliminar un nombre, se reinicia el estado del sorteo para garantizar que no haya inconsistencias.

3. **Sortear Amigos Secretos**:
   - Una vez que se han agregado al menos dos nombres, los usuarios pueden realizar un sorteo. Cuando se inicia el sorteo se bloquea la entrada de nuevos amigos.
   - El sistema asigna aleatoriamente un amigo secreto a cada participante, asegurándose de que nadie sea asignado a sí mismo.
   - Los resultados se muestran en una lista clara y legible.

4. **Reiniciar el Juego**:
   - Los usuarios pueden reiniciar el juego en cualquier momento eliminando algún participante de la lista, o bien sorteando todos los amigos. Con esta última se borran todos los nombres y sorteos.

5. **Interfaz Amigable**:
   - Diseño responsive que se adapta a diferentes tamaños de pantalla.
   - Botones intuitivos y retroalimentación visual para acciones como agregar o eliminar nombres.

---

## Cómo Usar la Aplicación

### 1. Agregar Participantes
   - Escribe el nombre de un participante en el campo de texto y haz clic en el botón **"Añadir"**.
   - El nombre se agregará a la lista de participantes debajo del campo de texto.
   - Si el nombre ya existe o está vacío, se mostrará una alerta.

### 2. Eliminar Participantes
   - Cada nombre en la lista tiene un botón de eliminar (❌) a su lado.
   - Haz clic en este botón para eliminar el nombre de la lista.
   - Al eliminar un nombre, se reinicia el estado del sorteo.

### 3. Realizar el Sorteo
   - Una vez que hayas agregado al menos dos nombres, haz clic en el botón **"Sortear amigo"**.
   - El sistema asignará aleatoriamente un amigo secreto a cada participante.
   - Los resultados se mostrarán en una lista debajo de la lista de nombres.

### 4. Reiniciar el Juego
   - Si deseas comenzar de nuevo, elimina todos los nombres de la lista, simplemente recarga la página, o sortea todos los nombres.

---

## Requisitos Técnicos

- **Navegador Web**: La aplicación es compatible con navegadores modernos como Google Chrome, Mozilla Firefox, Safari y Microsoft Edge.
- **JavaScript**: La aplicación requiere que JavaScript esté habilitado en el navegador.

---

## Ejemplo de Uso

1. Agrega los nombres de tus amigos: "Ana", "Carlos", "Luisa".
2. Haz clic en **"Sortear amigo"**.
3. El sistema mostrará los resultados, por ejemplo:
   - "El amigo secreto de Ana es Carlos".
   - "El amigo secreto de Carlos es Luisa".
   - "El amigo secreto de Luisa es Ana".

---

## Captura de Pantalla

![image](https://github.com/user-attachments/assets/4075b1b6-2859-44ad-ad72-3a9db2d4386b)

---

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme.

LinkedIn: [Sebastián Castaño Quinchía](www.linkedin.com/in/sebastián-quinchía-analista-astrónomo)
