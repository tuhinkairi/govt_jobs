from flask import Flask, request, render_template, current_app, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
import json
from scraper import govt_job_scraper 
from apscheduler.schedulers.background import BackgroundScheduler



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/govtjobs'
db = SQLAlchemy(app)
scheduler = BackgroundScheduler()

''' ***** initialize the sql table ***** '''

# bsic job data
class basic_info(db.Model):
    sno = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String, nullable = False)
    counter_id = db.Column(db.String, nullable = False)
    genre = db.Column(db.String, nullable = False)
    posts = db.Column(db.Integer, nullable = False)
    post_name = db.Column(db.String, nullable = False)
    qualification = db.Column(db.String, nullable = False)
    date = db.Column(db.String, nullable = False)
    link = db.Column(db.String, nullable = False)

class admit_info(db.Model):
    sno = db.Column(db.Integer, primary_key = True)
    counter_id = db.Column(db.String, nullable = False)
    title = db.Column(db.String, nullable = False)
    data = db.Column(db.JSON, nullable = False)
     
class result_info(db.Model):
    sno = db.Column(db.Integer, primary_key = True)
    counter_id = db.Column(db.String, nullable = False)
    title = db.Column(db.String, nullable = False)
    data = db.Column(db.JSON, nullable = False)
    
class job_details(db.Model):
    sno = db.Column(db.Integer, primary_key = True)
    counter_id = db.Column(db.String, nullable = False)
    overview = db.Column(db.JSON, nullable = False)
    basic_details = db.Column(db.JSON, nullable = False)
    discription = db.Column(db.JSON, nullable = False)
    date = db.Column(db.JSON, nullable = False)
    eligibility = db.Column(db.JSON, nullable = False)
    payment = db.Column(db.JSON, nullable = False)
    links = db.Column(db.JSON, nullable = False)
     
""" ******** supporting functions for datasending oparations ********  """

""" sending page_1 """

# sending detailed information of jobs
 
def send_job_details(job_data):
    ''' this function is a part of pushing data for the details of data'''
    # this returns a list of data
    file = job_data
    
    for i in file:
        counter_id = i['id']
        data_chunk = i['data']
        overview = data_chunk['overview']
        basic = data_chunk['basic']
        discription = data_chunk['discription']
        dates = data_chunk['dates']
        payment = data_chunk['payment']
        eligibility = data_chunk['eligibility']
        links = data_chunk['links']

        entry = job_details(counter_id=counter_id, overview=overview ,basic_details=basic ,discription=discription ,date=dates,eligibility=eligibility ,payment=payment ,links=links)        
        print(counter_id)
        db.session.execute(text('SET @num :=0; UPDATE job_details SET sno = @num:= @num+1; ALTER TABLE job_details AUTO_INCREMENT =1;'))        
        db.session.add(entry)
        db.session.commit()
        print('done')

# sending basic details and detailed details of jobs to database
def send_jobs():

    basic_data,detailed_data = govt_job_scraper.get_job()
    data = basic_data['data']
    print('pushing basic info for jobs')
    for i in data:
        title = i['title']
        for itr, info  in enumerate(i['col_id']):
            counter_id = info
            genre = i['col1'][itr]
            post_number = i['col2'][itr]
            post_name = i['col3'][itr]
            qualificaiton = i['col4'][itr]
            date = i['col5'][itr]
            link = i['col6'][itr]      
            
            entry = basic_info( title = title ,genre = genre , posts = post_number, post_name = post_name, qualification = qualificaiton, date = date, link = link, counter_id = counter_id)
            db.session.execute(text('SET @num :=0; UPDATE basic_info SET sno = @num:= @num+1; ALTER TABLE basic_info AUTO_INCREMENT =1;'))
            db.session.add(entry)
            db.session.commit()
            
    print('Updated basic!')
    db.session.execute(text('DELETE FROM job_details'))
    send_job_details(detailed_data)
    print('Updated full details!')
    
        
# send admits data to the db
def send_admit():

    details =  govt_job_scraper.get_admit() 
    for i in details:
        id = i['id']
        title = i['title']
        info = i['data']
        print(title)
        entry = admit_info(counter_id = id, title = title, data=info)    
        db.session.execute(text('SET @num :=0; UPDATE admit_info SET sno = @num:= @num+1; ALTER TABLE admit_info AUTO_INCREMENT =1;'))
        db.session.add(entry)
        db.session.commit()
        
# send results info to the db
def send_result():
    details =  govt_job_scraper.get_result() 

    for i in details:
        id = i['id']
        title = i['title']
        info = i['data']
        print(title)
        entry = result_info(counter_id = id, title = title, data=info)    
        db.session.execute(text('SET @num :=0; UPDATE result_info SET sno = @num:= @num+1; ALTER TABLE result_info AUTO_INCREMENT =1;'))
        db.session.add(entry)
        db.session.commit()
        
# pushing to the database 
def push_to_db():
    db.session.execute(text('DELETE FROM basic_info'))
    send_jobs()
    db.session.execute(text('DELETE FROM admit_info'))
    send_admit()
    db.session.execute(text('DELETE FROM result_info'))
    send_result()
    return 'data push done'

''' ******** end *********'''    



@app.route('/')
def home():
    genre = basic_info.query.with_entities(basic_info.title).all()
    data_list = [row[0] for row in genre]
    set_data = set()
    for i in data_list:
        set_data.add(i)
        
    # by post_name
    details = basic_info.query.all()
    
    return render_template('index.html',job_name = set_data, details=details,)

@app.route('/all_jobs', methods=['GET','POST'])
def all_jobs():
    data = basic_info.query.all()[1:]
    valid = lambda x: x-1 if x-1 >=0 else 0 
    number = len(data)
    if request.method =='POST':
        job_name = request.form.get('job_name')

        # job results
        try:
            data = basic_info.query.filter(basic_info.title.contains(job_name) | basic_info.genre.contains(job_name) | basic_info.post_name.contains(job_name)).all()
        except:
            data = []

        try:
            admit = admit_info.query.filter(admit_info.title.contains(job_name)).all()
        except:
            admit = []

        try:
            result = result_info.query.filter(result_info.title.contains(job_name)).all()
        except:
            result = []
            
        number = len(data)+len(result) + len(admit)
    return render_template('commonpage.html',data = data, admit = admit,result = result, total = valid(number))

@app.route('/job_details/<u_id>')
def details(u_id):
    data = job_details.query.filter_by(counter_id = u_id).first()
    
    print(type(u_id),type(data))
    
    return render_template('job_details.html',data = data)

@app.route('/update_db')
def update():
    push_to_db()
    return 'update is done'

@app.route('/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0",port =5000,debug = True)