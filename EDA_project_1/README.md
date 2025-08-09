
# Zomato Bangalore Restaurants – Exploratory Data Analysis

##  Project Overview
This project performs an in-depth **Exploratory Data Analysis (EDA)** on the Zomato Bangalore Restaurants dataset to uncover trends, customer preferences, and factors influencing restaurant ratings, costs, and popularity.  
The goal is to demonstrate a professional, reproducible EDA workflow while generating business insights.

---

##  Dataset
- **Source**: [Zomato Bangalore Restaurants Dataset – Kaggle](https://www.kaggle.com/himanshupoddar/zomato-bangalore-restaurants)
- **Size**: ~547 MB (tracked via [Git LFS](https://git-lfs.com))
- **Format**: CSV
- **Records**: 51,000+
- **Features**: 17 columns (restaurant details, cost, ratings, votes, cuisines, etc.)

### Key Columns
| Column | Description |
|--------|-------------|
| `name` | Name of the restaurant |
| `online_order` | Availability of online ordering |
| `book_table` | Table booking option |
| `rate` | Average customer rating |
| `votes` | Number of customer votes |
| `location` | Restaurant locality |
| `rest_type` | Type of restaurant (e.g., Buffet, Cafe) |
| `cuisines` | Types of cuisines served |
| `cost` | Approximate cost for two |
| `city` | City name |

---

##  EDA Steps
1. **Data Loading & Inspection**
   - Reviewed dataset structure, data types, and missing values
   - Generated initial observations

2. **Data Cleaning**
   - Standardized column names
   - Cleaned ratings (`NEW`, `-`, missing values handled)
   - Converted cost and ratings to numeric
   - Dropped irrelevant features for analysis

3. **Univariate Analysis**
   - Distribution plots for numerical features (rate, cost, votes)
   - Count plots for categorical features (location, cuisines, rest_type)

4. **Bivariate Analysis**
   - Numerical vs Numerical (e.g., `rate` vs `cost`)
   - Numerical vs Categorical (e.g., `rate` by cuisine)
   - Categorical vs Categorical (e.g., `online_order` vs `book_table`)

5. **Hypothesis Generation**
   - Explored how ratings, votes, and cost relate to cuisines, service type, and location

6. **Interesting Visualizations**
   - Top cuisines by votes
   - Online ordering preference by restaurant type
   - Rating vs Cost scatter plot
   - Votes distribution by location

---

##  Key Insights
- Certain cuisines and locations have significantly higher ratings
- Restaurants offering **both online ordering and table booking** tend to have higher customer engagement
- Higher-rated restaurants are not always the most expensive
- Votes are concentrated in a few popular areas, indicating high customer traffic

---

##  Recommendations
- Restaurants in low-rated locations can adopt strategies from high-rated areas (menu design, service improvements)
- Popular cuisines with low cost can be leveraged for promotional campaigns
- Encouraging online ordering and table booking can boost customer engagement
- Target high-vote localities for expansion

---

## ✅ Conclusion
This analysis provides actionable insights into restaurant performance in Bangalore. The patterns found can assist Zomato partners, restaurant owners, and marketers in improving customer satisfaction, increasing footfall, and optimizing pricing strategies.

---

