# Cifrado César
### Por Pamela Zoé.
Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## Características del proyecto
<img align="right" width="380" height="380" src="https://s2.gifyu.com/images/zipher.gif">

**Zipher** esta pensada como una herramienta general para ocultar texto inteligible de manera práctica donde **el usuario es el que da el propósito al resultado**, ya sea para fines de entretenimiento,
cifrado de media seguridad, entre otros. 

Sus funciones son:  
* Codificar: letras mayúsculas, minúsculas,
números y caracteres especiales. 
* Decodificar: letras mayúsculas, minúsculas,
números y caracteres especiales.  
* Editar o agregar texto al mensaje codificado/decodificado: agrega un valor de texto a elección
del usuario.
* Copiar el texto final: se proporciona un botón que permite copiar el resultado en un solo click.

El diseño es **simple**, **cómodo** a la vista y con todas las funciones a la mano pensando en el usuario
que busca una experiencia eficiente y funcional. Puede codificar desde un pequeño acertijo,
hasta un texto completo.  

El uso de la edición de texto resulta útil en el siguiente caso:
> Un usuario puede codificar un acertijo y agregar texto con una pista inteligible para que otros
> puedan adivinar la llave numérica y así decodificar el mensaje.

También cuenta con indicaciones sugeridas
