import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './style.css'

interface Course {
  CourseName: string;
  totalLesson: number;
  startDate: string;
  lessonCompleted: number;
  Duration: string;
}
function App() {
  const [courseData, setCourseData] = useState<Course[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/course")
      .then(response => response.json())
      .then(data => {
        setCourseData(data);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='h2 py-3'>My Courses</h2>
            <table className="table">
              <thead>
                <tr className='t-headings '>
                  <th >Course Name</th>
                  <th >Start Date</th>
                  <th >Lesson Completed</th>
                  <th >Duration</th>
                </tr>
              </thead>
              <tbody>
                {courseData.map((course) => (
                  <tr className='c-list' >
                    <td scope="row" className='courseName' >{course.CourseName}<br /><span>{course.totalLesson} Lessons</span></td>
                    <td className='date' >{course.startDate}</td>
                    <td className='completed-lessons'>{course.lessonCompleted}/<span>{course.totalLesson}</span><span>({((course.lessonCompleted) / (course.totalLesson) * 100).toFixed()}%)</span></td>
                    <td className='duration' >{course.Duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
