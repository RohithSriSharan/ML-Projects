# Heart Disease Prediction using Logistic Regression & Random Forest

This project applies machine learning models to predict the likelihood of heart disease based on patient health and lifestyle attributes. It includes preprocessing, exploratory data analysis, and evaluation of multiple classification algorithms under class imbalance conditions.

## 📊 Dataset Overview

- **Total Records:** 319,795
- **Target Variable:** `HeartDisease` (`Yes` / `No`)
- **Class Imbalance:**
  - **No Heart Disease:** ~290,000
  - **Yes Heart Disease:** ~28,000 (~9%)
- **Features:** 17 predictors including:
  - Numerical: `BMI`, `PhysicalHealth`, `MentalHealth`, `SleepTime`
  - Categorical: `Smoking`, `AlcoholDrinking`, `Stroke`, `DiffWalking`, `Sex`, `AgeCategory`, `Race`, `Diabetic`, `PhysicalActivity`, `GenHealth`, `Asthma`, `KidneyDisease`, `SkinCancer`

---

## 🔍 Exploratory Data Analysis

### Categorical Features vs Heart Disease
- Strong associations observed with: `Stroke`, `DiffWalking`, `GenHealth`, `KidneyDisease`
- Heart disease prevalence increases significantly with age (especially `80 or older`)
- Males and Diabetic individuals also show higher rates

### Numerical Features vs Heart Disease
- **BMI:** Slightly higher in heart disease patients
- **PhysicalHealth & MentalHealth:** Strong right skew, worse in heart disease group
- **SleepTime:** Slight variation, generally normal (6–9 hrs)

### Univariate Distribution
- All numeric features visualized using histograms + KDE
- No major preprocessing needed, aside from scaling

---

## 🧪 Preprocessing Steps

- **Target Encoding:** `Yes` = 1, `No` = 0
- **One-Hot Encoding:** For all categorical variables
- **Scaling:** `StandardScaler` applied to numerical features
- **Class Imbalance Handling:**
  - Logistic Regression: `class_weight='balanced'`
  - Random Forest: Tested with and without **SMOTE**

---

## 🧠 Models Trained & Evaluated

| Metric                     | Logistic Regression<br>(Balanced) | Random Forest | Random Forest + SMOTE |
|----------------------------|----------------------------------|----------------|------------------------|
| **Accuracy**               | 74.89%                           | 90.15%         | 88.13%                 |
| **Precision (Class 1)**    | 0.22                             | 0.30           | 0.27                   |
| **Recall (Class 1)**       | **0.77 ✅**                      | 0.11           | 0.22                   |
| **F1-Score (Class 1)**     | **0.35 ✅**                      | 0.16           | 0.24                   |
| **False Negatives**        | **1,233 ✅**                     | 4,857          | 4,276                  |
| **True Positives**         | 4,242                            | 618            | 1,199                  |

---

## 📌 Conclusion

- **Best Model for Recall / Sensitivity:**  
  ✔️ Logistic Regression (`class_weight='balanced'`)  
  Ideal for **healthcare scenarios** where detecting heart disease is critical.

- **Best Model for Overall Accuracy:**  
  ⚠️ Random Forest  
  High accuracy but **misses too many positive cases** (low recall).

---



