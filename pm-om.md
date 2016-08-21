# Production Map Object Model
---
Production map allows you to simply develop your automations by exposing very simple API.

PM maps are modeled in the following structure:

>
```
  map:
    links:
      name
      id
      proccesses:
        name
        id
        description
        actions:
          server
          params
          name
          id
          timeout
          retries
          mandatory
          result
          method:
            params
            agent
            name
        result
        servers:
          name
          url
          attributes:
            name
            val
  }
```

## Get Started

**getLinkById**
----
  return the link with the given id from current map
  Link JSON obj or -1 if no link with @id is found

* **Example**

  ```javascript
    var SOME_ID;
    var link = getLinkById(SOME_ID);
    // now the link var represents a link object
  ```
  
  
**getProcessById(linkId, processId)**
----
  gets process object from link by process id
  return {Object}  process object, if no link exist -1 if process don't exist in  link -2

  * @param      {String}    linkId     the link id
  * @param      {String}    processId  wanted process id
* **Example**

  ```javascript
    var SOME_LINK_ID, SOME_PROC_ID;
    var proc = getProcessById(SOME_LINK_ID, SOME_PROC_ID);
    // now the proc var represents a proccess object
  ```
  
  **getLinkProcesses(linkId)**
----
  retrives the processes list from link with linkId on current map.
  return {Object}  processes list of given link, if no link exist in current map return -1

  * @param      {String}    linkId  the link id
* **Example**

  ```javascript
    var SOME_LINK_ID;
    var proccesses = getLinkProcesses(SOME_LINK_ID);
    // now proccesses is an array of proccess object
    console.log(proccesses[0].action) // logs first action
    console.log(proccesses[0].name) // logs first proccess name
  ```
  
    **getLinks()**
----
  retrive the links of current map
  return {Array} array of links objects.

* **Example**

  ```javascript
    var links = getLinks();
    // now links is an array of link object
    console.log(links[0].name) // logs first link name
    console.log(links[0].proccesses) // logs first link proccesses
  ```
  
      **getActions(linkId, processId)**
----
  get the action list of proces in link from current map
  returns array from process, -1 if no link exist and -2 if no process exist.
  
  * param      {String} linkId link's id in map.
  * param      {String} processId  process id in link

* **Example**

  ```javascript
    var SOME_LINK_ID, SOME_PROC_ID;
    var actions = getActions(SOME_LINK_ID, SOME_PROC_ID);
    // now actions is an array of action object
    console.log(actions[0].name) // log first action name
    console.log(actions[0].result) // log first action result
  ```
  
  
  
