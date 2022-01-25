# Squad Craft Coders - Citibanamex

<section> <img src="https://user-images.githubusercontent.com/7150868/150906181-39b08936-1c84-4c3d-8739-147e74e8193a.png" alt="logo de equipo craft coders" width= 90px height= 90px > 
    <img src="https://user-images.githubusercontent.com/7150868/150906429-bb815142-fffb-43f9-853b-007e07f27e75.png" alt="logo de citibanamex"> </section>

    <img src="https://user-images.githubusercontent.com/7150868/150906429-bb815142-fffb-43f9-853b-007e07f27e75.png" alt="logo de citibanamex"> 
     <img src="https://user-images.githubusercontent.com/62182593/151021361-f76edd13-6fb1-4f18-9c79-dd35faedfd8f.png" alt="logo universal de la discapacidad" width= 90px height= 90px > 
</section>


## **RETO 2022: “Inclusión digital para personas con discapacidad visual:** transacciones entre cuentas de Citibanamex”
@@ -13,6 +14,8 @@
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de Usuarios](#3-historias-de-usuario)
* [4. Prototipos](#4-prototipos)
* [5. Especificaciones de uso](#5-especificaciones-de-uso)
* [6. Despliegue](#6-despliegue)

#### 1. Preámbulo

@@ -23,8 +26,11 @@ En la actualidad, no muchas aplicaciones presentan las normas adecuadas para que
#### 2. Resumen del Proyecto
Se realizó investigación en diversos recursos con el fin de crear un ejercicio de empatía hacia los posibles usuarios de nuestra aplicación con el fin de mejorar su experiencia de usuario. Uno de los principales puntos a considerar fue el espectro que abarca la discapacidad visual, ya que esta no necesariamente es únicamente la pérdida total de la visión, sino que puede ser condiciones tales como el daltonismo, debilidad visual, dislexia, etc.

De manera que al tener que abarcar todo un espectro la solución a nuestro reto también debía ser diversa
.
De manera que al tener que abarcar todo un espectro la solución a nuestro reto también debía ser diversa; para dar con una solución adecuada buscamos integrar cada solución individual a cada limitación que pudieran tener nuestros usuarios. De modo que seleccionamos diversas paletas de color que favorezcan a usuarios que tengan dificultades para diferenciar colores, así como para los usuarios que tengan alguna debilidad visual. Otra funcionalidad que se implementó fue el poder cambiar el tamaño de la fuente en la aplicación, esto para los usuarios que les facilite la lectura de esta forma. 

En cuanto a nuestros usuarios con limitación total de la vista se incorporó el uso de comandos de voz para que puedan acceder a la sección de transferencias únicamente hablando y así facilitarles lo mejor posible esta función tan esencial. Igualmente se implementó de etiquetas semánticas en todo nuestro código para facilitarles el lector de pantallas por medio del navegador.

Para comprobar que se estaba llevando a cabo de manera idónea la accesibilidad en la aplicación se realizaron pruebas de usabilidad con usuarios que presentaran distintos tipos de limitaciones visuales, de esta manera se logró conocer si se les estaba otorgando una herramienta útil que les facilitara el hacer transferencias tal y como era el objetivo del reto. Una vez realizadas las pruebas de usabilidad se iteraron los prototipos originales hasta llegar a los finales que se presentan en la sección 4. 

#### 3. Historias de Usuario

@@ -55,4 +61,34 @@ Propuesta de diseño en modo oscuro.

#### 5. Especificaciones de uso

Si se desea usar el asistente de voz y los comandos de voz es necesario que se consulte la pagina desde el navegador web google chrome.
Nuestro mínimo producto viable cuenta con un menú el cual le otorga al usuario las diferentes opciones ya mencionadas, tales como cambiar las paletas de colores disponibles, estas son:
- Modo oscuro.
- Escala de grises
- Predeterminada

De igual manera, este menú contiene tres opciones para cambiarle el tamaño de fuente a la aplicación para que se seleccione la que mejor se le acomode al usuario y una _X_ con la que se puede cerrar el menú una vez que se haya seleccionado la opción deseada. A este menú se puede acceder en el botón de la lado izquierdo del menú que se encuentra en el footer. 

![image](https://user-images.githubusercontent.com/62182593/151025627-22c965b6-b1e7-4230-bf6d-4d2f982bf946.png)

El menú desplegado se ve de la siguiente manera, se diseñó de forma que sean lo más claras posibles las funciones.

![image](https://user-images.githubusercontent.com/62182593/151026180-494248d1-c333-4f97-87cf-15567b6e7869.png)

Para acceder al menú de comandos de voz se hace a través de la siguiente opción en el menú de footer.

![image](https://user-images.githubusercontent.com/62182593/151026906-fa2c7de8-cbca-417a-b136-0bc4ced74b09.png)

Una vez seleccionada la opción se redirigirá a una página que luce de la siguiente manera: 

![image](https://user-images.githubusercontent.com/62182593/151027351-ff5b2c02-689f-4d51-9a85-21c04218d2c5.png)

Una vez que se ha accedido a dicha página se presiona la opción "Iniciar" para activar el comando de voz, para este se usan las palabras **"Open transferencias"** y este desplegará el menú para realizar una transferencia. 

![image](https://user-images.githubusercontent.com/62182593/151027793-4e358cc8-bcc0-4b7d-9092-f298d70a20da.png)

**Limitaciones de uso:** El uso de comandos de voz se limita con el navegador _Google Chrome_ ya que no tiene la funcionalidad adecuada con otros.



#### 6. Despliegue
Enlace despliegue: https://citibanamex-50871.web.app/
