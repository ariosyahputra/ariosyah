// Experience data array
const experienceData = [
    {
        title: "Junior Developer @ Apple Platform",
        date: "Mar 2023 - Dec 2023",
        description: "The Apple Developer Academy is Asia's first-ever initiative to empower Indonesia's economy by creating world-class developers for the world's most innovative and vibrant app ecosystem.",
        points: [
            "Developed 6 iOS apps and 1 game in 10 months.",
            "Analyzed user needs, implemented solutions, and collaborated on real-world challenges with cross-functional teams using Challenge-Based Learning."
        ]
    },
    {
        title: "iOS Engineer",
        date: "Jul 2023 - Jul 2023",
        description: "During my tenure as an Junior Developer at the Apple Developer Academy, I contributed to PT. MRT Jakarta's mission to enhance urban mobility and connectivity in the capital city through its modern public transit system.",
        points: [
            "Developed a feature for the MRT-J app, aiming to optimize route planning and streamline user navigation.",
            "Utilized push notifications and location services to simplify the process of searching for exit gates within MRT stations, resulting in an improved and user-friendly experience."
        ]
    },
    {
        title: "Engineering Intern",
        date: "Feb 2019 - Feb 2019",
        description: "GMF AeroAsia is an Indonesian company offering aircraft maintenance and repair services, affiliated with Garuda Indonesia.",
        points: [
            "Collaborated with the team, gaining foundational knowledge in aviation systems.",
            "Actively engaged with engineers to grasp the intricacies of their roles, contributing to a comprehensive understanding of the aviation industry."
        ]
    }
];

// Card data array
const projectData = [
    {
        title: "KoKa",
        imageSrc: "https://my.iosda.org/site/glide?path=teams%2F4139%2Ftile%2Ftile+image.jpg&w=600&h=200&fit=crop&s=66460a4808c7b355e376548f0533989c",
        description: "Koka (KosaKata) is an innovative app designed to empower parents to effectively educate their deaf children, and expand their vocabulary, particularly in abstract concepts.",
        technologies: "SwiftUI, AVFoundation, CoreData, Lottie",
        projectUrl: "/projects/KoKa"
    },
    {
        title: "Tingle",
        imageSrc: "https://my.iosda.org/site/glide?path=teams%2F3737%2Ftile%2FMockup+-+FIX.png&w=600&h=200&fit=crop&s=1789cfe4ea603657a4d827916dfdde36",
        description: "Tingle is an WatchOS app that provides sensation of fidgeting and haptic through your Apple Watch, targeted for user with ADHD, to divert their impulsivity into sensory input they need as their enhance their focus.",
        technologies: "WatchOS",
        projectUrl: "#"
    },
    {
        title: "Tera",
        imageSrc: "https://my.iosda.org/site/glide?path=teams%2F3209%2Ftile%2FFinal+Banner+small.jpg&w=600&h=200&fit=crop&s=3724bd54e755833132695503f3b19dac",
        description: "Tera (Teman Bicara) is speech-to-text app to help to communicate with deaf people.",
        technologies: "SwiftUI, Speech, Lottie"
    },
    {
        title: "MRTGo",
        imageSrc: "https://my.iosda.org/site/glide?path=teams%2F3732%2Ftile%2FFrame+93.png&w=600&h=200&fit=crop&s=8a15a5bca94f7d57667b6192f0304bc1",
        description: "The objective of this project is to develop a feature in the MRT-J application using push notification and location on iOS app.",
        technologies: "Core Location, Push Notification",
        projectUrl: "/projects/MRTGo"
    },
    {
        title: "Skipwing",
        imageSrc: "https://my.iosda.org/site/glide?path=teams%2F3778%2Ftile%2Fiosda-min.png&w=600&h=200&fit=crop&s=5be679d250d470c96758128d24af8223",
        description: "Skipwing is a revolutionary take on the timeless game of jumping rope, reinvented for the digital realm.",
        technologies: "SpriteKit, AVFoundation",
        projectUrl: "#"
    }
    ,
    {
        title: "Timee",
        imageSrc: "https://my.iosda.org/site/glide?path=teams%2F3446%2Ftile%2Fthumbnail+timee.png&w=600&h=200&fit=crop&s=3da8dc1269eb7dd203b741db94802d02",
        description: "Timee is the ultimate tool for workers to enhance their focus while doing tasks.",
        technologies: "SwiftUI, AVFoundation, CoreData, Lottie",
        projectUrl: "/projects/Timee"
    }
];

// Function to generate project cards
function generateProjectCards() {
    const cardContainer = document.getElementById('cardContainer');

    projectData.forEach(data => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4', 'mb-4');

        const cardContent = `
            <a href="${data.projectUrl}" class="card-link" ${data.projectUrl && data.projectUrl !== "#" ? "" : "onclick='return false;'"} >
                <div class="card rounded rounded-4">
                    <img src="${data.imageSrc}" class="card-img-top" alt="${data.title} Image" style="border-top-right-radius: 15px; border-top-left-radius: 15px;">
                    <div class="card-body p-4">
                        <h5 class="card-title fw-bold">${data.title}</h5>
                        <p class="card-text">${data.description}</p>
                        <p class="card-text text-muted">${data.technologies}</p>
                    </div>
                </div>
            </a>
        `;
        
        cardDiv.innerHTML = cardContent;
        cardContainer.appendChild(cardDiv);
    });
}



// Function to generate experience content
function generateExperienceContent() {
    experienceData.forEach((data, index) => {
        const contentDiv = document.getElementById(`content${index + 1}`);
        if (contentDiv) {
            const content = `
                <h5 class="fw-bold">${data.title}</h5>
                <p class="experience-date text-muted">${data.date}</p>
                <p>${data.description}</p>
                <div class="row">
                    ${data.points.map(point => `<li>${point}</li>`).join("")}
                </div>
            `;
            contentDiv.innerHTML = content;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Generate project cards
    // generateProjectCards();

    // Generate experience content
    generateExperienceContent();

    // Add the 'loaded' class to the body after a short delay
    setTimeout(function () {
        document.body.classList.add('loaded');
    }, 500); // You can adjust the delay (in milliseconds) as needed
});

document.addEventListener('DOMContentLoaded', function () {
    // Make the default item (content1) active
    var defaultItem = document.querySelector('ul li a[href="#content1"]');
    if (defaultItem) {
        showContent('content1', defaultItem);
    }
});

function showContent(contentId, clickedItem) {
    // Remove the 'active' class from all list items
    var listItems = document.querySelectorAll('ul li a');
    listItems.forEach(function (li) {
        li.classList.remove('active', 'clicked'); // Remove 'clicked' class as well
    });

    // Add the 'active' class to the clicked list item
    clickedItem.classList.add('active', 'clicked');

    // Hide all content divs
    document.querySelectorAll('[id^="content"]').forEach(function (div) {
        div.style.display = 'none';
    });

    // Show the selected content
    document.getElementById(contentId).style.display = 'block';

    // Prevent the default behavior of the anchor tag
    if (event) {
        event.preventDefault();
    }

}

// Initialize typewriter effect
const target = document.getElementById('typewriter');
const typewriter = new Typewriter(target, {
    strings: 'Hello, Ario here.',
    autoStart: true,
    loop: false,
});