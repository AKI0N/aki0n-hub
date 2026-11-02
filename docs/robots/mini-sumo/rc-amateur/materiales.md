# 🔩 Materiales y Componentes

Para armar el **Mini Sumo RC Amateur**, se seleccionaron componentes económicos, accesibles y estandarizados que garantizan buen torque y facilidad de reemplazo en caso de impacto.


# Materiales y Componentes

La arquitectura electrónica y mecánica del robot está pensada para ser accesible, modular y económica, permitiendo al competidor elegir entre un montaje directo con ESC o una placa de control integrada según sus herramientas y mando disponible:

| Módulo | Tipo de Componente | Criterio de Selección / Recomendación |
| :--- | :--- | :--- |
| **Tracción** | Motorreductores DC tipo TT (amarillos / azules de 1 eje) | Motores estándar y accesibles. El modelo de un solo eje para no sobrepasar los 10 cm reglamentarios. |
| **Aros / Rines** | Rines impresos en 3D | Modelados a la medida del eje del motor para asegurar concentricidad, fijación firme y ligereza. |
| **Neumáticos** | Gomas de silicona / caucho (Radio int. 18 mm / ext. 27 mm) | Máxima fricción y agarre sobre el dohyo para transformar el torque de los motores en empuje efectivo sin derrapar. |
| **Control de Motores (Opción 1)** | ESC bidireccional dual o independientes | **Rápido y directo:** Conexión directa por señal PWM hacia un receptor de radio tradicional sin necesidad de programar microcontrolador. |
| **Control de Motores (Opción 2)** | Placa de desarrollo / PCB dedicada (Driver + Microcontrolador) | **Avanzado y configurable:** Integra puente H (ej. TB6612FNG) y microcontrolador para mapear curvas de aceleración, mezclas de canales o gestionar comunicación inalámbrica. |
| **Electrónica de Control** | Receptor RC 2.4 GHz o Receptor/Módulo Bluetooth | Protocolo tradicional de radiofrecuencia para radiocontrolador, o módulo Bluetooth vinculado a mandos comerciales. *(Nota: El uso de mando de PlayStation o Xbox requiere obligatoriamente una placa dedicada con microcontrolador para decodificar la señal).* |
| **Potencia** | Batería LiPo 2S (7.4V) o 3S (11.1V) | Entrega de corriente instantánea y bajo peso, asegurando respuesta rápida de los motores bajo carga de empuje. |
| **Estructura** | Chasis principal en impresión 3D | Fabricado en PLA+ , diseñado con alojamientos específicos para batería, electrónica y anclajes mecánicos. |
| **Frente Estructural** | Frente / Cuña metálica | Placa de aluminio o acero fijada al chasis. Proporciona rigidez estructural en la zona de choque y sirve de base sólida para la cuchilla. |
| **Ataque Frontal** | Cuchilla de acero Kanzawa | Cuchilla de corte industrial montada sobre el frente metálico. Su filo templado a ras del dohyo es el estándar de combate para meterse debajo del contrincante y desestabilizar su tracción. |