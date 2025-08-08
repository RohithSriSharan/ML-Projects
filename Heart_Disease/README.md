
## 🧠 Problem Statement

Given patient data such as BMI, age, smoking habits, and health indicators, the goal is to build a classifier that predicts whether the person is likely to have heart disease.

## 📊 Dataset Summary

- Features: 17
- Target: `HeartDisease` (Binary: Yes/No)
- Type: Mixed (Numerical + Categorical)
- Imbalance: Yes — `HeartDisease` = 1 is underrepresented

## 🛠️ Techniques Used

- Exploratory Data Analysis (EDA)
- Univariate and Bivariate Analysis
- Handling class imbalance using:
  - `class_weight='balanced'`
  - SMOTE
- Model Building:
  - Logistic Regression
  - Random Forest
  - Decision Tree
- Performance Metrics:
  - Accuracy, Precision, Recall, F1-Score
  - Confusion Matrix

## 📈 Best Performing Model

- **Logistic Regression (`class_weight='balanced'`)**
  - **Recall (positive class)**: `77%`
  - **F1-Score (positive class)**: `0.35`
  - Chosen due to better identification of true heart disease cases.

## 🔍 Key Insights

- Categorical features like `Sex`, `AgeCategory`, and `GenHealth` showed clear patterns with the target.
- Numerical features like `BMI`, `PhysicalHealth`, and `SleepTime` contributed to the model's learning.
- Logistic Regression had lower accuracy than Random Forest, but much higher **recall** for the positive class, which is critical in healthcare.

## 📌 Installation

```bash
pip install pandas numpy matplotlib seaborn scikit-learn imbalanced-learn
