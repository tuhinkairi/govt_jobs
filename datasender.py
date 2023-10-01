# functions to render data from the db
import backend
from backend import admit_info
# connection to db


@app.route('/')
def home():
    
    data = admit_info.query.all()
    return data
if __name__=="__main__":
    backend.app.run(debug =True)