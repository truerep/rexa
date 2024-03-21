import React, {
  useContext
} from 'react';
import Education from './Education';
import {
  ResumeContext
} from '@/context/ResumeContext';

const EducationContainer = () => {
  const {resumeData, updateResumeData} = useContext(ResumeContext);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  console.log(resumeData, '<---resume data');

  // Add New Experience Section
  const addNewEducationSection = () => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.education.push({
      institution: 'Name of University | College | Institution',
      area: 'Area of Study i.e Computer Science & Engineering',
      studyType: 'Study Type i.e B.Tech',
      startDate: '2016',
      endDate: '2019',
      gpa: '75%',
      courses: [
        'None'
      ]
    });
    updateResumeData(updatedResumeData);
  };

  // Remove Experience Section
  const handleDeleteEducationSection = (index) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.education.splice(index, 1);
    updateResumeData(updatedResumeData);
  };

  // Update data from Input fields
  const handleInputChange = (index, key, value) => {
    const updatedResumeData = {...resumeData};
    updatedResumeData.templateData.education[index][key] = value;
    updateResumeData(updatedResumeData);
  };

  return (
    <Education
      templateData={resumeData?.templateData?.education}
      addNewEducationSection={addNewEducationSection}
      handleDeleteEducationSection={handleDeleteEducationSection}
      handleInputChange={handleInputChange}
      dropdownOpen={dropdownOpen}
      setDropdownOpen={setDropdownOpen}
    />
  );
};

export default EducationContainer;
