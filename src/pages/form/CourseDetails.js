import React from 'react';

const CourseDetails = ({ formData, setFormData }) => {
    const handleCheckboxChange = (course) => {
        setFormData({ ...formData, courses: [course] });
    };

    const courses = [
        'Direction & Screenplay',
        'Cinematography',
        'Editing',
        'Visual Effects',
        'Virtual Production',
        'Acting',
        'Photography'
    ];

    return (
        <div className="space-y-4">
            <p className="text-lg font-semibold mb-4">Select Course</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {courses.map((course) => (
                    <label key={course} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            required
                            checked={formData.courses.includes(course)}
                            onChange={() => handleCheckboxChange(course)}
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{course}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CourseDetails;
