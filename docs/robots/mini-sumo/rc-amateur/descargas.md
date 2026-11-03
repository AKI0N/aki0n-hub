## 📐 Cotas y Dimensiones de Diseño (CAD)

El chasis ha sido dimensionado en SolidWorks respetando rigurosamente el reglamento oficial de Mini Sumo (**máximo 100 mm × 100 mm** en la base), dejando una tolerancia deliberada para la fijación del frente metálico y la cuchilla Kanzawa sin riesgo de descalificación en pesaje/homologación:
## 📐 Dimensiones y Geometría del Diseño

El robot ha sido dimensionado estrictamente bajo el reglamento oficial de Mini Sumo (**máximo 100 × 100 mm de base**, sin límite de altura)[cite: 13]. Las cotas del chasis dejan la tolerancia exacta para incorporar el frente metálico y la cuchilla Kanzawa sin superar las medidas de homologación[cite: 13, 14, 15]:

| Dimensión | Medida en CAD | Medida Final con Cuchilla | Margen Reglamentario (< 100 mm) |
| :--- | :---: | :---: | :---: |
| **Largo total ($X$)** | **90.37 mm** (chasis base)[cite: 13] | **~94.0 mm – 96.0 mm** (con cuchilla montada) | Margen seguro de 4 a 6 mm[cite: 13] |
| **Ancho frontal ($Y$)** | **98.00 mm** (filo de pala)[cite: 15] | **98.00 mm** | Margen de 2 mm de tolerancia total[cite: 15] |
| **Alto del chasis ($Z$)** | **32.50 mm** (bahía interna) / **47.46 mm** (frente)[cite: 14, 16] | Variable según la altura de los motores TT[cite: 16] | Sin límite reglamentario de altura[cite: 13] |

---

### 🛞 Especificaciones Técnicas de Rines y Tracción

Los rines impresos en 3D están optimizados para los motores TT de 1 eje e integran pestañas de retención para evitar que los neumáticos se deslicen lateralmente bajo torsión:

* **Diámetro del cuerpo del rin:** $\varnothing 20.0\text{ mm}$ (zona de asiento del neumático).
* **Ancho de tracción (extrusión del cuerpo):** $22.0\text{ mm}$.
* **Pestaña limitadora de retención:** $\varnothing 24.0\text{ mm}$ (borde exterior sobredimensionado).
* **Espesor de la pestaña limitadora:** $1.5\text{ mm}$ de extrusión lateral para asegurar la goma de silicona.
* **Neumáticos compatibles recomendados:** Gomas de silicona/caucho con radio interno de $18\text{ mm}$ y radio externo de $27\text{ mm}$[cite: 14].

---

## ✂️ Especificaciones de Corte Metálico (`.dxf`)

Para el frente de choque:

* **Material recomendado:** Placa de acero inoxidable
* **Espesor sugerido:** 0.4 mm.

## ⚙️ Parámetros Recomendados de Impresión 3D


| Parámetro | Chasis Principal 
| :--- | :--- 
| **Material sugerido** | PLA+ / PETG / ABS 
| **Densidad de relleno** | **30% a 40%
| **Patrón de relleno** | Giroide o Rejilla 
| **Soportes** | Si es que es necesario