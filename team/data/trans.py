import pandas as pd
import json
#学术json文件
aca_data = pd.read_excel('academic.xlsx')
aca_data = aca_data.dropna()
aca_data_json = aca_data.to_json(orient='records')
#博士json文件
boshi_data = pd.read_excel('博士.xlsx')
boshi_data = boshi_data.dropna()
boshi_data_json = boshi_data.to_json(orient='records')
#硕士json文件
shuoshi_data = pd.read_excel('硕士.xlsx')
shuoshi_data = shuoshi_data.dropna()
shuoshi_data_json = shuoshi_data.to_json(orient='records')
#毕业生json文件
biye_data = pd.read_excel('毕业生.xlsx')
biye_data = biye_data.dropna()
biye_data_json = biye_data.to_json(orient='records')
#荣誉json文件
rongyu_data = pd.read_excel('荣誉.xlsx')
rongyu_data = rongyu_data.dropna()
rongyu_data_json = aca_data.to_json(orient='records')

with open('academic.json', 'w') as file:
    file.write(aca_data_json)
with open('boshi.json', 'w') as file:
    file.write(boshi_data_json)
with open('shuoshi.json', 'w') as file:
    file.write(shuoshi_data_json)
with open('biye_data_json.json', 'w') as file:
    file.write(aca_data_json)
with open('rongyu.json', 'w') as file:
    file.write(rongyu_data_json)