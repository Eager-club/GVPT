const labFacilities = [
    {
        department: "Electronics and Communication Engineering",
        description: "The Department of E.C.E at Gayatri Vidya Parishad College for Degree and PG Courses (A) has well-equipped laboratories with various electronic, electrical, digital devices, and simulation software. These labs provide good access for all students for long hours, ensuring a safe and progressive environment.",
        features: [
            "Lectures, discussions, demonstrations, and exercises led by experienced faculty.",
            "Focus on teamwork, creativity, and professional training in electronics and communication.",
            "Practical exposure to analyze results and develop innovative ideas.",
            "Five well-ventilated laboratory rooms.",
        ],
        labRooms: [
            { roomNo: "809", labName: "DIGITAL ELECTRONICS & MICROPROCESSORS LABORATORY", dimensions: "7.6 x 9.44", areaSqM: 71.74 },
            { roomNo: "810", labName: "COMMUNICATION SYSTEMS LABORATORY", dimensions: "7.6 x 9.44", areaSqM: 71.74 },
            { roomNo: "811", labName: "DEPARTMENT LIBRARY & FACULTY ROOM", dimensions: "7.6 x 3.15", areaSqM: 23.94 },
            { roomNo: "812", labName: "ANALOG ELECTRONICS LABORATORY", dimensions: "7.6 x 8.9", areaSqM: 67.64 },
            { roomNo: "813", labName: "MICROWAVE ENGINEERING LABORATORY", dimensions: "7.6 x 8.9", areaSqM: 67.64 },
            { roomNo: "814", labName: "SIMULATION LABORATORY", dimensions: "7.6 x 9.4", areaSqM: 71.44 },
            { roomNo: "627", labName: "NETWORK THEORY & ELECTRICAL MACHINES LABORATORY", dimensions: "7.34 x 11.89", areaSqM: 87.27 },
        ],
        laboratories: [
            {
                category: "Analog Electronics Laboratory",
                subLabs: [
                    {
                        name: "Electronic Devices and Circuits Laboratory",
                        description:
                            "This laboratory is intended for beginners for testing and practicing their theoretical knowledge in the working of basic electronic devices and simple circuits, which enables the students to visualize their thought process and deepen their understanding of the subject. The students are allowed to explore various equipment under the guidance of experienced faculty. To meet the requirements of the students, the college provides efficient laboratories containing a large variety of electronic components along with devices like cathode ray oscilloscopes, function generators, regulated power supply, multimeters, etc.,",
                        equipment: ["Cathode Ray Oscilloscopes", "Function Generators", "Regulated Power Supply", "Multimeters"],
                    },
                    {
                        name: "Analog Electronics Circuits Laboratory",
                        description:
                            "The Analog electronic circuit laboratory is the next version of the electronic devices and circuits laboratory. The aim of this laboratory is to make students familiar with the use of devices like transistors in amplifiers. The lab is well equipped and well arranged, creating a congenial atmosphere and hence promoting the interests of students in the aspect of designing. The students learn about various electronic devices in the E.D.C lab and implement their designing skills in this lab. The lab and the classes are taught in co-relation and at the same pace so that the students can experience the actual concept of learning!",
                    },
                    {
                        name: "Linear IC's and Pulse Circuit Laboratory",
                        description:
                            "It is a design laboratory which helps students design and analyze small circuits that are used in complex circuits or applications. This lab primarily helps the students to figure out how their design will integrate with the user requirement. The aspiring design course teaches the students to generate, develop and realize breakthrough ideas in electronics. The lab provides a variety of IC's to experiment with, and has a more analytic approach. When students carry out various kinds of experiments, they draw conclusions from their studies which raises their level of self-confidence.",
                    },
                ],
            },
            {
                category: "Digital Electronics & Microprocessor Laboratory",
                subLabs: [
                    {
                        name: "Digital IC's Laboratory",
                        description:
                            "This laboratory provides the basic experimentation required for gaining knowledge in computer architecture and organization. The lab provides various kinds of Ic's to work with. These labs make it possible for the students to apply reasoning informed by the contextual knowledge and allow them to perform a wide range of experiments. With Excellent facilities and under proper guidance, the students gain expertise in this field and cater to the growing needs of digital community.",
                    },
                    {
                        name: "Microprocessors & Microcontroller Laboratory",
                        description:
                            "The microprocessors & Microcontroller laboratory deals with assembly language programming using 8086 microprocessor and 8051 microcontroller. The lab is equipped with trainers in 8086, 8051 and its interfacing modules in order to enable the student to work with any kind of processor. The lab is led by experienced faculty who help the students to have a thorough grip on programming, so that they can apply their programming skills for the design of new applications. This lab gives an opportunity for students to build an ability to identify, formulate and analyze complex engineering problems related to Electronics & Communication and also the ability to function effectively as an individual.",
                    },
                ],
            },
            {
                category: "Communication Laboratory",
                subLabs: [
                    {
                        name: "Analog & Digital Communication Laboratory",
                        description:
                            "This well versed laboratory deals with experiments on different modes of communications both Analog and Digital and various processes involved for communication to occur. The labs are well equipped with all the necessary electronic components as well as demonstration kits to ensure that the students work with ease. These labs are handled by well-trained faculty who help the students to bridge the gap between engineering theory and practice through visualization. The students can also develop their designing skills in this lab.",
                    },
                ],
            },
            {
                category: "Microwave Engineering & Antenna Laboratory",
                subLabs: [
                    {
                        name: "Microwave Engineering Laboratory",
                        description:
                            "In this laboratory students will conduct experiments that generates signal in Microwave Frequencies and study the Reflex Klystron and Gunn. The students are also exposed to fibre communication and study the operation of Optical fibre. This lab gives an opportunity for students to build an ability to identify, formulate and analyze complex engineering problems related to Electronics & Communication.",
                    },
                ],
            },
            {
                category: "Network Theory & Machines Laboratory",
                subLabs: [
                    {
                        name: "Simulation Laboratory",
                        description:
                            "This lab contains latest simulation softwares like MATLAB, SIMULINK, XILINX, LABVIEW and MUTLISIM which can be used by the students to design experiments virtually, and perform analysis and interpretation of data and synthesis of information to provide valid conclusions, before performing the experiment on bread board. This lab tends to reduce complexity and time consumption for students.",
                    },
                    {
                        name: "Network Theory & Machines Laboratory",
                        description:
                            "In this laboratory the students get the opportunity to analyse the basic electrical laws and understand terms like node, branch, mesh, port, circuit etc., Here the students verify their practical results with the theoretical results and understand the behaviour of circuits in the real world. Apart from the electrical components necessary for performing an experiment, the laboratory provides experimental kits to ensure that the students understand the experiment to a good extent. The labs and classes are taught in co-relation so that the students grasp the subject in the best manner. The electrical machines laboratory contains motors, generators and transformers of various kinds in a bright and spacious room. This laboratory allows the students to perform various tests and experiments on what they have already learnt about electrical machines. Since the students are liable to work with high voltages and currents, safety is made an integral part of this laboratory. The faculty who possess immense knowledge and experience in electrical field guide the students in the right direction.",
                    },
                ],
            },
        ],
    },
];

export default labFacilities;
