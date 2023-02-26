# React Responsive Admin Panel Tutorial
Tutorial URL: https://www.youtube.com/watch?v=K7vHoUwClaM
Tutorial description: In this tutorial, you will learn how to make beautiful and responsive admin dashboard in Reactjs. We will use React hooks, apexcharts, motion-framer, modern css and many more from scratch during the development of this admin panel.

___________

### Software versions
 - React: 18.0.0
 - webpack 5.72.0
 - iconscout/react-unicons 1.1.16

### Problems in the project:
    No problems listed.

### How to use
1. Git clone / Download.
2. Create .gitignore file & list node_modules in the file if you want to edit something.
3. Simply run "yarn" | Don't run npm install or yarn install.
4. To start the webpack server & react app in a browser run 'yarn start'



### Photos of project:
![29 minutes into the tutorial](/public/images/entirepage_1.jpg)
![Apex chart transitions](/public/images/chartanim_3.gif)
![Sidebar animation](/public/images/sidebar_4.gif)
![Progressbar progress](/public/images/updatedpage_1.jpg)
![Updates on right side](/public/images/reactadminpanel_2.png)
![Responsiveness](/public/images/reactadminpanel_responsive_1.gif)
 
### Apps used:
    - VS Code
    - Vivaldi
    - Github CLI
    - Google Chrome

### Coding styles I used:

### What I learned
1. Creating raw data and mapping it in a view.
 **For example instead of a written from scratch sidebar, have mutable data so anytime I change the data it will change the sidebar. It's another way of doing things.**
      ```
        export const SidebarData = [
            {
                icon: UilEstate,
                heading: "Dashboard"
            },
            {
                icon: UilClipboardAlt,
                heading: "Orders"
            },
            {
                icon: UilUsersAlt,
                heading: "Customers"
            },
            {
                icon: UilPackage,
                heading: 'Products'
            },
            {
                icon: UilChart,
                heading: 'Analytics'
            }
        ];
        ```
2. Iteration & objects
Import data into a component, iterate upon the data and retrieve children objects of the data. Instead of vanilla javascript, React lets you comparmentize data and html and use JavaScript for complex operations in the front-end.
   ```
        {SidebarData.map((item, index) => {
            return (
                <div className="menuItem">
                    <item.icon />
                    <span>
                        item.heading}
                    </span>
                </div>
            )
        })}
    ```
3. Javascript if statement in styling
You can have state in the component and check what state is there currently and have that dictate what className text to pass to the className attribute. That's all className accepts is a string of text. It's maniputable.

```
    className={selected === index ? 'menuItem active' : 'menuItem' }
```
4. Factory function usage in React
   "A factory function is a function that returns a new object." -- <https://www.javascripttutorial.net/javascript-factory-functions/> . 
This function takes a string called 'status' and if that string is 'Approved' or 'Pending' it will return a new object. To prevent different objects that aren't the two mentioned then return a error or if error handling isn't needed then the text color is white. 
   About databases, I thought of what if one creates a factory function to return different styles based on what string is passed to the factory function and thus to be presented in the user interface based on a response data from the database or load a component with various props based on a factory function and an axios database query from several APIs.
```
const makeStyle = (status) => {
    if(status === 'Approved') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green'
        }
    } else if(status == 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red'
        }
    } else {
        return {
            background: '#59bfff',
            color: 'white
        }
    }
}

```