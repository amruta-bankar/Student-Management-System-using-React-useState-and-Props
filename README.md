# 🎓 Student Management System using React

A simple **Student Management System** built using **React.js and Vite** to demonstrate the use of **React `useState` Hook and Props**.

The application allows users to add student details, view all students, see the total number of students, and delete students.

## 🚀 Features

* ➕ Add new student
* 👨‍🎓 Display student details
* 🔢 Display total number of students
* 🗑️ Delete a student
* ⚛️ Demonstrates React `useState`
* 🔄 Demonstrates passing data and functions using Props
* 📱 Responsive design for smaller screens
* 🎨 Clean and simple user interface

## 🛠️ Technologies Used

* **React.js**
* **Vite**
* **JavaScript (JSX)**
* **HTML5**
* **CSS3**

## 📂 Project Structure

```text
student-management-react-usestate-props/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚛️ React Concepts Demonstrated

### 1. useState Hook

The project uses `useState` to manage:

* Student list
* Student name
* Roll number
* Course
* Year

Example:

```jsx
const [students, setStudents] = useState([]);
```

### 2. Props

Student information and the delete function are passed from the parent component to the `StudentCard` component using props.

```jsx
<StudentCard
  student={student}
  onDelete={deleteStudent}
/>
```

The child component receives these props:

```jsx
function StudentCard({ student, onDelete }) {
  // ...
}
```

### 3. Array Methods

The project uses JavaScript array methods such as:

* `map()` — to display students
* `filter()` — to delete a student

##

## 📌 Learning Objective

The main objective of this assignment is to understand the basics of React state management and component communication using:

* `useState`
* Props
* Functional Components
* Event Handling
* Conditional Rendering
* Array `map()`
* Array `filter()`

## 🔮 Future Improvements

Possible improvements include:

* Edit student details
* Search students
* Filter students by course or year
* Store data using Local Storage
* Add form validation
* Connect the application to a database
* Add authentication

## 👩‍💻 Author

**Amruta Bankar**

B.Tech Computer Engineering Student

---

⭐ If you found this project useful, consider giving the repository a star!
