# DSA With JavaScript

dsa-with-javascript is DSA library written in javascript and provides basic data structures like Stack,Queue and Linked List along with some sorting and searching algorithms

## Installation

Use the package manager npm to install dsa-with-javascript.

```bash
npm install dsa-with-javascript
```

## Usage
### Available data structures 
#### 1.Stack
```javascript
const {Stack} = require('dsa-with-javascript')

const stack = new Stack() // Create a new instance of class Stack
stack.push(10) // Add new element in stack
stack.pop() //Pops the last element from stack
stack.top() //Returns the top element
stack.isEmpty() //Returns true is stack is empty else false
stack.show() // Returns the stack
```
#### 2.Queue
```javascript
const {Queue} = require('dsa-with-javascript')

const queue = new Queue() // Create a new instance of class Queue
queue.push(10) // Add new element in queue
queue.pop() //Pops the first element from queue
queue.top() //Returns the top element
queue.isEmpty() //Returns true is queue is empty else false
queue.show() // Returns the queue
```
#### 3.Linked List
```javascript
const {LinkedList} = require('dsa-with-javascript')

// Create a new instance of class LinkedList
// new LinkedList() creates head with null value
// new LinkedList(10) creates linked list with 1 node with data = 10
const list = new LinkedList()
list.createNew(20) //Adds new node to the list with given value(20)
list.size() //Returns the size of the linked list
list.getFirst() //Returns the data of first node of the linked list
list.getLast() //Returns the data of last node of the linked list
list.clear() //Clears the linked list (assigns head = null)
list.show() //Returns an array containing data of all nodes of linked list
```

### Available algorithms
#### 1.Binary Search 
```javascript
const {BinarySearch} = require('dsa-with-javascript')
let arr = [1,2,3,4,5]
BinarySearch(arr,5) //The BinarySearch function takes two arguments 1.The array and 2.Key
```
The BinarySearch function expects a sorted array as input, If not given the array is sorted by the function.
The result is the index of the key element if found (of sorted array) else -1 if not found
#### 2.Linear Search 
```javascript
const {LinearSearch} = require('dsa-with-javascript')
let arr = [1,2,3,4,5]
LinearSearch(arr,5) //The LinearSearch function takes two arguments 1.The array and 2.Key
```
The LinearSearch function returns the index of element if found otherwise -1 if not found

#### 3.BubbleSort
```javascript
const {BubbleSort} = require('dsa-with-javascript')
let arr = [1,2,3,4,5]
BubbleSort(arr) //Returns the sorted array in ascending order
BubbleSort(arr,-1) //Returns the sorted array in descending order
```

#### 4.InsertionSort
```javascript
const {InsertionSort} = require('dsa-with-javascript')
let arr = [1,2,3,4,5]
InsertionSort(arr) //Returns the sorted array in ascending order
InsertionSort(arr,-1) //Returns the sorted array in descending order
```

#### 5.MergeSort
```javascript
const {MergeSort} = require('dsa-with-javascript')
let arr = [1,2,3,4,5]
MergeSort(arr) //Returns the sorted array in ascending order
MergeSort(arr,-1) //Returns the sorted array in descending order
```

#### 6.QuickSort
```javascript
const {QuickSort} = require('dsa-with-javascript')
let arr = [1,2,3,4,5]
QuickSort(arr) //Returns the sorted array in ascending order
QuickSort(arr,-1) //Returns the sorted array in descending order
```

#### 7.SelectionSort
```javascript
const {SelectionSort} = require('dsa-with-javascript')
let arr = [1,2,3,4,5]
SelectionSort(arr) //Returns the sorted array in ascending order
SelectionSort(arr,-1) //Returns the sorted array in descending order
```

## Contributing

Pull requests are always welcome. For major changes, please open an issue first
to discuss what you would like to change.

This library is just a project created by [Moh1tsingh](https://github.com/Moh1tsingh) and is not intended for professional use.
