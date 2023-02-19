# React Responsive Admin Panel Tutorial
![]
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
![29 minutes into the tutorial](/public/images/beginning_reactadminpanel.png)

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
2. Import data into a component, iterate upon the data and retrieve children objects of the data. Instead of vanilla javascript, React lets you comparmentize data and html and use JavaScript for complex operations in the front-end.
**Import data into a component, iterate upon the data and retrieve children objects of the data. This data has the icon name and the heading, with .map we can iterate this data by index**
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
