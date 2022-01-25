# Squad Craft Coders - Citibanamex

<section> <img src="https://user-images.githubusercontent.com/7150868/150906181-39b08936-1c84-4c3d-8739-147e74e8193a.png" alt="logo de equipo craft coders" width= 90px height= 90px > 
    <img src="https://user-images.githubusercontent.com/7150868/150906429-bb815142-fffb-43f9-853b-007e07f27e75.png" alt="logo de citibanamex"> 
     <img src="https://user-images.githubusercontent.com/62182593/151021361-f76edd13-6fb1-4f18-9c79-dd35faedfd8f.png" alt="logo universal de la discapacidad" width= 90px height= 90px > 
</section>


## **RETO 2022: “Inclusión digital para personas con discapacidad visual:** transacciones entre cuentas de Citibanamex”

### Indice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de Usuarios](#3-historias-de-usuario)
* [4. Prototipos](#4-prototipos)
* [5. Especificaciones de uso](#5-especificaciones-de-uso)
* [6. Despliegue](#6-despliegue)

#### 1. Preámbulo

Con el objetivo de buscar la inclusividad y la accesibilidad digital se planteó un reto donde todos los clientes de _Citibanamex_ se sientan cómodos al usar la interfaz del banco y tengan una buena experiencia al realizar algo tan sencillo y cotidiano como una transferencia. En específico, se llevó a cabo una solución adaptada para personas que presenten discapacidad visual o baja visión.

En la actualidad, no muchas aplicaciones presentan las normas adecuadas para que sean accesibles para usuarios con necesidades adicionales a la media, ya que aproximadamente el 47% de las apps no presentan pautas establecidas en cuanto a inclusividad. 

#### 2. Resumen del Proyecto
Se realizó investigación en diversos recursos con el fin de crear un ejercicio de empatía hacia los posibles usuarios de nuestra aplicación con el fin de mejorar su experiencia de usuario. Uno de los principales puntos a considerar fue el espectro que abarca la discapacidad visual, ya que esta no necesariamente es únicamente la pérdida total de la visión, sino que puede ser condiciones tales como el daltonismo, debilidad visual, dislexia, etc.

De manera que al tener que abarcar todo un espectro la solución a nuestro reto también debía ser diversa; para dar con una solución adecuada buscamos integrar cada solución individual a cada limitación que pudieran tener nuestros usuarios. De modo que seleccionamos diversas paletas de color que favorezcan a usuarios que tengan dificultades para diferenciar colores, así como para los usuarios que tengan alguna debilidad visual. Otra funcionalidad que se implementó fue el poder cambiar el tamaño de la fuente en la aplicación, esto para los usuarios que les facilite la lectura de esta forma. 

En cuanto a nuestros usuarios con limitación total de la vista se incorporó el uso de comandos de voz para que puedan acceder a la sección de transferencias únicamente hablando y así facilitarles lo mejor posible esta función tan esencial. Igualmente se implementó de etiquetas semánticas en todo nuestro código para facilitarles el lector de pantallas por medio del navegador.

Para comprobar que se estaba llevando a cabo de manera idónea la accesibilidad en la aplicación se realizaron pruebas de usabilidad con usuarios que presentaran distintos tipos de limitaciones visuales, de esta manera se logró conocer si se les estaba otorgando una herramienta útil que les facilitara el hacer transferencias tal y como era el objetivo del reto. Una vez realizadas las pruebas de usabilidad se iteraron los prototipos originales hasta llegar a los finales que se presentan en la sección 4. 

#### 3. Historias de Usuario

Se trabajó a través de historias de usuario para manejar la funcionalidad del proyecto, las cuales fueron proporcionadas por el equipo de _Citibanamex_ y fueron las siguientes:

- Yo como cliente con discapacidad visual, quiero dar de alta una cuenta para transferirle dinero desde mis cuentas.
  - DoD: Contiene tipo de cuenta, número de cuenta, nombre de titular y monto máximo a transferir.
- Yo como cliente con discapacidad visual, quiero validar si tengo suficiente dinero en mi cuenta para saber si puedo mandar dinero a otra cuenta.
- Yo como cliente con discapacidad visual, quiero mandar dinero desde mis cuentas a otra cuenta para transferir dinero a otra persona.
- Yo como cliente con discapacidad visual, quiero confirmar que los datos sean correctos antes de realizar la transacción para confirmar que haya capturado bien los datos de la transacción. 
  - DoD: Validación de fondos suficientes de cuenta origen. Disminución de balance en cuenta origen y aumento de balance en cuenta destino.
- Yo como cliente con discapacidad visual, quiero un comprobante de transacción exitosa para tener como evidencia que se realizó la transacción.
  - DoD: Datos en comprobante Monto, número de cuenta origen, estatus de transacción (exitosa o rechazada), fecha, hora y número de autorización 

#### 4. Prototipos

Propuesta de diseño predeterminado.

<img src="https://user-images.githubusercontent.com/7150868/150905939-d4ab43c3-dfbc-4f7b-974a-e4683c983afd.png" alt="logo de citibanamex">

Propuesta de diseño en escala de grises.

<img src="https://user-images.githubusercontent.com/7150868/150905933-0f928ebc-16a1-4878-879b-ece363fd1c7d.png" alt="logo de citibanamex">

Propuesta de diseño en modo oscuro.

<img src="https://user-images.githubusercontent.com/7150868/150905937-6072aa98-73b9-43b6-aca4-45895faddcf5.png" alt="logo de citibanamex">

#### 5. Especificaciones de uso

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
