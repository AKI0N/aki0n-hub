# 🛠️ Ensamblaje y Conexiones Eléctricas

El ensamblaje del **Mini Sumo RC Amateur** combina un montaje mecánico directo en el chasis 3D, fijación de frentes de choque y cableado de control mediante ESC.
---
## 🔩 Paso 1: Montaje Mecánico de Tracción

El chasis cuenta con orificios pasantes específicos para fijar los dos motorreductores tipo TT (1 eje):

1. **Colocación de Motores:** Desliza cada motorreductor en su respectivo alojamiento lateral asegurando que los ejes queden alineados hacia afuera.
2. **Fijación Contrapuesta con Tornillos M3:**
    * Pasa un tornillo M3 largo (5o 5.5mm) a través del orificio del motor en un sentido y coloca su tuerca en el extremo opuesto sin apretar al máximo.
    * Pasa el segundo tornillo M3  en sentido contrario (de adentro hacia afuera o viceversa según el orificio) y coloca su tuerca.
    * Ajusta ambos tornillos de forma uniforme para mantener el motor firme y sin holgura angular.
3. **Rines y Neumáticos:**
    * Monta los rines 3D a presión en cada motor TT.
    * Coloca las gomas de silicona/caucho sobre los rines verificando que asienten completamente.

---

## ⚡ Paso 2: Cableado y Circuito de Potencia

Para alimentar el sistema de forma segura y facilitar la recarga, se utiliza un conector o cable adaptador compatible con tu batería LiPo (por ejemplo, conector JST, XT30 o T-Plug):

1. **Soldadura del Conector de Batería y Switch:**
    * **Línea Positiva (Rojo):** Suelda el cable rojo (+) del conector de la batería a uno de los terminales del **switch**. Desde el otro terminal del switch, suelda un cable que vaya directo a la entrada positiva (`V+` / cable rojo) del **ESC**. De esta forma, el interruptor corta la alimentación total del robot.
    * **Línea Negativa (Negro / GND):** Suelda el cable negro (-) del conector de la batería directamente a la entrada negativa (`GND` / cable negro) del **ESC**.
    * **Aislamiento:** Coloca tubo termorretráctil (espagueti térmico) en cada punto soldado del switch y del conector para evitar cortocircuitos dentro del habitáculo.

2. **Motores al ESC:**
    * Suelda las salidas de motor del ESC (Canal A y Canal B) a los terminales de los dos motores TT.
    

3. **Conexión al Receptor RC:**
    * Conecta los cables tipo servo de tres hilos provenientes del ESC a los canales de aceleración y dirección (habitualmente Ch1 y Ch2) de tu receptor de radio 2.4 GHz.
    *Tip de prueba:* Si al encender y accionar el control un motor gira al revés, intercambia los dos cables de ese motor para invertir el sentido de giro o invierte los canales en el radiocontrol.
4. **Alojamiento Interno:**
    * Monta el switch en su ranura exterior del chasis.
    * Acomoda el ESC, el receptor y el conector de batería en el compartimento central, asegurando los componentes con cinta doble faz o bridas plásticas.
---

## 🛡️ Paso 3: Frente Metálico y Cuchilla Kanzawa


El sistema de choque y ataque se compone de una base rígida delantera y la cuchilla afilada de combate:

1. **Preparación y Corte del Frente Estructural:**
    * **Archivo DXF (Recomendado):** En la sección de descargas se incluye el archivo en formato `.dxf` para enviar a corte láser, CNC o realizar el corte manual sobre una chapa metálica de aluminio o acero.
    * **Archivo STL (Prototipado / Molde):** También se incluye el modelo en formato `.stl` por si deseas imprimirlo en 3D previamente y usarlo como plantilla de prueba, verificar el ajuste en el chasis o utilizarlo como molde antes de cortar la lámina definitiva.

2. **Fijación del Frente Estructural al Chasis:**
    * Coloca la cuña metálica sobre la cara inclinada frontal del chasis impreso.
    * Asegúrala firmemente usando **cinta doble faz de alta adherencia** (tipo Scotch Mount o automotriz) o con unas gotas de pegamento de cianoacrilato. Presiona durante 15 a 30 segundos asegurando que asiente sin desalineaciones.

3. **Montaje de la Cuchilla Kanzawa:**
    * Aplica una tira de cinta doble contacto sobre la base inferior del frente metálico.
    * Adhiere la cuchilla de acero Kanzawa con el filo orientado hacia adelante y paralelo a la superficie, cuidando que roce suavemente el dohyo sin trabar el avance de las ruedas.
     **Tip:** Coloca el robot armado sobre una superficie de **vidrio completamente plana**. y observa a contraluz:
> * **Verificación:*No debe filtrarse **ninguna línea de luz** entre el filo de la cuchilla y el vidrio. Si entra luz por algún punto, presiona o ajusta la inclinación hasta que toda     la longitud de la cuchilla asiente de forma continua sin levantar las ruedas del piso.
---

## ⚖️ Recomendación: Ajuste de Peso y Lastre

El límite máximo reglamentario de la categoría es de **500 gramos**. Para maximizar el empuje y tracción sobre el dohyo, es clave acercarse lo más posible a este límite:

* **Plomos de balanceo adhesivos:** Utiliza contrapesos metálicos de balanceo de ruedas (plomos de taller). **Envuélvelos previamente con cinta aislante** para proteger la electrónica de contactos conductores y fíjalos con cinta doble faz en el fondo del habitáculo.
* **Plastilina escolar:** Si necesitas ajustes milimétricos en báscula, puedes rellenar huecos libres interiores con plastilina densa para alcanzar entre **480 g y 495 g**.
* **Distribución de masa:** Procura colocar la mayor cantidad de contrapeso adelantado y lo más bajo posible para mantener la cuchilla clavada al suelo durante los choques.