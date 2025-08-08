# Heart Disease Prediction using Logistic Regression & Random Forest

This project applies machine learning models to predict the likelihood of heart disease based on patient health and lifestyle attributes. It includes preprocessing, exploratory data analysis, and evaluation of multiple classification algorithms under class imbalance conditions.

##  Dataset Overview

- **Total Records:** 319,795
- **Target Variable:** `HeartDisease` (`Yes` / `No`)
- **Class Imbalance:**
  - **No Heart Disease:** ~290,000
  - **Yes Heart Disease:** ~28,000 (~9%)
- **Features:** 17 predictors including:
  - Numerical: `BMI`, `PhysicalHealth`, `MentalHealth`, `SleepTime`
  - Categorical: `Smoking`, `AlcoholDrinking`, `Stroke`, `DiffWalking`, `Sex`, `AgeCategory`, `Race`, `Diabetic`, `PhysicalActivity`, `GenHealth`, `Asthma`, `KidneyDisease`, `SkinCancer`

---

##  Exploratory Data Analysis

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

---# Heart Disease Prediction using Logistic Regression & Random Forest

This project applies machine learning models to predict the likelihood of heart disease based on patient health and lifestyle attributes. It includes preprocessing, exploratory data analysis, and evaluation of multiple classification algorithms under class imbalance conditions.

---

## Problem Statement

Heart disease is a leading cause of mortality globally. Early identification of individuals at risk can lead to timely medical intervention and better health outcomes.  
This project builds predictive models that estimate the likelihood of heart disease using health survey data. The focus is on model performance **under class imbalance**, a common challenge in healthcare datasets.

---

##  Dataset Overview

- **Total Records:** 319,795  
- **Target Variable:** `HeartDisease` (`Yes` / `No`)  
- **Class Imbalance:**
  - **No Heart Disease:** ~290,000
  - **Yes Heart Disease:** ~28,000 (~9%)

- **Features:** 17 predictors including:
  - **Numerical:** `BMI`, `PhysicalHealth`, `MentalHealth`, `SleepTime`
  - **Categorical:** `Smoking`, `AlcoholDrinking`, `Stroke`, `DiffWalking`, `Sex`, `AgeCategory`, `Race`, `Diabetic`, `PhysicalActivity`, `GenHealth`, `Asthma`, `KidneyDisease`, `SkinCancer`

---

##  Feature Descriptions

| Feature           | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| `BMI`            | Body Mass Index                                                             |
| `Smoking`        | Has smoked at least 100 cigarettes                                           |
| `AlcoholDrinking`| Heavy alcohol consumption                                                    |
| `Stroke`         | History of stroke                                                            |
| `PhysicalHealth` | Days of poor physical health in past 30 days                                 |
| `MentalHealth`   | Days of poor mental health in past 30 days                                   |
| `DiffWalking`    | Difficulty walking or climbing stairs                                        |
| `Sex`            | Biological sex                                                              |
| `AgeCategory`    | Age group                                                                   |
| `Race`           | Ethnic group                                                                |
| `Diabetic`       | Diabetes status (Yes/No/While Pregnant)                                     |
| `PhysicalActivity`| Regular physical activity                                                   |
| `GenHealth`      | Self-assessed general health                                                 |
| `SleepTime`      | Average sleep duration per night                                             |
| `Asthma`, `KidneyDisease`, `SkinCancer` | Comorbidities                                        |

---

##  Exploratory Data Analysis

### Categorical Features vs Heart Disease

- Strong associations: `Stroke`, `DiffWalking`, `GenHealth`, `KidneyDisease`
- Higher prevalence among older individuals (`50+`, especially `80 or older`)
- Males and Diabetic individuals have a higher risk

### Numerical Features vs Heart Disease

- **BMI**: Slightly higher in heart disease group
- **PhysicalHealth & MentalHealth**: Skewed right; worse health linked to higher risk
- **SleepTime**: Normal distribution; slight variation between groups

### Univariate Distributions

- Histograms + KDE used to examine skewness and outliers
- No major transformation needed before modeling

---

##  Preprocessing

- **Target Encoding**: `Yes` = 1, `No` = 0  
- **One-Hot Encoding**: Applied to all categorical features  
- **Scaling**: `StandardScaler` used for numerical columns  
- **Handling Class Imbalance**:
  - **Logistic Regression**: Used `class_weight='balanced'`
  - **Random Forest**: Compared baseline and **SMOTE** oversampling

---

##  Model Training & Evaluation

Three models were tested and evaluated on the same test set:

| Metric                     | Logistic Regression<br>(Balanced) | Random Forest | Random Forest + SMOTE |
|----------------------------|----------------------------------|----------------|------------------------|
| **Accuracy**               | 74.89%                           | 90.15%         | 88.13%                 |
| **Precision (Class 1)**    | 0.22                             | 0.30           | 0.27                   |
| **Recall (Class 1)**       | **0.77**                         | 0.11           | 0.22                   |
| **F1-Score (Class 1)**     | **0.35**                         | 0.16           | 0.24                   |
| **False Negatives**        | **1,233**                        | 4,857          | 4,276                  |
| **True Positives**         | 4,242                            | 618            | 1,199                  |

---

##  Conclusion

- **Best for Sensitivity / Healthcare Use Case**  
   Logistic Regression with `class_weight='balanced'`  
  Highest **recall (0.77)** and best balance for detecting heart disease cases

- **Best for Overall Accuracy**  
   Random Forest without SMOTE  
  High accuracy but poor recall — **misses most positive cases**

---

##  Future Improvements

- Hyperparameter tuning (GridSearchCV)
- Cross-validation with stratified sampling
- SHAP / LIME for explainability
- Additional ensemble models (XGBoost, LightGBM)

---

## Project Structure



##  Preprocessing Steps

- **Target Encoding:** `Yes` = 1, `No` = 0
- **One-Hot Encoding:** For all categorical variables
- **Scaling:** `StandardScaler` applied to numerical features
- **Class Imbalance Handling:**
  - Logistic Regression: `class_weight='balanced'`
  - Random Forest: Tested with and without **SMOTE**

---

##  Models Trained & Evaluated

| Metric                     | Logistic Regression<br>(Balanced) | Random Forest | Random Forest + SMOTE |
|----------------------------|----------------------------------|----------------|------------------------|
| **Accuracy**               | 74.89%                           | 90.15%         | 88.13%                 |
| **Precision (Class 1)**    | 0.22                             | 0.30           | 0.27                   |
| **Recall (Class 1)**       | **0.77**                      | 0.11           | 0.22                   |
| **F1-Score (Class 1)**     | **0.35**                      | 0.16           | 0.24                   |
| **False Negatives**        | **1,233**                     | 4,857          | 4,276                  |
| **True Positives**         | 4,242                            | 618            | 1,199                  |

---

### Conclusion

- **Best Model for Recall / Sensitivity:**  
   Logistic Regression (`class_weight='balanced'`)  
  Ideal for **healthcare scenarios** where detecting heart disease is critical.

- **Best Model for Overall Accuracy:**  
   Random Forest  
  High accuracy but **misses too many positive cases** (low recall).

---



