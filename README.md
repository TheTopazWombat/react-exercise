# find-rep-api
A Simple api to get results from http://whoismyrepresentative.com/api

## Goal

* Build a React application that utilizes both endpoints found below.
* Design and styling aren't important here, this should focus on react.
* Your app should display all representatives and senators in an infinite scroll container.
* As you scroll near the bottom of the container/page it should fetch more results from the api.
* Output the api data in a simple UI.
* Let the user know once they've reached the end of the results.
* Email your completed project link to your company contact.

# Installation

* Install node (v12+)
* Run `npm install` or `yarn`
* Run `npm run start` or `yarn start`
* Update: `yarn run server` to run the server, `yarn start` to run the frontend app

### Available endpoints: 

`/representatives/:state`

_:state_ must be a valid state abbreviation (UT, WY, MO...etc)

**response**
```json
{  
   "success":true,
   "results":[  
      {  
         "name":"Rob Bishop",
         "party":"R",
         "state":"UT",
         "district":"1",
         "phone":"202-225-0453",
         "office":"123 Cannon House Office Building",
         "link":"http://robbishop.house.gov"
      },
      {  
         "name":"Jason Chaffetz",
         "party":"R",
         "state":"UT",
         "district":"3",
         "phone":"202-225-7751",
         "office":"2464 Rayburn House Office Building",
         "link":"http://chaffetz.house.gov"
      },
      {  
         "name":"Jim Matheson",
         "party":"D",
         "state":"UT",
         "district":"4",
         "phone":"202-225-3011",
         "office":"2211 Rayburn House Office Building",
         "link":"http://matheson.house.gov"
      },
      {  
         "name":"Chris Stewart",
         "party":"R",
         "state":"UT",
         "district":"2",
         "phone":"202-225-9730",
         "office":"323 Cannon House Office Building",
         "link":"http://stewart.house.gov"
      }
   ]
}
```

`/senators/:state`

_:state_ must be a valid state abbreviation (UT, WY, MO...etc)

**response**
```json
{  
   "success":true,
   "results":[  
      {  
         "name":"Orrin Hatch",
         "party":"R",
         "state":"UT",
         "district":"Senior Seat",
         "phone":"202-224-5251",
         "office":"104 Hart Senate Office Building",
         "link":"http://www.hatch.senate.gov"
      },
      {  
         "name":"Mike Lee",
         "party":"R",
         "state":"UT",
         "district":"Junior Seat",
         "phone":"202-224-5444",
         "office":"316 Hart Senate Office Building",
         "link":"http://www.lee.senate.gov"
      }
   ]
}
```

