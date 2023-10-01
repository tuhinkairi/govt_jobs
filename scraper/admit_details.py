import json
import requests as re
from bs4 import BeautifulSoup as bs


def admit(url,id):
 
  html = re.get(url)
  soup = bs(html.content, 'html.parser')
  collection = []
  # first div basic info
  first = soup.find(class_ = 'fl-col-group fl-node-61b98d1f78718')
  
  title = first.find(class_='fl-heading-text').text
  paragraph = first.find(class_ = 'fl-html').find('p').text
  # first_table
  table = first.find(class_ = 'mainbox')
  
  try:
    col_heading1 = table.find(class_ = 'mainboxitem1').find('strong').text.replace('\n','')
  except:
    col_heading1 = ''
  try:
    col_heading2 = table.find(class_ = 'mainboxitem2').find('strong').text.replace('\n','')
  except:
    col_heading2 = ''
  try:
    col_heading3 = table.find(class_ = 'mainboxitem3').find('strong').text.replace('\n','')
  except:
    col_heading3 = ''
  try:
    col_heading4 = table.find(class_ = 'mainboxitem4').find('strong').text.replace('\n','')
  except:
    col_heading4 = ''

  try:
    col_heading6 = table.find(class_ = 'mainboxitem6').find('strong').text.replace('\n','')
  except:
    col_heading6 = ''
  
  try:  
    col_heading7 = table.find(class_ = 'mainboxitem7').find('strong').text.replace('\n','')
  except:
    col_heading7 = ''
    
  try:
    col_heading8 = table.find(class_ = 'mainboxitem8').find('strong').text.replace('\n','')
  except:
    col_heading8 = ''
  
  try:
    col1 = table.find(class_ = 'mainboxitem1').text.replace(col_heading1,'')
  except:
    col1 = ''
  try:
    col2 = table.find(class_ = 'mainboxitem2').text.replace(col_heading2,'')
  except:
    col2 = ''
  try:
    col3 = table.find(class_ = 'mainboxitem3').text.replace(col_heading3,'')
  except:
    col3 = ''
  try:
    col4 = table.find(class_ = 'mainboxitem4').text.replace(col_heading4,'')
  except:
    col4 = ''
  
  try:
     col6 = table.find(class_ = 'mainboxitem6').text.replace(col_heading6,'')
  except:
    col6 = ''
    
  try: 
    col7 = table.find(class_ = 'mainboxitem7').text.replace(col_heading7,'')
  except:
    col7 = ''
  try:
    col8 = table.find(class_ = 'mainboxitem8').text.replace(col_heading8,'')
  except:
    col8 = ''

  
  collector = [[col_heading1,col1],[col_heading2,col2],[col_heading3,col3],[col_heading4,col4],[col_heading6,col6],[col_heading7,col7],[col_heading8,col8]]
  
  data = {}
  data['paragraph'] = paragraph
  data['data'] = collector
  collection.append(data)


  # 2nd div
  second = soup.find(class_ = 'fl-col-group fl-node-61b98d1f7871b fl-col-group-equal-height fl-col-group-align-top')
  summary = second.find(class_ = 'fl-html')
  paragraph = summary.find('p').text
  data = [i.text for i in summary.find_all('li')]

  dictionary = {}
  dictionary['paragraph'] = paragraph
  dictionary['data'] =data
  collection.append(dictionary)
  return {'id':id, 'title':title, 'data':collection}
    
    

