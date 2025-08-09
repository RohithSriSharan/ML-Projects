# Heart Disease Prediction using Machine Learning

##  Problem Statement

This project aims to develop a classification model to **predict the likelihood of heart disease** in individuals based on their health, demographic, and lifestyle attributes. The dataset presents a significant class imbalance, which poses challenges in accurately identifying positive (disease) cases. The goal is to assist healthcare providers by flagging high-risk individuals, enabling early screening and preventive care.

---

##  Dataset Overview

- **Total Records:** 319,795
- **Target Variable:** `HeartDisease` (`Yes` / `No`)
- **Imbalance Ratio:**
  - **No:** ~290,000 (~91%)
  - **Yes:** ~28,000 (~9%)
- **Features:**
  - **Numerical:** `BMI`, `PhysicalHealth`, `MentalHealth`, `SleepTime`
  - **Categorical:** `Smoking`, `AlcoholDrinking`, `Stroke`, `DiffWalking`, `Sex`, `AgeCategory`, `Race`, `Diabetic`, `PhysicalActivity`, `GenHealth`, `Asthma`, `KidneyDisease`, `SkinCancer`

---

##  Exploratory Data Analysis (EDA)

### Categorical Features vs Heart Disease
- Higher prevalence observed in:
  - Individuals with `Stroke`, `DiffWalking`, `KidneyDisease`, or poor `GenHealth`
  - Older age groups (`50+`, especially `80 or older`)
  - `Diabetic` patients and `Male` individuals

### Numerical Features vs Heart Disease
- **BMI**: Slight increase among patients with heart disease
- **Physical & Mental Health**: More unhealthy days reported by heart disease patients
- **SleepTime**: Slight difference; most people sleep between 6–9 hours

### Univariate Distributions
- Used histograms with KDE plots
- All numeric features are right-skewed
- No major preprocessing or transformation needed

---

##  Preprocessing

- **Target Encoding:** Converted `HeartDisease` into binary (1 = Yes, 0 = No)
- **Categorical Encoding:** Used `OneHotEncoder` with `drop='first'` and `handle_unknown='ignore'`
- **Feature Scaling:** Applied `StandardScaler` to numeric columns
- **Class Imbalance Handling:**
  - `class_weight='balanced'` in Logistic Regression
  - `SMOTE` applied before tree-based classifiers

---

##  Models Evaluated

| Metric                     | Logistic Regression (Balanced) | Random Forest        | Random Forest + SMOTE   |
|----------------------------|-------------------------------|----------------------|--------------------------|
| **Accuracy**               | 74.89%                        | 90.15%               | 88.13%                   |
| **Precision (Class 1)**    | 0.22                          | 0.30                 | 0.27                     |
| **Recall (Class 1)**       | **0.77** ✅                    | 0.11                 | 0.22                     |
| **F1-Score (Class 1)**     | **0.35** ✅                    | 0.16                 | 0.24                     |
| **False Negatives**        | **1,233** ✅                   | 4,857                | 4,276                    |
| **True Positives**         | 4,242                         | 618                  | 1,199                    |

---

##  Model Selection & Conclusion

- **Best Model for Medical Use Case (Recall Priority):**
  - **Logistic Regression with Class Weights**
    - Best in capturing actual heart disease cases (highest recall)
    - Balanced performance on minority class

- **Best for Overall Accuracy:**
  - **Random Forest**
    - High accuracy but poor recall on positive class
    - Risky for applications where false negatives are critical

> For real-world applications in **healthcare**, where missing true cases can be costly, the logistic regression model with class weights is the most reliable option.

---



