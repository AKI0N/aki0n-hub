# 🔩 Materiales y Componentes

La arquitectura electrónica y mecánica del **Mini Sumo RC Pro** está diseñada bajo un enfoque modular de alto rendimiento, permitiendo equilibrar velocidad de reacción, torque de empuje y centro de gravedad bajo dentro del límite reglamentario de **500 g** y **10×10 cm**.

## ⚙️ Tren Motriz y Tracción

| Módulo | Componente Recomendado | Criterio Técnico de Selección |
| :--- | :--- | :--- |
| **Motores** | Motorreductores **FingerTech Silver Spark** (ej. 33.3:1) o **JSumo** | Relación ajustable según estrategia: mayor reducción para máximo torque de empuje, o menor reducción para desplazamientos rápidos en dohyo. |
| **Rines / Aros** | Aros de aluminio mecanizado (JSumo) | Alta rigidez estructural y fijación mediante prisionero (set screw) al eje tipo D para evitar deslizamientos bajo carga extrema. |
| **Neumáticos** | Llantas de silicona de caucho **Diámetro int. 15 mm / Diámetro ext. 26 mm** | Máximo coeficiente de fricción sobre el dohyo para convertir el torque de los motores en empuje efectivo sin patinar. |

---

## ⚡ Electrónica, Control y Potencia

| Módulo | Componente Recomendado | Criterio Técnico de Selección |
| :--- | :--- | :--- |
| **Control de Motores (Opción 1)** | ESC bidireccionales duales o independientes | **Directo por PWM:** Se conectan directamente a los canales del receptor RC (2.4 GHz) sin requerir programación ni microcontrolador externo. |
| **Control de Motores (Opción 2)** | PCB dedicada con Puente H + Microcontrolador | **Configurable:** Permite programar mezclas de dirección, curvas exponenciales de aceleración y filtros de señal PWM. |
| **Receptor RC** | Receptor inalámbrico 2.4 GHz de baja latencia (ej.FlySky/Radiomaster) | Protocolo de radiocontrol competitivo con respuesta instantánea, inmunidad a interferencias en torneos y tamaño compacto. |
| **Alimentación** | Batería **LiPo 3S (11.1 V)** | Entrega de corriente instantánea en arranques bruscos y picos. |
| **Seguridad y Corte** | Interruptor / Switch | Corte físico total de energía. |

---

## 🛡️ Chasis y Sistema de Ataque

| Módulo | Componente Recomendado | Criterio Técnico de Selección |
| :--- | :--- | :--- |
| **Chasis Principal** | Estructura impresa en 3D (**PLA+** o **PETG** con alto relleno) | Diseño compacto con alojamientos dedicados para motores, batería LiPo, receptor, electrónica y puntos de anclaje metálicos. |
| **Frente / Cuña** | Placa base estructural de aluminio o acero | Aporta rigidez frontal contra impactos directos, baja el centro de gravedad al frente y sirve de soporte plano para la cuchilla. |
| **Cuchilla Frontal** | Cuchilla de acero templado **Kanzawa** | Filo industrial montado al ras del suelo del dohyo para deslizarse por debajo del rival y levantar sus ruedas motrices. |