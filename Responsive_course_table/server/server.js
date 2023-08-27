const express = require("express")
const cors = require("cors")

const app = express();
const port = 8000;

app.use(cors())

const course = [
    { CourseName: "Basic Algorithm", totalLesson: 25, startDate: "27 Jan,2023", lessonCompleted: 10, Duration: "14h 38m 56s" },
    { CourseName: "Web Development", totalLesson: 45, startDate: "23 Feb,2023", lessonCompleted: 30, Duration: "36h 30m 00s" },
    { CourseName: "Basic Data Science", totalLesson: 37, startDate: "14 Jan,2023", lessonCompleted: 23, Duration: "37h 00m 00s" },
    { CourseName: "UI/UX Design", totalLesson: 32, startDate: "19 Feb,2023", lessonCompleted: 21, Duration: "16h 40m 50s" },
    { CourseName: "Project Management", totalLesson:19, startDate: "27 Jan,2023", lessonCompleted: 9, Duration: "13h 20m 00s" },
    { CourseName: "Front End Developer", totalLesson:39 , startDate: "27 Jan,2023", lessonCompleted: 19, Duration: "16h 38m 56s" },
    { CourseName: "Back End Developer", totalLesson: 35, startDate: "27 Jan,2023", lessonCompleted: 23, Duration: "19h 38m 56s" },
    { CourseName: "Full Stack Developer", totalLesson: 65 , startDate: "27 Jan,2023", lessonCompleted: 35, Duration: "42h 08m 56s" },
    { CourseName: "MERN Stack Developer", totalLesson: 60, startDate: "27 Jan,2023", lessonCompleted: 32, Duration: "32h 28m 56s" },
    { CourseName: "Java Developer", totalLesson: 45, startDate: "27 Jan,2023", lessonCompleted: 32, Duration: "19h 48m 56s" },
    { CourseName: "SQL Developer", totalLesson: 55, startDate: "27 Jan,2023", lessonCompleted: 24, Duration: "22h 08m 56s" },
    { CourseName: "React JS Developer", totalLesson: 54, startDate: "27 Jan,2023", lessonCompleted: 14, Duration: "34h 48m 58s" },
    { CourseName: "Node JS Developer", totalLesson: 33, startDate: "27 Jan,2023", lessonCompleted: 13, Duration: "24h 38m 00s" }
]

app.get("/course", async (req, res) => {
    try {
        res.send(course)
    } catch (error) {
        console.log(error)
    }
})


app.listen(port, () => {
    console.log(`Server is Started in port ${port}`)
})