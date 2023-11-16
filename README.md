# Ejercicio de calidad de código y test unitario

## Objetivos

* Realizar análisis estático de código
* Aplicar buenas práticas de codificación
* Codificar casos de test unitario
* Analizar cobertura y profundidad del test unitario

### Setup inicial

Clonar localmente el repositorio. 

En la terminal moverse al directorio del proyecto y ejecutar `npm install`.

### Parte A

1. En la terminal ejecutar `npm run lint`
2. En la configuración de ESLint cambiar las reglas:
    * linebreak-style: off
    * quote: warn, single
3. En `package.json` agregar parámetro `--fix` al script `lint` y ejecutarlo
4. Corregir manualmente el resto de problemas reportados en el código
6. Aplicar buenas prácticas de codificación (ej: nomenclatura, comentarios)
   
Hacer commit de los cambios y push al repositorio remoto

Crear un issue con título `Parte A` y subir una captura de la terminal con 0 warnings


### Parte B

1. En la terminal ejecutar `npm run test`
2. En `package.json` agregar parámetro `--coverage` al script `test` y ejecutarlo
3. Codificar casos de test unitario hasta alcanzar 100% cobertura
4. Agregar casos de test unitario para profundizar las pruebas (ej: límites, datos no válidos)

Hacer commit de los cambios y push al repositorio remoto

Crear un issue con título `Parte B` y subir una captura de la terminal que muestre ejecución de casos y cobertura 100%
