# Informe final — Churn Telecom X

## Resumen de calidad de datos
- Registros: **7,267**
- Columnas: **19**
- Celdas NA: **0**
- Duplicados: **0**

## Target y métrica base
- Target: `Churn`
- **Tasa global de churn**: **0.257**

## Principales segmentos categóricos (lift > 1)
- **account_PaymentMethod = Electronic check** → churn **0.438** (lift **1.70**, n=2445). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.
- **account_Contract = Month-to-month** → churn **0.413** (lift **1.61**, n=4005). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.
- **internet_InternetService = Fiber optic** → churn **0.406** (lift **1.58**, n=3198). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.
- **internet_OnlineSecurity = No** → churn **0.405** (lift **1.57**, n=3608). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.
- **internet_TechSupport = No** → churn **0.404** (lift **1.57**, n=3582). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.
- **internet_OnlineBackup = No** → churn **0.387** (lift **1.51**, n=3182). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.
- **internet_DeviceProtection = No** → churn **0.379** (lift **1.47**, n=3195). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.
- **internet_StreamingMovies = No** → churn **0.327** (lift **1.27**, n=2870). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.
- **internet_StreamingTV = No** → churn **0.325** (lift **1.26**, n=2896). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.
- **account_PaperlessBilling = Yes** → churn **0.325** (lift **1.26**, n=4311). Posible explicación: Segmento con propensión superior al promedio; revisar precios/soporte.

## Principales rangos numéricos (lift > 1)
- **customer_tenure en (-0.001, 6.0]** → churn **0.510** (lift **1.98**, n=1536).
- **customer_tenure en (6.0, 20.0]** → churn **0.325** (lift **1.27**, n=1435).

## Conclusiones y recomendaciones
- Los segmentos con *lift* > 1 muestran **mayor propensión** a darse de baja; se recomiendan acciones de retención focalizadas.
- Validar estas señales con **modelos multivariados** (p. ej., regresión logística) para descartar variables de confusión.
- Revisar **política de precios**, **calidad de soporte** y **beneficios de contratos largos** si emergen como drivers.

## Notas técnicas
- Limpieza: imputaciones simples (mediana/moda), normalización de binarios, chequeo de consistencia de cobros.
- EDA: análisis **univariado** de *lifts*; no implica causalidad.