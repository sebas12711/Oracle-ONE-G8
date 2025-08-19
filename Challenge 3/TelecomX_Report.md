# Telecom X — Challenge Parte 2 (Notebook independiente)

## 1) Datos y preparación
- Fuente: JSON crudo `/content/TelecomX_Data.json` (flatten + normalización).
- Observaciones: **7,267**, columnas: **21**.
- Limpieza: imputación (mediana/moda), binarios a 0/1, chequeo de cobros.

## 2) Correlaciones iniciales
- Top correlaciones numéricas (punto-biserial):
| feature                |   point_biserial_corr |
|:-----------------------|----------------------:|
| customer_tenure        |             -0.344079 |
| Charges_Total          |             -0.194016 |
| Charges_Monthly        |              0.189866 |
| customer_SeniorCitizen |              0.146733 |

- Top asociaciones categóricas (Cramér’s V):
| feature                   |   cramers_v |
|:--------------------------|------------:|
| account_Contract          |    0.282986 |
| internet_OnlineSecurity   |    0.240453 |
| internet_TechSupport      |    0.237374 |
| internet_InternetService  |    0.222728 |
| internet_OnlineBackup     |    0.202672 |
| internet_DeviceProtection |    0.194721 |
| account_PaperlessBilling  |    0.186309 |
| account_PaymentMethod     |    0.17053  |
| customer_Dependents       |    0.160968 |
| internet_StreamingMovies  |    0.160141 |

## 3) Modelado y evaluación
- Seleccionado por PR-AUC (CV): **LogReg**
- ROC-AUC (test): **0.844** | PR-AUC (test): **0.628**
- Umbral óptimo por F1: **0.548**

### Reporte (umbral 0.5)
|              |   precision |   recall |   f1-score |   support |
|:-------------|------------:|---------:|-----------:|----------:|
| 0            |       0.916 |    0.718 |      0.805 |  1350     |
| 1            |       0.498 |    0.809 |      0.617 |   467     |
| accuracy     |       0.741 |    0.741 |      0.741 |     0.741 |
| macro avg    |       0.707 |    0.764 |      0.711 |  1817     |
| weighted avg |       0.808 |    0.741 |      0.756 |  1817     |

### Reporte (umbral óptimo)
|              |   precision |   recall |   f1-score |   support |
|:-------------|------------:|---------:|-----------:|----------:|
| 0            |       0.908 |    0.759 |      0.827 |  1350     |
| 1            |       0.528 |    0.777 |      0.629 |   467     |
| accuracy     |       0.764 |    0.764 |      0.764 |     0.764 |
| macro avg    |       0.718 |    0.768 |      0.728 |  1817     |
| weighted avg |       0.81  |    0.764 |      0.776 |  1817     |

## 4) Importancia de variables
- Coeficientes LogReg (orientan dirección/fuerza):
| feature                                |     coef |
|:---------------------------------------|---------:|
| internet_InternetService_Fiber optic   | 0.693615 |
| Charges_Total                          | 0.601282 |
| account_Contract_Month-to-month        | 0.591061 |
| internet_StreamingTV_Yes               | 0.2584   |
| internet_StreamingMovies_Yes           | 0.257264 |
| account_PaymentMethod_Electronic check | 0.248552 |
| internet_TechSupport_No                | 0.162408 |
| internet_OnlineSecurity_No             | 0.140227 |
| phone_MultipleLines_Yes                | 0.121364 |
| account_PaperlessBilling_Yes           | 0.102705 |

- Importancia por permutación (modelo final):
| feature                              |   importance_mean |   importance_std |
|:-------------------------------------|------------------:|-----------------:|
| customer_tenure                      |        0.259308   |       0.0116204  |
| Charges_Monthly                      |        0.0749657  |       0.0109736  |
| Charges_Total                        |        0.0514435  |       0.0115423  |
| internet_InternetService_Fiber optic |        0.0425114  |       0.0101992  |
| internet_InternetService_DSL         |        0.0248779  |       0.0103351  |
| account_Contract_Month-to-month      |        0.0210013  |       0.00890304 |
| account_Contract_Two year            |        0.0137704  |       0.00718659 |
| phone_MultipleLines_No               |        0.00889883 |       0.00227121 |
| internet_StreamingMovies_Yes         |        0.00735868 |       0.00204743 |
| customer_Partner_Yes                 |        0.00481351 |       0.00203619 |
| phone_MultipleLines_Yes              |        0.00370321 |       0.00231276 |
| account_PaperlessBilling_No          |        0.0033693  |       0.00361259 |
| customer_Dependents_Yes              |        0.0029846  |       0.00180122 |
| internet_StreamingTV_Yes             |        0.00278458 |       0.00288917 |
| internet_TechSupport_No              |        0.00253354 |       0.00313326 |

## 5) Conclusión estratégica
- Priorizar retención en segmentos de alto riesgo (contratos mes-a-mes, baja antigüedad, etc.).
- Evaluar incentivos a contratos largos, mejoras de soporte y bundles de seguridad.
- Ajustar el umbral de decisión según objetivos de negocio (max recall vs. costo).