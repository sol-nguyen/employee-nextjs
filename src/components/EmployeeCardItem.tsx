// components/EmployeeCard.tsx
import React from "react";
import Image from "next/image";
import { Employee } from "../types";

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCardItem: React.FC<EmployeeCardProps> = ({ employee }) => {
    return (
        <div className="relative bg-white p-4 rounded-lg border border-gray-200 shadow-md mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <button
            className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2"
            onClick={() => onDelete(employee.id.toString())}
          >
            X
          </button>
          <h2 className="text-xl font-semibold mb-2">{employee.name}</h2>
          <div className="space-y-2">
            {employee.positions.flatMap(position =>
              position.toolLanguages.flatMap(toolLanguage =>
                toolLanguage.images.map(image => (
                  <div key={image.id} className="relative">
                    <Image
                      src={image.cdnUrl}
                      alt={`Image ${image.id}`}
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2">{image.cdnUrl}</p>
                  </div>
                ))
              )
            )}
          </div>
        </div>
      );
};

export default EmployeeCardItem;
