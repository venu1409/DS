# DEVENU - Data Structures & Algorithms Revision Dashboard

DEVENU is an interactive, modern, and lightweight educational web application designed for computer science students to visualize operations, analyze complexities, and view programming implementations of major Data Structures and Algorithms.

Built entirely using **HTML5**, **CSS3**, and **Vanilla JavaScript**, it is simple, fast, and does not require any external frameworks, compilers, or server setups.

---

## 🌟 Key Features

*   **Interactive Operations & Explanations**: Select different operations (e.g., Insertion, Deletion, Traversal) from a dynamic sidebar to view detailed descriptions, algorithms, and complexities.
*   **Multi-Language Code Selector**: Toggle between **C**, **Java**, and **Python** code implementations of the same operations. Selected language preferences are saved using `localStorage` and persist as you browse the site.
*   **Time & Space Complexity Cheat Sheet**: A dedicated page acting as a quick-reference dashboard for the best, average, and worst-case time complexities and space complexities of all data structures.
    *   **Live Search & Categories**: Instantly search algorithms by keyword or filter rows by category (Data Structures, Sorting, Searching, Graphs, Hashing).
    *   **Print-Optimized**: Features a custom print layout (`@media print`) and a "Print Sheet" button to easily print physical reference sheets or export clean PDFs.
*   **Responsive Modern Design**: Features a dark premium header navigation bar, active link highlighting, card-based responsive grids, clean typography, and a mobile hamburger drawer.

---

## 📂 Project Structure

```text
├── index.html                               # Main dashboard homepage
├── time_complexity.html                     # Time & Space Complexity Cheat Sheet
├── Singly_Linked_Lists_Collapsible.html     # Singly Linked List operations & code
├── Doubly_Linked_Lists_Collapsible.html     # Doubly Linked List operations & code
├── Circularly_Linked_Lists_Collapsible.html # Circular Linked List operations & code
├── Stack.html                               # Stack operations, conversions, and code
├── Queue.html                               # Queue operations and code
├── Infix.html                               # Infix to Postfix converter logic
├── Postfix.html                             # Postfix evaluation logic
├── Binary_Tree.html                         # Binary Tree operations & traversals
├── Binary_Search_Tree.html                  # Binary Search Tree operations
├── Graphs.html                              # BFS, DFS, Dijkstra, Prim, Kruskal
├── Linear_Search.html                       # Linear Search visualization & code
├── Binary_Search.html                       # Binary Search visualization & code
├── Insertion_Sort.html                      # Insertion Sort details & code
├── Quick_Sort.html                          # Quick Sort details & code
├── Merge_Sort.html                          # Merge Sort details & code
├── Heap_Sort.html                           # Heap Sort details & code
└── Hashtable.html                           # Open/Closed hashing collision methods
```

---

## 🚀 How to Run Locally

Since this is a static web application, no server or command-line installation is required:
1. Clone the repository:
   ```bash
   git clone https://github.com/venu1409/DS.git
   ```
2. Navigate to the project directory and double-click `index.html` to open it directly in any modern web browser.

---

## 🛠️ Technologies Used

*   **HTML5**: Semantic tags for clean SEO structure.
*   **CSS3**: Custom HSL color variables, responsive flexbox/grid layouts, print media queries, and smooth transition animations.
*   **Vanilla JavaScript**: Dom manipulation, active tab management, dynamic search filters, and persistent local storage.
