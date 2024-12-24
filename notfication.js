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
    const img = document.createElement("img");
    link.href = linkObj.href; // Use the URL from the link object
    img.src = "../assects/gvplogorm.png"; // Corrected the typo from "assects" to "assets"
    img.width = 15;
    link.appendChild(img); // Append the image to the link
    link.appendChild(document.createTextNode(linkObj.content)); // Append the text content
    
    notify.appendChild(link); // Append the link to the 'notify' container
});

// marquee js script

//     document.addEventListener("DOMContentLoaded", () => {
//     const marquee = document.querySelector(links);
//     const speed = 1; // Scrolling Speed
//     let scrollAmount = 0;
//     let isHovered = false;

//     // Duplicates the content
//     const marqueeContent = marquee.innerHTML;
//     marquee.innerHTML += marqueeContent;

//     const startScrolling = () => {
//         if (!isHovered) {
//             scrollAmount -= speed;
//             if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
//                 scrollAmount = 0;
//             }
//             marquee.style.transform = `translateX(${scrollAmount}px)`;
//         }
//         requestAnimationFrame(startScrolling);
//     };

//     marquee.addEventListener("mouseover", () => {
//         isHovered = true;
//     });

//     marquee.addEventListener("mouseout", () => {
//         isHovered = false;
//     });

//     startScrolling();
// });