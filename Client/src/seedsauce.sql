CREATE TABLE Questions (
  id serial PRIMARY KEY,
  qna VARCHAR(1000) UNIQUE NOT NULL,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);

INSERT INTO Questions (qna)
VALUES
("{\"question\":\"What is the official name for the \"hashtag\" symbol?\",\"incorrect\":[\"Number sign\",\"Hash Sign\",\"Pound\"],\"correct\":\"Octothorpe\"}"),
('{"question":"The dreaded CORS error does not apply too?","incorrect":["Allows a server to relax the same-origin policy","Redirects","Form submissions"],"correct":"Restricted access to data"}' ),
('{"question":"Which of these choices does not apply to a REST API?","incorrect":["REST APIs use JSON almost all the time","REST APIs use CRUD","Rest APIs use Nouns instead of Verbs to represent resources"],"correct":"Rest APIs name collections using Plural Verbs"}' ),
('{"question":"AJAX is not?","incorrect":["XML","JavaScript","JSON"],"correct":"A single technology"}' ),            
('{"question":"Which option is not a JWT section?","incorrect":["Header","Payload","Signature"],"correct":"Response"}' ),            
('{"question":"Symmetric encryption uses?","incorrect":["A public key for encryption and a private key","A symmetric key","Is written in mirror writing"],"correct":"One key for encryption and for decryption"}' ),            
('{"question":"IP addresses are?","incorrect":["Easier to read than URLs","A string made of letters and numbers","Network addresses that are easy to read"],"correct":"Unique addresses that identify devices on the internet or a local network"}' ),            
('{"question":"A HTTP request is?","incorrect":["A text string request sent to the client","Hypertext Transfer Protocol response","A very complicated data type"],"correct":"A message sent by the client to initiate an action on the server"}' ),            
('{"question":"A HTTP status code of 3xx is?","incorrect":["Success","Server errors","Client errors"],"correct":"Redirection"}' ),            
('{"question":"What is the DOM","incorrect":["The DOM is an object-oriented representation of a squid","The DOM is a programming language","A visualization of code"],"correct":"The DOM represents the document as nodes and objects"}' ),            
('{"question":"What is diffing?","incorrect":["Subtracting one number from another","Looking at the difference between two or more strings","When React compares the DOM with the virtual DOM"],"correct":"When React compares the current version of the virtual DOM with the previous version of the virtual DOM"}' ),            
('{"question":"1,000 Mbps is equal to what?","incorrect":["1 kilobit per second","1 megabyte per second","1 byte per second"],"correct":"1 gigabit per second"}' ),             
('{"question":"TIFF and JPEG file formats support image metadata called what?","incorrect":["XSD","MIME","IMG"],"correct":"EXIF"}' ),             
('{"question":"In React useMemo() returns?","incorrect":["A post it note","A squirrel","A function"],"correct":"A value"}' ),  
('{"question":"Vinton Cerf and Bob Kahn did what?","incorrect":["Invented React","Invented Python","Invented Javascript"],"Invented the internet"}' ),  
('{"question":"A custom React Hook can?","incorrect":["Update on a dependency array","Be used inside a normal function","Solve all your problems"],"correct":"Call other hooks"}' ),  
('{"question":"What statement terminates a loop in JS?","incorrect":["End","Stop","Continue"],"correct":"Break"}' ),  
('{"question":"Binary Search is what time complexity?","incorrect":["Polynomial","Linear","Loglinear"],"correct":"Logarithmic"}' ),  
('{"question":".splice() does what in JS?","incorrect":["Combines 2 strings","Combines 2 arrays","Changes the contents of an string by removing or replacing existing elements and/or adding new elements"],"correct":"Changes the contents of an array by removing or replacing existing elements and/or adding new elements"}' ),                    
('{"question":"In Agile Software Development which value is true?","incorrect":["Comprehensive documentation is more important then fully working software","Tools and processes are more important then feelings","Sticking to a plan is very important"],"correct":"Individuals and interactions are more important then processes and tools"}' ),
('{"question":"ORM stands for?","incorrect":["Object-reliace mapping","Object-reliace method","Object-replication method"],"correct":"Object-relational mapping"}' )
;