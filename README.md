[Help guide](https://beget.com/ru/kb/how-to/web-apps/node-js#)

Enter to your Beget account  
`ssh akuznetsov@akuznetsov.beget.tech`  
Enter to Docker  
`ssh localhost -p 222`  

Go to your project    
`cd ~/parfirova.ru`  

Initial step. You should clone git project or skip this step    
`git clone https://github.com/kuznetsovandrey76/parfirova.ru.git ./`  

Update files    
`git pull`  
Update npm packages    
`cd App`  
`npm i`  
Restart Passenger    
`touch tmp/restart.txt`  
