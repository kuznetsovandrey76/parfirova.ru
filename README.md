[Help guide](https://beget.com/ru/kb/how-to/web-apps/node-js#)

Enter to your Beget account  
`ssh akuznetsov@akuznetsov.beget.tech`  
Enter to Docker  
`ssh localhost -p 222`  

Go to your project    
`cd parfirova.ru`  

Initial step. You should clone git project or skip this step    
`git clone https://github.com/kuznetsovandrey76/parfirova.ru.git ./`  

Update project  
`./run.sh`  

### Structure  
``` sh
server/
public_html/
  build/
public -> public_html
```

Add bash script `run.sh `
``` sh
#!/bin/bash
echo "Hello world"
```
Update this file `chmod ugo+x run.sh`  


### Development
in server folder  
`npm run local`  
in public_html folder  
`yarn start`  

### UI
https://react-bootstrap.github.io/getting-started/introduction/
https://mdbootstrap.com/docs/react/navigation/footer/#docsTabsOverview
https://www.npmjs.com/package/react-loading-overlay


### DB
``` js
HOST=akuznetsov.beget.tech
DB=
PASS=
```
``` sql
create table msgs(
    id int auto_increment,
    msg text not null,
    date DATETIME not null,
    primary key (id)
);
```