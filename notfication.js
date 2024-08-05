  //notification bar;
  const notify = document.querySelector(".notifications");
    const links = [  {
        href: "../commodity_awareness.pdf",
        content: "Commodity Derivatives Awareness Workshop"
    },
    {
        href: "../Workshop_Ai_integration.pdf",
        content: "A Six day Workshop on AI Integration with Excel, Power Point and Resume Crafting"
    },
    {
        href: "../Report of International day against drug abuse and illicit trafficking.pdf",
        content: "International day against drug abuse and illicit trafficking Report"
    },
    {
        href: "../Awareness_program_on_commodity_derivatives.jpeg",
        content: "Awareness Programme on Commodity Derivatives"
    },
    {
        href: "../Yoga Day report 21-6-2024.pdf",
        content: "Yoga Day-2024"
    },
    {
        href: "../world_blood_donors_day_report.pdf",
        content: "World Blood Donors Day-2024 Report"
    },
    {
        href: "../International yoga day invitation.pdf",
        content: "Invitation for International Yoga Day"
    },
    {
        href: "../Placements 23-24.pdf",
        content: "Mechanical Placements 2024"
    },
    {
        href: "../Awareness_program_on_commodity_derivatives.jpeg",
        content: "Awareness Programme on Commodity Derivatives"
    },
    {
        href: "../Yoga Day report 21-6-2024.pdf",
        content: "Yoga Day-2024"
    },
    {
        href: "../world_blood_donors_day_report.pdf",
        content: "World Blood Donors Day-2024 Report"
    },
    {
        href: "../International yoga day invitation.pdf",
        content: "Invitation for International Yoga Day"
    },
    {
        href: "../Placements 23-24.pdf",
        content: "Mechanical Placements 2024"
    },
    {
        href: "https://forms.gle/hgaFAmMwt8iMbf7aA",
        content: "Events Organized"
    },
    {
        href: "../newsletter.pdf",
        content: "GAYATRI VIDYA PARISHAD - NEWSLETTER"
    },
    {
        href: "/examcell/examcircular.php",
        content: "Examination (Circular & Time Tables)"
    }
];
links.forEach(linkObj => {
    const link = document.createElement("a");
    link.href = linkObj.href; // Use the URL from the link object
    link.textContent = linkObj.content; // Set the text content to the message from the link object
    notify.appendChild(link); // Append the link to the 'notify' container
  });