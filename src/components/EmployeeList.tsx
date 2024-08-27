// components/EmployeeList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeCardItem from './EmployeeCardItem';
import { Employee } from '../types';

const employees: Employee[] = [
    {
      id: 1,
      name: 'Harry Kali',
      positions: [
        {
          id: 1,
          toolLanguages: [
            {
              id: 1,
              description: 'Description here',
              images: [
                { id: 1, cdnUrl: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg', displayOrder: 0 },
                { id: 2, cdnUrl: '/cdn/image2.jpg', displayOrder: 1 }
              ]
            }
          ]
        }
      ]
    }
    // Add more mock employees if needed
  ];

  
const EmployeeList: React.FC = () => {
//   const [employees, setEmployees] = useState<Employee[]>([]);

//   useEffect(() => {
//     // Fetch employees from your API
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('/api/employees');
//         setEmployees(response.data.data.pageItems);
//       } catch (error) {
//         console.error('Failed to fetch employees', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <div className="flex flex-wrap gap-4">
        {employees.map(employee => (
          <EmployeeCardItem key={employee.id} employee={employee} onDelete={() => {}} />
        ))}
      </div>
    </main>
  );
};

export default EmployeeList;
