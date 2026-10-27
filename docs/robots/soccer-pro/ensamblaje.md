En esta sección se detalla el proceso de integración mecánica de los motores y el diagrama de conexión electrónica para el funcionamiento del robot.

### 1. Ensamblaje Mecánico

*  **Montaje de Motores:** Desliza los motorreductores dentro de sus soportes correspondientes en el chasis 3D.
*  **Fijación:** 
    En la parte posterior del chasis se incluyen perforaciones específicas para instalar **tornillos prisioneros**, lo que permite asegurar los motores a presión de forma firme y desmontable.
   * Alternativamente, si no dispones de prisioneros, puedes fijarlos aplicando una pequeña cantidad de **cianoacrilato** (pegamento instantáneo) en el área de contacto para evitar cualquier desplazamiento por vibración o impacto en pista.

---

### 2. Conexiones Electrónicas

El cableado principal se centraliza a través del controlador de velocidad (ESC):

* **Motores al ESC:** Conecta las salidas de potencia del ESC hacia los terminales de cada motor. *(si el sentido de giro de una rueda es inverso al deseado, basta con invertir la polaridad de sus dos cables).*
* **Alimentación (LiPo 3S) al ESC:** Los cables de alimentación principal del ESC van conectados directamente a la batería LiPo de 3S (respetando positivo y negativo).
* **ESC al Receptor RC:** Conecta los conectores de señal (cable tipo servo) del ESC a los canales correspondientes del receptor inalámbrico (habitualmente CH1 y CH2 para dirección y aceleración).