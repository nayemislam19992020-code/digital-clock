
const time = document.getElementById("time");

const date = document.getElementById("date");

const day = document.getElementById("day");

const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
];

const updateClock = () => {

    const now = new Date();

    // Time
    let hours = now.getHours();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const minutes = now.getMinutes()
        .toString().padStart(2, "0");

    const seconds = now.getSeconds()
        .toString().padStart(2, "0");

    time.textContent =
        `${hours}:${minutes}:${seconds} ${ampm}`;

    // Date
    const month = months[now.getMonth()];

    const today = now.getDate()
        .toString().padStart(2, "0");

    const year = now.getFullYear();

    date.textContent =
        `${month}/${today}/${year}`;

    // Highlight today's day
    const currentDay = now.getDay();

    const dayIndex = (currentDay + 1) % 7;

    const allDays = day.querySelectorAll("li");

    allDays.forEach((item, index) => {

        if (index === dayIndex) {

            item.classList.add(
                "bg-blue-500",
                "text-white",
                "font-bold"
            );

        } else {

            item.classList.remove(
                "bg-blue-500",
                "text-white",
                "font-bold"
            );

        }

    });

};

updateClock();

setInterval(updateClock, 1000);