# nodeBeginner
Node beginner tutorial

# 1 -  Autoarranque y monitorización con PM2.

# 2 - Documentación del Código

## 2.1 Documentación de la Api con Swagger

### 2.1.1 OAS

Instalación del paquete oas, que permite comentar el código y generar por consola
un json de open api specification que será copiado al archivo oas.json, el cual
utilizará swagger ui express para actualizar la documentación del api.

> https://www.npmjs.com/package/oas

> oas generate . Comando que genera el oas.json en consola.


### 2.1.2 Swagger Ui Express

Paquete que incluye swagger para node y express con la opción para lanzar
un interfaz gráfico con la documentación de la api creada con OAS.

> https://www.npmjs.com/package/swagger-ui-express

Después debemos añadir a las rutas del proyecto el código necesario
para ver la doc en la routa api-docs. (Consultar código proyecto).

Cuando levantamos el proyecto ya tenemos disponible la doc.


# 3 - Test

## 3.1 Mocha, Chai y Nyc

Instalar el paquete de chai, mocha y mocha http para generar nuestros test
con soporte en typescript.

> npm install chai mocha chai-http

Configuramos el script para lanzar los test:

> "test": "nyc mocha --require ts-node/register lib/test/*.ts",

Instalar el paquete nyc, que una vez lanzados los test genera
un archivo tipo lcov para poder generar un reporte del porcentaje de código.
cubierto con test, que será importado por Sonarqube para incorporar estos datos al análisis de calidad del código.

> npm i nyc

Añadimos la configuración de nyc al package.json

> "nyc": {
   "check-coverage": false,
   "all": true,
   "extension": [
     ".ts"
   ],
   "include": [
     "lib/**/*.ts"
   ],
   "exclude": [
     "lib/**/**.spec.ts"
   ],
   "reporter": [
     "lcov",
     "text-summary"
   ],
   "report-dir": "test/coverage"
 },


# 3 - Control de Calidad -Sonarqube

Instalamos el servidor de sonarqube y levantamos el mismo ejecutando el
archivo StartSonar situado en la carpeta bin del servidor sonarqube.

> https://www.sonarqube.org/downloads/

Instalamos en el mismo directorio que el server de sonarqube el
sonar scanner.

> https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner#AnalyzingwithSonarQubeScanner-Installation

Instalamos el paquete de npm sonar-scanner para lanzar el sonar scanner desde el proyecto.

> npm install -D sonar-scanner

Una vez instalados ambos configuramos en la raíz de nuestro proyecto el fichero de configuración del sonnar scanner para este proyecto.

> sonar-project.properties:

sonar.projectKey=API_REPORTER_NODE_TYPESCRIPT
sonar.projectName=API_REPORTER_NODE_TYPESCRIPT
sonar.projectVersion=1.0
sonar.sourceEncoding=UTF-8
sonar.sources=lib
sonar.projectBaseDir = C:/Users/informatica07/git-dev-vs/Api_Reporter_Node_Typescript
sonar.exclusions=**/node_modules/**,*.spec.ts
sonar.tests=lib/test
sonar.test.inclusions=lib/test/*.spec.ts
sonar.ts.tslintconfigpath=tslint.json
sonar.typescript.lcov.reportPaths=test/coverage/lcov.info

Configuramos un script para lanzar sonar:

> "sonar": "sonar-scanner"

Esto genera un dashboard en localhost:9000 donde podremos consultar toda la
inspección de calidad del código.

package.json en este momento:





# 4 - Integración continua con travis-c o Jenkins


