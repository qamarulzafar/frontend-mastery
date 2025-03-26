import "../Courses.css"


const Courses = () => {
  // Course data defined directly in the component
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description:
        "Learn HTML, CSS, and JavaScript to build modern responsive websites from scratch.",
      duration: "12 Weeks",
      level: "Beginner",
      image: "../../public/images/web-dev.jpg",
    },
    {
      id: 2,
      title: "Advanced React & Redux",
      description:
        "Master React.js, Redux, and related libraries to build complex frontend applications.",
      duration: "10 Weeks",
      level: "Intermediate",
      image: "../../public/images/react.png",
    },
    {
      id: 3,
      title: "Full Stack Development",
      description:
        "Comprehensive course covering both frontend and backend technologies including Node.js and databases.",
      duration: "16 Weeks",
      level: "Advanced",
      image: "../../public/images/fullstack.jpg",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Build native mobile applications for iOS and Android using React Native.",
      duration: "14 Weeks",
      level: "Intermediate",
      image: "../../public/images/mobile.avif",
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      description:
        "Learn the fundamentals of user interface and user experience design to create intuitive digital products.",
      duration: "8 Weeks",
      level: "Beginner",
      image: "../../public/images/ui-ux.avif",
    },
    {
      id: 6,
      title: "Data Science & Analytics",
      description:
        "Explore data analysis techniques, machine learning basics, and visualization tools.",
      duration: "12 Weeks",
      level: "Intermediate",
      image: "../../public/images/data-science.jpg",
    },
  ];

  return (
    <div className="courses-container">
      <div className="courses-hero">
        <h1>Our Courses</h1>
        <p className="subtitle">Explore our wide range of educational programs</p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image" style={{ backgroundImage: `url(${course.image})` }}></div>
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-details">
                <span className="course-duration">
                  <span className="detail-label">Duration:</span> {course.duration}
                </span>
                <span className="course-level">
                  <span className="detail-label">Level:</span> {course.level}
                </span>
              </div>
              <button className="btn course-btn">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses

