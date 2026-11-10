En esta sección se detalla el proceso de integración mecánica de los motores y el diagrama de conexión electrónica para el funcionamiento del robot.

### 1. Ensamblaje Mecánico

*  **Montaje de Motores:** Desliza los motorreductores dentro de sus soportes correspondientes en el chasis 3D.
*  **Fijación:** 
    En la parte posterior del chasis se incluyen perforaciones específicas para instalar **tornillos prisioneros**, lo que permite asegurar los motores a presión de forma firme y desmontable.
   * Alternativamente, si no dispones de prisioneros, puedes fijarlos aplicando una pequeña cantidad de **cianoacrilato** (pegamento instantáneo) en el área de contacto para evitar cualquier desplazamiento por vibración o impacto en pista.

---

### 2. Conexiones Electrónicas

Sigue este esquema para cablear la alimentación, el receptor y las salidas de potencia hacia los motores:
El cableado principal se centraliza a través del controlador de velocidad (ESC):
<div align="center" style="margin: 1.5rem 0;">
  <img src="../../../assets/images/soccer.png" alt="Esquema de conexiones electrónicas" style="max-height: 480px; width: auto; border-radius: 12px; border: 1px solid rgba(0, 229, 255, 0.25); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6); display: inline-block;">
</div>

 Conecta los conectores de señal (cable tipo servo) del ESC a los canales correspondientes del receptor inalámbrico (habitualmente CH1 y CH2 para dirección y aceleración).