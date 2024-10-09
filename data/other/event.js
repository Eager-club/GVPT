// eventDatabase.js
const eventDatabase = [
    {
        id: 1,
        title: "AI Conference",
        date: "2024-10-10",
        department: "Computer Science Department",
        description: "An in-depth conference about AI and machine learning technologies.",
        location: "Main Auditorium",
        speakers: [
            { name: "Dr. John Doe", designation: "AI Researcher, Google" },
            { name: "Prof. Jane Smith", designation: "Professor, MIT" }
        ],
        image: ["../assects/event.jpg","../assects/home.png","../assects/event.jpg","../assects/event.jpg"],
        video: "https://www.youtube.com/embed/sample-video1",
        link: "event-details.html?id=1"
    },
    {
        id: 2,
        title: "Robotics Workshop",
        date: "2024-10-12",
        department: "Mechanical Engineering Department",
        description: "Learn about the latest trends in robotics and automation.",
        location: "Room 101, Mechanical Block",
        speakers: [
            { name: "Elon Musk", designation: "CEO, Tesla" },
            { name: "Prof. Alan Turing", designation: "Robotics Engineer" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video2",
        link: "event-details.html?id=2"
    },
    {
        id: 3,
        title: "Cybersecurity Summit",
        date: "2024-10-15",
        department: "Information Technology Department",
        description: "Discussing the importance of cybersecurity in today's digital world.",
        location: "Lecture Hall B",
        speakers: [
            { name: "Ms. Sarah Connor", designation: "Cybersecurity Analyst, CyberCorp" },
            { name: "Mr. Bruce Wayne", designation: "CTO, Wayne Enterprises" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video3",
        link: "event-details.html?id=3"
    },
    {
        id: 4,
        title: "Data Science Symposium",
        date: "2024-10-18",
        department: "Data Science Department",
        description: "Exploring new trends and technologies in data science.",
        location: "Room 202, Data Center",
        speakers: [
            { name: "Dr. Alice Johnson", designation: "Data Scientist, DataCorp" },
            { name: "Mr. Charlie Brown", designation: "Analyst, Stats Inc." }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video4",
        link: "event-details.html?id=4"
    },
    {
        id: 5,
        title: "Machine Learning Bootcamp",
        date: "2024-10-20",
        department: "Computer Science Department",
        description: "A hands-on workshop on machine learning techniques.",
        location: "Lab 3, Tech Building",
        speakers: [
            { name: "Dr. Emily White", designation: "Machine Learning Engineer, AI Solutions" },
            { name: "Mr. Greg Black", designation: "Data Engineer, TechCorp" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video5",
        link: "event-details.html?id=5"
    },
    {
        id: 6,
        title: "Ethical Hacking Seminar",
        date: "2024-10-25",
        department: "Computer Science Department",
        description: "Learn about ethical hacking and penetration testing.",
        location: "Room 105, Security Block",
        speakers: [
            { name: "Mr. James Bond", designation: "Ethical Hacker, Hackers United" },
            { name: "Ms. Natalee Portman", designation: "Security Consultant" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video6",
        link: "event-details.html?id=6"
    },
    {
        id: 7,
        title: "Blockchain Technology Forum",
        date: "2024-10-28",
        department: "Finance Department",
        description: "Discussing the impact of blockchain on finance.",
        location: "Room 303, Finance Building",
        speakers: [
            { name: "Mr. Satoshi Nakamoto", designation: "Blockchain Developer" },
            { name: "Ms. Ada Lovelace", designation: "Finance Analyst" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video7",
        link: "event-details.html?id=7"
    },
    {
        id: 8,
        title: "Virtual Reality Expo",
        date: "2024-11-01",
        department: "Art and Design Department",
        description: "Showcasing the latest in virtual reality technology.",
        location: "Exhibition Hall",
        speakers: [
            { name: "Mr. Mark Zuckerberg", designation: "CEO, Meta" },
            { name: "Dr. Helen Keller", designation: "VR Specialist" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video8",
        link: "event-details.html?id=8"
    },
    {
        id: 9,
        title: "Web Development Workshop",
        date: "2024-11-05",
        department: "Computer Science Department",
        description: "Learn the latest techniques in web development.",
        location: "Room 404, IT Building",
        speakers: [
            { name: "Mr. Tim Berners-Lee", designation: "Web Pioneer" },
            { name: "Ms. Susan Wojcicki", designation: "CEO, YouTube" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video9",
        link: "event-details.html?id=9"
    },
    {
        id: 10,
        title: "Augmented Reality Workshop",
        date: "2024-11-10",
        department: "Art and Design Department",
        description: "Exploring augmented reality in design and art.",
        location: "Studio 1, Design Building",
        speakers: [
            { name: "Ms. J.K. Rowling", designation: "AR Developer" },
            { name: "Mr. Steve Jobs", designation: "Tech Innovator" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video10",
        link: "event-details.html?id=10"
    },
    {
        id: 11,
        title: "Quantum Computing Workshop",
        date: "2024-11-15",
        department: "Physics Department",
        description: "An introduction to the principles of quantum computing.",
        location: "Room 505, Physics Block",
        speakers: [
            { name: "Dr. Richard Feynman", designation: "Quantum Physicist" },
            { name: "Dr. Niels Bohr", designation: "Theoretical Physicist" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video11",
        link: "event-details.html?id=11"
    },
    {
        id: 12,
        title: "Sustainable Energy Conference",
        date: "2024-11-20",
        department: "Environmental Science Department",
        description: "Discussing sustainable energy solutions for the future.",
        location: "Main Auditorium",
        speakers: [
            { name: "Ms. Greta Thunberg", designation: "Environmental Activist" },
            { name: "Dr. Jane Goodall", designation: "Primatologist" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video12",
        link: "event-details.html?id=12"
    },
    {
        id: 13,
        title: "Mobile App Development Workshop",
        date: "2024-11-25",
        department: "Computer Science Department",
        description: "Creating apps for iOS and Android platforms.",
        location: "Lab 2, IT Building",
        speakers: [
            { name: "Mr. Sundar Pichai", designation: "CEO, Google" },
            { name: "Ms. Sheryl Sandberg", designation: "COO, Facebook" }
        ],
        image: "../assects/event.jpg",
        video: "https://www.youtube.com/embed/sample-video13",
        link: "event-details.html?id=13"
    },
    {
        id: 14,
        title: "Cloud Computing Conference",
        date: "2024-11-30",
        department: "Information Technology Department",
        description: "Understanding cloud technologies and their applications.",
        location: "Room 608, IT Building",
        speakers: [
            { name: "Mr. Jeff Bezos", designation: "Founder, Amazon" },
            { name: "Ms. Satya Nadella", designation: "CEO, Microsoft" }
        ],
        image: ["../assects/event.jpg","../assects/event.jpg","../assects/event.jpg","../assects/event.jpg"],
        video: "https://www.youtube.com/embed/sample-video14",
        link: "event-details.html?id=14"
    }
];
