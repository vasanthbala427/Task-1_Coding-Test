// Your data array
const data = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Doe", age: 30 },
  { id: 3, name: "Bob Smith", age: 22 },
  { id: 4, name: "Alice Johnson", age: 28 },
  { id: 5, name: "Charlie Brown", age: 35 },
  { id: 6, name: "Eva Williams", age: 26 },
  { id: 7, name: "Frank White", age: 32 },
  { id: 8, name: "Grace Miller", age: 24 },
  { id: 9, name: "Harry Davis", age: 31 },
  { id: 10, name: "Isabel Turner", age: 29 },
  { id: 11, name: "Jack Robinson", age: 27 },
  { id: 12, name: "Kelly Harris", age: 33 },
  { id: 13, name: "Leo Martinez", age: 23 },
  { id: 14, name: "Mia Lee", age: 36 },
  { id: 15, name: "Nathan Taylor", age: 25 },
  { id: 16, name: "Olivia Clark", age: 30 },
  { id: 17, name: "Peter Scott", age: 22 },
  { id: 18, name: "Quinn Adams", age: 28 },
  { id: 19, name: "Rachel Brown", age: 35 },
  { id: 20, name: "Samuel Wilson", age: 26 },
  { id: 21, name: "Tina Evans", age: 32 },
  { id: 22, name: "Ulysses Reed", age: 24 },
  { id: 23, name: "Violet Patterson", age: 31 },
];

// Number of items per page
const itemsPerPage = 5;

// Initial page
let currentPage = 1;

// Function to display data in the table
function displayData() {
  const tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dataToDisplay = data.slice(startIndex, endIndex);

  dataToDisplay.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.age}</td>`;
    tableBody.appendChild(row);
  });
}

// Function to handle sorting
function sortTable(columnIndex) {
  data.sort((a, b) => {
    const keyA = Object.values(a)[columnIndex];
    const keyB = Object.values(b)[columnIndex];

    if (typeof keyA === "string") {
      return keyA.localeCompare(keyB);
    } else {
      return keyA - keyB;
    }
  });

  currentPage = 1; // Reset to the first page after sorting
  displayData();
  renderPagination();
}

// Function to render pagination
function renderPagination() {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationElement = document.getElementById("pagination");
  paginationElement.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    li.addEventListener("click", () => {
      currentPage = i;
      displayData();
      renderPagination();
    });
    paginationElement.appendChild(li);
  }
}

// Initial display
displayData();
renderPagination();
