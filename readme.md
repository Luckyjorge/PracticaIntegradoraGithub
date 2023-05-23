# JS 101 Práctica integradora de Jorge e Ismael

Objetivo
Vamos a armar una app de tareas que nos permita manipular las mismas utilizando las herramientas que hasta el momento hemos aprendido.

## Instrucciones

Crear una carpeta llamada app-tareas y dentro de ella crear un archivo tareas.json, el cual debe contener un array de objetos literales.
Cada objeto literal deberá tener las propiedades: titulo y estado. En donde el título podrá ser cualquier cadena de texto, sin embargo el estado sólo podrá tomar los siguientes valores: “terminada”, “en progreso” o
“pendiente”.



## Micro desafio 1

```
1. Generar un archivo app.js que "consuma" el archivo de tareas.json. Para esto,
seguramente nos convenga usar el módulo nativo de NodeJs. File System - FS
2. Mostrar el listado de tareas existente por la terminal. Para esto, seguramente
tengamos que guardar el contenido del archivo tareas.json en una variable y convertir
la misma a un dato tipo array. 


```

## Micro desafio 2
```
1. Permitir que al momento de ejecutar el archivo app.js desde la terminal con Node.js 
se pueda pasar un argumento después del nombre del archivo de la siguiente manera:
a) node app.js listar

Si se escribe la palabra “listar” después del nombre del archivo, se deberán listar
todas las tareas existentes en el archivo tareas.json.

b) node app.js
Si NO se escribe ninguna palabra después del nombre del archivo, en la terminal 
deberá aparecer el texto: Atención - Tienes que pasar una acción.

c) node app.js cualquier texto
Si se llegase a pasar cualquier otro texto que no sea la palabra
listar, en la terminal deberá aparecer el texto: No entiendo qué
quieres hacer.
```

## Copyright (?)

[Jorge](https://r.mtdv.me/xrmvYFzXm2)