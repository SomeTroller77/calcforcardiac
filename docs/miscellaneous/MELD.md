# Model for End-stage Liver Disease (MELD) score

#### MELD score is a numerical value that is used to predict the 3-month mortality prediction risk of a patient. It is also used to prioritize patients for liver transplantations with higher score indicating a more urgent need.
### Parameters needed
| Parameter | Unit |
| --------- | ---- |
| Serum Bilirubin | mg/dL |
| Serum Creatinine | mg/dL |
| International Normalized Ratio (INR) | - |
### MELD Score interpretation table:-

| Score range | Mortality risk |
| ----------- | -------------- |
| less than 9 | Low risk (under 1.9%) | 
| 10 to 19 | Low to Moderate (6.0% - 19.6%) |
| 20 to 29 | Moderate risk (19.6% - 52.6%) | 
| 30 to 39 | High risk (52.6% - 71.3%) |
| more than 40 | Extremely high risk (71.3% - 100%) |

### Formula to calculate MELD:-
The MELD score is calculated using the following formula:-

$$
\textbf{MELD} = (9.57 \times \ln(\text{Serum Creatinine})) + (3.78 \times \ln(\text{Serum Bilirubin})) + (11.2 \times \ln(\text{INR})) + 6.43
$$

### Notice:-
The MELD score is not considered accurate for advanced liver diseases. Other calulcators like MELD-Na should be used before taking clinical decisions