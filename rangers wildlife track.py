# Import sqlite3 from datetime import datetime

# Constants 
from email.base64mime import header_length
from logging.config import _LoggerConfiguration
from sre_constants import RANGE_UNI_IGNORE
from tkinter.tix import INTEGER


HEALTH_OPTIONS=['Health','injured','Critical']
Age_Options=['Young','Adult','Wlderly']

class Animal:
    def_init_(self,species,health,age):
        self.species=species
        self.health=health
self.age=age

# Define EndangeredAnimal class
class EndangeredAnimal(Animal):
    def_init_(self,animal,health,age,conservation_status):
     super()._init_(species,health,age)
     self.location=_location
     self.conservation_status=conservation_status
      

# Define Sighting class
class sighting:
    def_init_(self,animal,location,ranger,timestamp=None):
     self.animal=Animal
     self.location=_location
     self.ranger=ranger
     self.timestamp=timestamp if timestamp else dateline.now()


# Database Setup
class Database:
    def_init_(self,db_name):
     self.conn=sqlite3.connect(db_name)
     self.cursor=self.conn.cursor()
     self.create_tables()
      

     def create_tables(self):
         self.cursor.execute("'
         CREATE TABLE IF NOT EXISTS animals(
             id INTEGER PRIMARY KEY,
             species TEXT,
             health TEXT,
             age TEXT,
             conservation_status TEXT
         )
         '") 

         self.cursor.execute("'
         CREATE TABLE IF NOT EXISTS sightings(
             id INTEGER PRIMARY KEY,
             animal_id INTEGER,
             location TEXT,
             ranger TEXT,
             timestamp TEXT,
             FOREIGN KEY(animal_id)REFERENCES animals(id)
         )
         '")
         self.conn.commit()

         def close_connection(self):
             self.conn.close()

# Exceptions
    class IncompleteSubmissionError(Exception):
        pass